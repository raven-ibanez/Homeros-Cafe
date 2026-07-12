import React, { useState } from 'react';
import { Save, Upload, X, Globe, Layout, Info, Phone, Briefcase, Share2 } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';
import { useImageUpload } from '../hooks/useImageUpload';
import { useMenu } from '../hooks/useMenu';

type SettingsTab = 'general' | 'landing' | 'services' | 'about' | 'contact' | 'social';

const SiteSettingsManager: React.FC = () => {
  const { siteSettings, loading, updateSiteSettings } = useSiteSettings();
  const { uploadImage, uploading } = useImageUpload();
  const { menuItems } = useMenu();
  const [activeTab, setActiveTab] = useState<SettingsTab>('general');
  const [isEditing, setIsEditing] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    site_name: '',
    site_description: '',
    currency: '',
    currency_code: '',
    social_fb: '',
    social_ig: '',
    social_tiktok: '',
    link_google_reviews: '',
    link_grabfood: '',
    link_foodpanda: '',
    
    color_cafe_cream: '',
    color_cafe_brown: '',
    color_cafe_accent: '',
    color_cafe_gold: '',
    color_cafe_beige: '',
    color_cafe_clay: '',
    color_cafe_btn_text: '',
    font_heading: '',
    font_body: '',
    font_menu: '',
    landing_hero_badge: '',
    landing_hero_quote: '',
    landing_hero_quote_author: '',
    
    landing_hero_title: '',
    landing_hero_subtitle: '',
    
    landing_crafted_title: '',
    landing_crafted_1_title: '',
    landing_crafted_1_body: '',
    landing_crafted_2_title: '',
    landing_crafted_2_body: '',
    landing_crafted_3_title: '',
    landing_crafted_3_body: '',
    
    landing_featured_title: '',
    landing_featured_subtitle: '',
    
    landing_promo_title: '',
    landing_promo_subtitle: '',
    
    about_story_title_1: '',
    about_story_body_1: '',
    about_story_title_2: '',
    about_story_body_2: '',
    about_story_title_3: '',
    about_story_body_3: '',
    about_story_title_4: '',
    about_story_body_4: '',
    
    about_standards_title: '',
    about_standards_1_title: '',
    about_standards_1_body: '',
    about_standards_2_title: '',
    about_standards_2_body: '',
    about_standards_3_title: '',
    about_standards_3_body: '',
    
    contact_address: '',
    contact_phone: '',
    contact_email: '',
    contact_hours_weekdays: '',
    contact_hours_weekends: '',

    services_title: '',
    services_description: '',
    service_1_title: '',
    service_1_body: '',
    service_2_title: '',
    service_2_body: '',
    service_3_title: '',
    service_3_body: '',
    service_1_gallery: '',
    service_2_gallery: '',
    service_3_gallery: '',
    services_terms_image: '',
    services_inquire_link: ''
  });

  // Selected Featured IDs state
  const [selectedFeaturedIds, setSelectedFeaturedIds] = useState<string[]>([]);

  // Images state
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>('');

  const [heroFile, setHeroFile] = useState<File | null>(null);
  const [heroPreview, setHeroPreview] = useState<string>('');

  const [promoFile, setPromoFile] = useState<File | null>(null);
  const [promoPreview, setPromoPreview] = useState<string>('');

  const [about1File, setAbout1File] = useState<File | null>(null);
  const [about1Preview, setAbout1Preview] = useState<string>('');

  const [about2File, setAbout2File] = useState<File | null>(null);
  const [about2Preview, setAbout2Preview] = useState<string>('');

  const [about3File, setAbout3File] = useState<File | null>(null);
  const [about3Preview, setAbout3Preview] = useState<string>('');

  const [about4File, setAbout4File] = useState<File | null>(null);
  const [about4Preview, setAbout4Preview] = useState<string>('');

  const [service1File, setService1File] = useState<File | null>(null);
  const [service1Preview, setService1Preview] = useState<string>('');

  const [service2File, setService2File] = useState<File | null>(null);
  const [service2Preview, setService2Preview] = useState<string>('');

  const [service3File, setService3File] = useState<File | null>(null);
  const [service3Preview, setService3Preview] = useState<string>('');

  const [termsFile, setTermsFile] = useState<File | null>(null);
  const [termsPreview, setTermsPreview] = useState<string>('');

  // Service Galleries (Selected files from device support)
  const [s1Gallery, setS1Gallery] = useState<{ id: string; url: string; file?: File }[]>([]);
  const [s2Gallery, setS2Gallery] = useState<{ id: string; url: string; file?: File }[]>([]);
  const [s3Gallery, setS3Gallery] = useState<{ id: string; url: string; file?: File }[]>([]);

  React.useEffect(() => {
    if (siteSettings) {
      setFormData({
        site_name: siteSettings.site_name || '',
        site_description: siteSettings.site_description || '',
        currency: siteSettings.currency || 'PHP',
        currency_code: siteSettings.currency_code || 'PHP',
        social_fb: siteSettings.social_fb || '',
        social_ig: siteSettings.social_ig || '',
        social_tiktok: siteSettings.social_tiktok || '',
        link_google_reviews: siteSettings.link_google_reviews || '',
        link_grabfood: siteSettings.link_grabfood || '',
        link_foodpanda: siteSettings.link_foodpanda || '',
        
        color_cafe_cream: siteSettings.color_cafe_cream || '#F5F1E8',
        color_cafe_brown: siteSettings.color_cafe_brown || '#3B2D26',
        color_cafe_accent: siteSettings.color_cafe_accent || '#4E5D3A',
        color_cafe_gold: siteSettings.color_cafe_gold || '#B08D57',
        color_cafe_beige: siteSettings.color_cafe_beige || '#E2DCCE',
        color_cafe_clay: siteSettings.color_cafe_clay || '#B86E4B',
        color_cafe_btn_text: siteSettings.color_cafe_btn_text || '#FFFFFF',
        font_heading: siteSettings.font_heading || 'Cormorant Garamond',
        font_body: siteSettings.font_body || 'Manrope',
        font_menu: siteSettings.font_menu || 'Cormorant Garamond',
        landing_hero_badge: siteSettings.landing_hero_badge || '',
        landing_hero_quote: siteSettings.landing_hero_quote || '',
        landing_hero_quote_author: siteSettings.landing_hero_quote_author || '',
        
        landing_hero_title: siteSettings.landing_hero_title || '',
        landing_hero_subtitle: siteSettings.landing_hero_subtitle || '',
        
        landing_crafted_title: siteSettings.landing_crafted_title || '',
        landing_crafted_1_title: siteSettings.landing_crafted_1_title || '',
        landing_crafted_1_body: siteSettings.landing_crafted_1_body || '',
        landing_crafted_2_title: siteSettings.landing_crafted_2_title || '',
        landing_crafted_2_body: siteSettings.landing_crafted_2_body || '',
        landing_crafted_3_title: siteSettings.landing_crafted_3_title || '',
        landing_crafted_3_body: siteSettings.landing_crafted_3_body || '',
        
        landing_featured_title: siteSettings.landing_featured_title || '',
        landing_featured_subtitle: siteSettings.landing_featured_subtitle || '',
        
        landing_promo_title: siteSettings.landing_promo_title || '',
        landing_promo_subtitle: siteSettings.landing_promo_subtitle || '',
        
        about_story_title_1: siteSettings.about_story_title_1 || '',
        about_story_body_1: siteSettings.about_story_body_1 || '',
        about_story_title_2: siteSettings.about_story_title_2 || '',
        about_story_body_2: siteSettings.about_story_body_2 || '',
        about_story_title_3: siteSettings.about_story_title_3 || '',
        about_story_body_3: siteSettings.about_story_body_3 || '',
        about_story_title_4: siteSettings.about_story_title_4 || '',
        about_story_body_4: siteSettings.about_story_body_4 || '',
        
        about_standards_title: siteSettings.about_standards_title || '',
        about_standards_1_title: siteSettings.about_standards_1_title || '',
        about_standards_1_body: siteSettings.about_standards_1_body || '',
        about_standards_2_title: siteSettings.about_standards_2_title || '',
        about_standards_2_body: siteSettings.about_standards_2_body || '',
        about_standards_3_title: siteSettings.about_standards_3_title || '',
        about_standards_3_body: siteSettings.about_standards_3_body || '',
        
        contact_address: siteSettings.contact_address || '',
        contact_phone: siteSettings.contact_phone || '',
        contact_email: siteSettings.contact_email || '',
        contact_hours_weekdays: siteSettings.contact_hours_weekdays || '',
        contact_hours_weekends: siteSettings.contact_hours_weekends || '',

        services_title: siteSettings.services_title || '',
        services_description: siteSettings.services_description || '',
        service_1_title: siteSettings.service_1_title || '',
        service_1_body: siteSettings.service_1_body || '',
        service_2_title: siteSettings.service_2_title || '',
        service_2_body: siteSettings.service_2_body || '',
        service_3_title: siteSettings.service_3_title || '',
        service_3_body: siteSettings.service_3_body || '',
        service_1_gallery: siteSettings.service_1_gallery || '',
        service_2_gallery: siteSettings.service_2_gallery || '',
        service_3_gallery: siteSettings.service_3_gallery || '',
        services_terms_image: siteSettings.services_terms_image || '',
        services_inquire_link: siteSettings.services_inquire_link || ''
      });
      setLogoPreview(siteSettings.site_logo || '');
      setHeroPreview(siteSettings.landing_hero_image || '');
      setPromoPreview(siteSettings.landing_promo_image || '');
      setAbout1Preview(siteSettings.about_story_image_1 || '');
      setAbout2Preview(siteSettings.about_story_image_2 || '');
      setAbout3Preview(siteSettings.about_story_image_3 || '');
      setAbout4Preview(siteSettings.about_story_image_4 || '');
      setService1Preview(siteSettings.service_1_image || '');
      setService2Preview(siteSettings.service_2_image || '');
      setService3Preview(siteSettings.service_3_image || '');
      setTermsPreview(siteSettings.services_terms_image || '');

      setS1Gallery(
        (siteSettings.service_1_gallery || '')
          .split(',')
          .filter(Boolean)
          .map((url) => ({ id: url, url: url }))
      );
      setS2Gallery(
        (siteSettings.service_2_gallery || '')
          .split(',')
          .filter(Boolean)
          .map((url) => ({ id: url, url: url }))
      );
      setS3Gallery(
        (siteSettings.service_3_gallery || '')
          .split(',')
          .filter(Boolean)
          .map((url) => ({ id: url, url: url }))
      );
      
      setSelectedFeaturedIds(
        siteSettings.landing_featured_ids
          ? siteSettings.landing_featured_ids.split(',').filter(Boolean)
          : []
      );
    }
  }, [siteSettings]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddGalleryImages = (e: React.ChangeEvent<HTMLInputElement>, serviceIndex: 1 | 2 | 3) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const newItems = files.map((file) => ({
      id: Math.random().toString(36).substring(7) + '-' + Date.now(),
      url: URL.createObjectURL(file),
      file
    }));

    if (serviceIndex === 1) {
      setS1Gallery((prev) => [...prev, ...newItems]);
    } else if (serviceIndex === 2) {
      setS2Gallery((prev) => [...prev, ...newItems]);
    } else if (serviceIndex === 3) {
      setS3Gallery((prev) => [...prev, ...newItems]);
    }
    e.target.value = '';
  };

  const handleRemoveGalleryImage = (serviceIndex: 1 | 2 | 3, itemId: string) => {
    if (serviceIndex === 1) {
      setS1Gallery((prev) => prev.filter((item) => item.id !== itemId));
    } else if (serviceIndex === 2) {
      setS2Gallery((prev) => prev.filter((item) => item.id !== itemId));
    } else if (serviceIndex === 3) {
      setS3Gallery((prev) => prev.filter((item) => item.id !== itemId));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (file: File | null) => void, previewSetter: (preview: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      setter(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        previewSetter(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFeaturedIdToggle = (id: string) => {
    setSelectedFeaturedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSave = async () => {
    try {
      let finalLogoUrl = logoPreview;
      let finalHeroUrl = heroPreview;
      let finalPromoBgUrl = promoPreview;
      let finalAbout1Url = about1Preview;
      let finalAbout2Url = about2Preview;
      let finalService1Url = service1Preview;
      let finalService2Url = service2Preview;
      let finalService3Url = service3Preview;
      
      // Upload new logo if selected
      if (logoFile) {
        finalLogoUrl = await uploadImage(logoFile, 'site-logo');
      }

      // Upload hero image if selected
      if (heroFile) {
        finalHeroUrl = await uploadImage(heroFile, 'landing-hero');
      }

      // Upload promo bg if selected
      if (promoFile) {
        finalPromoBgUrl = await uploadImage(promoFile, 'landing-promo-bg');
      }

      // Upload about 1 image if selected
      if (about1File) {
        finalAbout1Url = await uploadImage(about1File, 'about-story-1');
      }

      // Upload about 2 image if selected
      if (about2File) {
        finalAbout2Url = await uploadImage(about2File, 'about-story-2');
      }

      let finalAbout3Url = about3Preview;
      let finalAbout4Url = about4Preview;

      // Upload about 3 image if selected
      if (about3File) {
        finalAbout3Url = await uploadImage(about3File, 'about-story-3');
      }

      // Upload about 4 image if selected
      if (about4File) {
        finalAbout4Url = await uploadImage(about4File, 'about-story-4');
      }

      // Upload service 1 image if selected
      if (service1File) {
        finalService1Url = await uploadImage(service1File, 'service-1');
      }

      // Upload service 2 image if selected
      if (service2File) {
        finalService2Url = await uploadImage(service2File, 'service-2');
      }

      // Upload gallery 1 files
      const uploadedS1Urls = await Promise.all(
        s1Gallery.map(async (item) => {
          if (item.file) {
            const fileName = `service-1-gallery-${Date.now()}-${Math.random().toString(36).substring(7)}`;
            return await uploadImage(item.file, fileName);
          }
          return item.url;
        })
      );

      // Upload gallery 2 files
      const uploadedS2Urls = await Promise.all(
        s2Gallery.map(async (item) => {
          if (item.file) {
            const fileName = `service-2-gallery-${Date.now()}-${Math.random().toString(36).substring(7)}`;
            return await uploadImage(item.file, fileName);
          }
          return item.url;
        })
      );

      // Upload gallery 3 files
      const uploadedS3Urls = await Promise.all(
        s3Gallery.map(async (item) => {
          if (item.file) {
            const fileName = `service-3-gallery-${Date.now()}-${Math.random().toString(36).substring(7)}`;
            return await uploadImage(item.file, fileName);
          }
          return item.url;
        })
      );

      // Upload service 3 image if selected
      if (service3File) {
        finalService3Url = await uploadImage(service3File, 'service-3');
      }

      // Upload terms image if selected
      let finalTermsUrl = termsPreview;
      if (termsFile) {
        finalTermsUrl = await uploadImage(termsFile, 'services-terms');
      }

      // Update all settings in DB
      await updateSiteSettings({
        site_name: formData.site_name,
        site_description: formData.site_description,
        currency: formData.currency,
        currency_code: formData.currency_code,
        site_logo: finalLogoUrl,
        social_fb: formData.social_fb,
        social_ig: formData.social_ig,
        social_tiktok: formData.social_tiktok,
        link_google_reviews: formData.link_google_reviews,
        link_grabfood: formData.link_grabfood,
        link_foodpanda: formData.link_foodpanda,
        
        color_cafe_cream: formData.color_cafe_cream,
        color_cafe_brown: formData.color_cafe_brown,
        color_cafe_accent: formData.color_cafe_accent,
        color_cafe_gold: formData.color_cafe_gold,
        color_cafe_beige: formData.color_cafe_beige,
        color_cafe_clay: formData.color_cafe_clay,
        color_cafe_btn_text: formData.color_cafe_btn_text,
        font_heading: formData.font_heading,
        font_body: formData.font_body,
        font_menu: formData.font_menu,
        landing_hero_badge: formData.landing_hero_badge,
        landing_hero_quote: formData.landing_hero_quote,
        landing_hero_quote_author: formData.landing_hero_quote_author,
        
        landing_hero_title: formData.landing_hero_title,
        landing_hero_subtitle: formData.landing_hero_subtitle,
        landing_hero_image: finalHeroUrl,
        
        landing_crafted_title: formData.landing_crafted_title,
        landing_crafted_1_title: formData.landing_crafted_1_title,
        landing_crafted_1_body: formData.landing_crafted_1_body,
        landing_crafted_2_title: formData.landing_crafted_2_title,
        landing_crafted_2_body: formData.landing_crafted_2_body,
        landing_crafted_3_title: formData.landing_crafted_3_title,
        landing_crafted_3_body: formData.landing_crafted_3_body,
        
        landing_featured_title: formData.landing_featured_title,
        landing_featured_subtitle: formData.landing_featured_subtitle,
        landing_featured_ids: selectedFeaturedIds.join(','),
        
        landing_promo_title: formData.landing_promo_title,
        landing_promo_subtitle: formData.landing_promo_subtitle,
        landing_promo_image: finalPromoBgUrl,
        
        about_story_title_1: formData.about_story_title_1,
        about_story_body_1: formData.about_story_body_1,
        about_story_image_1: finalAbout1Url,
        
        about_story_title_2: formData.about_story_title_2,
        about_story_body_2: formData.about_story_body_2,
        about_story_image_2: finalAbout2Url,

        about_story_title_3: formData.about_story_title_3,
        about_story_body_3: formData.about_story_body_3,
        about_story_image_3: finalAbout3Url,

        about_story_title_4: formData.about_story_title_4,
        about_story_body_4: formData.about_story_body_4,
        about_story_image_4: finalAbout4Url,
        
        about_standards_title: formData.about_standards_title,
        about_standards_1_title: formData.about_standards_1_title,
        about_standards_1_body: formData.about_standards_1_body,
        about_standards_2_title: formData.about_standards_2_title,
        about_standards_2_body: formData.about_standards_2_body,
        about_standards_3_title: formData.about_standards_3_title,
        about_standards_3_body: formData.about_standards_3_body,
        
        contact_address: formData.contact_address,
        contact_phone: formData.contact_phone,
        contact_email: formData.contact_email,
        contact_hours_weekdays: formData.contact_hours_weekdays,
        contact_hours_weekends: formData.contact_hours_weekends,

        services_title: formData.services_title,
        services_description: formData.services_description,
        service_1_title: formData.service_1_title,
        service_1_body: formData.service_1_body,
        service_1_image: finalService1Url,
        service_2_title: formData.service_2_title,
        service_2_body: formData.service_2_body,
        service_2_image: finalService2Url,
        service_3_title: formData.service_3_title,
        service_3_body: formData.service_3_body,
        service_3_image: finalService3Url,
        service_1_gallery: uploadedS1Urls.filter(Boolean).join(','),
        service_2_gallery: uploadedS2Urls.filter(Boolean).join(','),
        service_3_gallery: uploadedS3Urls.filter(Boolean).join(','),
        services_terms_image: finalTermsUrl,
        services_inquire_link: formData.services_inquire_link
      });

      setIsEditing(false);
      setLogoFile(null);
      setHeroFile(null);
      setPromoFile(null);
      setAbout1File(null);
      setAbout2File(null);
      setService1File(null);
      setService2File(null);
      setService3File(null);
      setTermsFile(null);
      alert('Settings saved successfully!');
    } catch (error) {
      console.error('Error saving site settings:', error);
      alert('Error saving site settings: ' + (error instanceof Error ? error.message : 'Unknown error occurred'));
    }
  };

  const handleCancel = () => {
    if (siteSettings) {
      setFormData({
        site_name: siteSettings.site_name || '',
        site_description: siteSettings.site_description || '',
        currency: siteSettings.currency || 'PHP',
        currency_code: siteSettings.currency_code || 'PHP',
        social_fb: siteSettings.social_fb || '',
        social_ig: siteSettings.social_ig || '',
        social_tiktok: siteSettings.social_tiktok || '',
        link_google_reviews: siteSettings.link_google_reviews || '',
        link_grabfood: siteSettings.link_grabfood || '',
        link_foodpanda: siteSettings.link_foodpanda || '',
        
        color_cafe_cream: siteSettings.color_cafe_cream || '#F5F1E8',
        color_cafe_brown: siteSettings.color_cafe_brown || '#3B2D26',
        color_cafe_accent: siteSettings.color_cafe_accent || '#4E5D3A',
        color_cafe_gold: siteSettings.color_cafe_gold || '#B08D57',
        color_cafe_beige: siteSettings.color_cafe_beige || '#E2DCCE',
        color_cafe_clay: siteSettings.color_cafe_clay || '#B86E4B',
        color_cafe_btn_text: siteSettings.color_cafe_btn_text || '#FFFFFF',
        font_heading: siteSettings.font_heading || 'Cormorant Garamond',
        font_body: siteSettings.font_body || 'Manrope',
        font_menu: siteSettings.font_menu || 'Cormorant Garamond',
        landing_hero_badge: siteSettings.landing_hero_badge || '',
        landing_hero_quote: siteSettings.landing_hero_quote || '',
        landing_hero_quote_author: siteSettings.landing_hero_quote_author || '',
        
        landing_hero_title: siteSettings.landing_hero_title || '',
        landing_hero_subtitle: siteSettings.landing_hero_subtitle || '',
        
        landing_crafted_title: siteSettings.landing_crafted_title || '',
        landing_crafted_1_title: siteSettings.landing_crafted_1_title || '',
        landing_crafted_1_body: siteSettings.landing_crafted_1_body || '',
        landing_crafted_2_title: siteSettings.landing_crafted_2_title || '',
        landing_crafted_2_body: siteSettings.landing_crafted_2_body || '',
        landing_crafted_3_title: siteSettings.landing_crafted_3_title || '',
        landing_crafted_3_body: siteSettings.landing_crafted_3_body || '',
        
        landing_featured_title: siteSettings.landing_featured_title || '',
        landing_featured_subtitle: siteSettings.landing_featured_subtitle || '',
        
        landing_promo_title: siteSettings.landing_promo_title || '',
        landing_promo_subtitle: siteSettings.landing_promo_subtitle || '',
        
        about_story_title_1: siteSettings.about_story_title_1 || '',
        about_story_body_1: siteSettings.about_story_body_1 || '',
        about_story_title_2: siteSettings.about_story_title_2 || '',
        about_story_body_2: siteSettings.about_story_body_2 || '',
        about_story_title_3: siteSettings.about_story_title_3 || '',
        about_story_body_3: siteSettings.about_story_body_3 || '',
        about_story_title_4: siteSettings.about_story_title_4 || '',
        about_story_body_4: siteSettings.about_story_body_4 || '',
        
        about_standards_title: siteSettings.about_standards_title || '',
        about_standards_1_title: siteSettings.about_standards_1_title || '',
        about_standards_1_body: siteSettings.about_standards_1_body || '',
        about_standards_2_title: siteSettings.about_standards_2_title || '',
        about_standards_2_body: siteSettings.about_standards_2_body || '',
        about_standards_3_title: siteSettings.about_standards_3_title || '',
        about_standards_3_body: siteSettings.about_standards_3_body || '',
        
        contact_address: siteSettings.contact_address || '',
        contact_phone: siteSettings.contact_phone || '',
        contact_email: siteSettings.contact_email || '',
        contact_hours_weekdays: siteSettings.contact_hours_weekdays || '',
        contact_hours_weekends: siteSettings.contact_hours_weekends || '',

        services_title: siteSettings.services_title || '',
        services_description: siteSettings.services_description || '',
        service_1_title: siteSettings.service_1_title || '',
        service_1_body: siteSettings.service_1_body || '',
        service_2_title: siteSettings.service_2_title || '',
        service_2_body: siteSettings.service_2_body || '',
        service_3_title: siteSettings.service_3_title || '',
        service_3_body: siteSettings.service_3_body || '',
        service_1_gallery: siteSettings.service_1_gallery || '',
        service_2_gallery: siteSettings.service_2_gallery || '',
        service_3_gallery: siteSettings.service_3_gallery || '',
        services_terms_image: siteSettings.services_terms_image || '',
        services_inquire_link: siteSettings.services_inquire_link || ''
      });
      setLogoPreview(siteSettings.site_logo || '');
      setHeroPreview(siteSettings.landing_hero_image || '');
      setPromoPreview(siteSettings.landing_promo_image || '');
      setAbout1Preview(siteSettings.about_story_image_1 || '');
      setAbout2Preview(siteSettings.about_story_image_2 || '');
      setAbout3Preview(siteSettings.about_story_image_3 || '');
      setAbout4Preview(siteSettings.about_story_image_4 || '');
      setService1Preview(siteSettings.service_1_image || '');
      setService2Preview(siteSettings.service_2_image || '');
      setService3Preview(siteSettings.service_3_image || '');
      setTermsPreview(siteSettings.services_terms_image || '');

      setS1Gallery(
        (siteSettings.service_1_gallery || '')
          .split(',')
          .filter(Boolean)
          .map((url) => ({ id: url, url: url }))
      );
      setS2Gallery(
        (siteSettings.service_2_gallery || '')
          .split(',')
          .filter(Boolean)
          .map((url) => ({ id: url, url: url }))
      );
      setS3Gallery(
        (siteSettings.service_3_gallery || '')
          .split(',')
          .filter(Boolean)
          .map((url) => ({ id: url, url: url }))
      );
      
      setSelectedFeaturedIds(
        siteSettings.landing_featured_ids
          ? siteSettings.landing_featured_ids.split(',').filter(Boolean)
          : []
      );
    }
    setIsEditing(false);
    setLogoFile(null);
    setHeroFile(null);
    setPromoFile(null);
    setAbout1File(null);
    setAbout2File(null);
    setAbout3File(null);
    setAbout4File(null);
    setService1File(null);
    setService2File(null);
    setService3File(null);
    setTermsFile(null);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-4xl">
      {/* Header and Save Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-2xl font-agrandir font-black text-black">Website Settings</h2>
          <p className="text-gray-500 text-sm">Configure page contents, imagery, and branding.</p>
        </div>
        
        <div className="flex space-x-2">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2 text-sm font-semibold"
            >
              <span>Edit Settings</span>
            </button>
          ) : (
            <>
              <button
                onClick={handleCancel}
                className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200 flex items-center space-x-2 text-sm font-semibold"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
              <button
                onClick={handleSave}
                disabled={uploading}
                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2 text-sm font-semibold disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                <span>{uploading ? 'Saving...' : 'Save Changes'}</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Tabs list */}
      <div className="flex border-b border-gray-100 mb-6 overflow-x-auto scrollbar-hide">
        <button
          onClick={() => setActiveTab('general')}
          className={`flex items-center space-x-2 py-3 px-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
            activeTab === 'general' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <Globe className="h-4 w-4" />
          <span>General</span>
        </button>
        <button
          onClick={() => setActiveTab('landing')}
          className={`flex items-center space-x-2 py-3 px-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
            activeTab === 'landing' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <Layout className="h-4 w-4" />
          <span>Landing Page</span>
        </button>
        <button
          onClick={() => setActiveTab('services')}
          className={`flex items-center space-x-2 py-3 px-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
            activeTab === 'services' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <Briefcase className="h-4 w-4" />
          <span>Services</span>
        </button>
        <button
          onClick={() => setActiveTab('about')}
          className={`flex items-center space-x-2 py-3 px-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
            activeTab === 'about' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <Info className="h-4 w-4" />
          <span>About Us</span>
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className={`flex items-center space-x-2 py-3 px-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
            activeTab === 'contact' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <Phone className="h-4 w-4" />
          <span>Contact Us</span>
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`flex items-center space-x-2 py-3 px-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
            activeTab === 'social' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <Share2 className="h-4 w-4" />
          <span>Social & Delivery</span>
        </button>
      </div>

      {/* Form Content */}
      <div className="space-y-6">
        {/* Tab 1: General Settings */}
        {activeTab === 'general' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Logo</label>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
                  {logoPreview ? <img src={logoPreview} alt="Logo" className="w-full h-full object-cover" /> : <div className="text-2xl">☕</div>}
                </div>
                {isEditing && (
                  <div>
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setLogoFile, setLogoPreview)} className="hidden" id="logo-upload" />
                    <label htmlFor="logo-upload" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer text-sm flex items-center space-x-2 border">
                      <Upload className="h-4 w-4" />
                      <span>Upload Logo</span>
                    </label>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
              {isEditing ? (
                <input type="text" name="site_name" value={formData.site_name} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none" />
              ) : (
                <p className="text-lg font-medium text-black">{siteSettings?.site_name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
              {isEditing ? (
                <textarea name="site_description" value={formData.site_description} onChange={handleInputChange} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none" />
              ) : (
                <p className="text-gray-600">{siteSettings?.site_description}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Currency Symbol</label>
                {isEditing ? (
                  <input type="text" name="currency" value={formData.currency} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-black font-semibold">{siteSettings?.currency}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Currency Code</label>
                {isEditing ? (
                  <input type="text" name="currency_code" value={formData.currency_code} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-black font-semibold">{siteSettings?.currency_code}</p>
                )}
              </div>
            </div>

            {/* Color Scheme Picker Section */}
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <h3 className="font-bold text-black text-base">Website Color Scheme</h3>
              <p className="text-xs text-gray-500">Pick custom colors for your brand. Admin pages will not be affected.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Background color */}
                <div className="flex items-center space-x-3 border p-3 rounded-xl">
                  <input
                    type="color"
                    name="color_cafe_cream"
                    value={formData.color_cafe_cream}
                    disabled={!isEditing}
                    onChange={handleInputChange}
                    className="w-10 h-10 border-0 rounded cursor-pointer disabled:opacity-50"
                  />
                  <div>
                    <label className="block text-xs font-semibold text-gray-500">Background Color</label>
                    <span className="text-sm font-medium text-black">{formData.color_cafe_cream || '#F5F1E8'}</span>
                  </div>
                </div>

                {/* Typography / Dark Neutral color */}
                <div className="flex items-center space-x-3 border p-3 rounded-xl">
                  <input
                    type="color"
                    name="color_cafe_brown"
                    value={formData.color_cafe_brown}
                    disabled={!isEditing}
                    onChange={handleInputChange}
                    className="w-10 h-10 border-0 rounded cursor-pointer disabled:opacity-50"
                  />
                  <div>
                    <label className="block text-xs font-semibold text-gray-500">Typography / Text Color</label>
                    <span className="text-sm font-medium text-black">{formData.color_cafe_brown || '#3B2D26'}</span>
                  </div>
                </div>

                {/* Accent primary color */}
                <div className="flex items-center space-x-3 border p-3 rounded-xl">
                  <input
                    type="color"
                    name="color_cafe_accent"
                    value={formData.color_cafe_accent}
                    disabled={!isEditing}
                    onChange={handleInputChange}
                    className="w-10 h-10 border-0 rounded cursor-pointer disabled:opacity-50"
                  />
                  <div>
                    <label className="block text-xs font-semibold text-gray-500">Primary Accent (Buttons/Links)</label>
                    <span className="text-sm font-medium text-black">{formData.color_cafe_accent || '#4E5D3A'}</span>
                  </div>
                </div>

                {/* Gold Secondary Color */}
                <div className="flex items-center space-x-3 border p-3 rounded-xl">
                  <input
                    type="color"
                    name="color_cafe_gold"
                    value={formData.color_cafe_gold}
                    disabled={!isEditing}
                    onChange={handleInputChange}
                    className="w-10 h-10 border-0 rounded cursor-pointer disabled:opacity-50"
                  />
                  <div>
                    <label className="block text-xs font-semibold text-gray-500">Detail Color (Brass / Highlights)</label>
                    <span className="text-sm font-medium text-black">{formData.color_cafe_gold || '#B08D57'}</span>
                  </div>
                </div>

                {/* Divider Beige color */}
                <div className="flex items-center space-x-3 border p-3 rounded-xl">
                  <input
                    type="color"
                    name="color_cafe_beige"
                    value={formData.color_cafe_beige}
                    disabled={!isEditing}
                    onChange={handleInputChange}
                    className="w-10 h-10 border-0 rounded cursor-pointer disabled:opacity-50"
                  />
                  <div>
                    <label className="block text-xs font-semibold text-gray-500">Soft Border & Divider Color</label>
                    <span className="text-sm font-medium text-black">{formData.color_cafe_beige || '#E2DCCE'}</span>
                  </div>
                </div>

                {/* Terracotta Clay Supporting Color */}
                <div className="flex items-center space-x-3 border p-3 rounded-xl">
                  <input
                    type="color"
                    name="color_cafe_clay"
                    value={formData.color_cafe_clay}
                    disabled={!isEditing}
                    onChange={handleInputChange}
                    className="w-10 h-10 border-0 rounded cursor-pointer disabled:opacity-50"
                  />
                  <div>
                    <label className="block text-xs font-semibold text-gray-500">Secondary Highlight (Clay / Badges)</label>
                    <span className="text-sm font-medium text-black">{formData.color_cafe_clay || '#B86E4B'}</span>
                  </div>
                </div>

                {/* Button Text Color */}
                <div className="flex items-center space-x-3 border p-3 rounded-xl">
                  <input
                    type="color"
                    name="color_cafe_btn_text"
                    value={formData.color_cafe_btn_text}
                    disabled={!isEditing}
                    onChange={handleInputChange}
                    className="w-10 h-10 border-0 rounded cursor-pointer disabled:opacity-50"
                  />
                  <div>
                    <label className="block text-xs font-semibold text-gray-500">Button Text Color</label>
                    <span className="text-sm font-medium text-black">{formData.color_cafe_btn_text || '#FFFFFF'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fonts Picker Section */}
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <h3 className="font-bold text-black text-base">Website Fonts</h3>
              <p className="text-xs text-gray-500">Choose custom fonts for headings and body content across the website.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Heading Font */}
                <div className="border p-4 rounded-xl space-y-2">
                  <label className="block text-xs font-semibold text-gray-500">Heading Font</label>
                  <select
                    name="font_heading"
                    value={formData.font_heading}
                    disabled={!isEditing}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-cafe-accent disabled:bg-gray-50 disabled:text-gray-500"
                  >
                    <option value="Cormorant Garamond">Cormorant Garamond (Elegant Serif)</option>
                    <option value="Playfair Display">Playfair Display (Classic Serif)</option>
                    <option value="Lora">Lora (Modern Serif)</option>
                    <option value="Cinzel">Cinzel (Cinematic Serif)</option>
                    <option value="Manrope">Manrope (Modern Sans)</option>
                    <option value="Inter">Inter (Clean Sans)</option>
                    <option value="Poppins">Poppins (Geometric Sans)</option>
                    <option value="Montserrat">Montserrat (Stylish Sans)</option>
                    <option value="Outfit">Outfit (Minimalist Sans)</option>
                  </select>
                  <span className="text-xs text-gray-400 block pt-1">Used for headers, banners, and section titles.</span>
                </div>

                {/* Body Font */}
                <div className="border p-4 rounded-xl space-y-2">
                  <label className="block text-xs font-semibold text-gray-500">Body Font</label>
                  <select
                    name="font_body"
                    value={formData.font_body}
                    disabled={!isEditing}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-cafe-accent disabled:bg-gray-50 disabled:text-gray-500"
                  >
                    <option value="Manrope">Manrope (Modern Sans)</option>
                    <option value="Inter">Inter (Clean Sans)</option>
                    <option value="Roboto">Roboto (Standard Sans)</option>
                    <option value="Poppins">Poppins (Geometric Sans)</option>
                    <option value="Montserrat">Montserrat (Stylish Sans)</option>
                    <option value="Open Sans">Open Sans (Highly Readable)</option>
                    <option value="Outfit">Outfit (Minimalist Sans)</option>
                    <option value="Lora">Lora (Elegant Serif)</option>
                  </select>
                  <span className="text-xs text-gray-400 block pt-1">Used for paragraphs, descriptions, and site details.</span>
                </div>

                {/* Menu Font */}
                <div className="border p-4 rounded-xl space-y-2">
                  <label className="block text-xs font-semibold text-gray-500">Menu Card Font</label>
                  <select
                    name="font_menu"
                    value={formData.font_menu}
                    disabled={!isEditing}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-cafe-accent disabled:bg-gray-50 disabled:text-gray-500"
                  >
                    <option value="Cormorant Garamond">Cormorant Garamond (Elegant Serif)</option>
                    <option value="Playfair Display">Playfair Display (Classic Serif)</option>
                    <option value="Lora">Lora (Modern Serif)</option>
                    <option value="Cinzel">Cinzel (Cinematic Serif)</option>
                    <option value="Manrope">Manrope (Modern Sans)</option>
                    <option value="Inter">Inter (Clean Sans)</option>
                    <option value="Poppins">Poppins (Geometric Sans)</option>
                    <option value="Montserrat">Montserrat (Stylish Sans)</option>
                    <option value="Outfit">Outfit (Minimalist Sans)</option>
                  </select>
                  <span className="text-xs text-gray-400 block pt-1">Used for product cards (names, prices, descriptions).</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Landing Page Settings */}
        {activeTab === 'landing' && (
          <div className="space-y-6">
            {/* Hero Sub-section */}
            <div className="border-b border-gray-100 pb-6 space-y-4">
              <h3 className="font-bold text-black text-base">Hero Section</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hero Image</label>
                <div className="space-y-3">
                  <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border">
                    {heroPreview ? <img src={heroPreview} alt="Hero" className="w-full h-full object-cover" /> : <div className="text-gray-400">No Image Uploaded</div>}
                  </div>
                  {isEditing && (
                    <div>
                      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setHeroFile, setHeroPreview)} className="hidden" id="hero-upload" />
                      <label htmlFor="hero-upload" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer text-sm inline-flex items-center space-x-2 border">
                        <Upload className="h-4 w-4" />
                        <span>Upload Hero Image</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hero Title</label>
                {isEditing ? (
                  <textarea name="landing_hero_title" value={formData.landing_hero_title} onChange={handleInputChange} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-lg font-bold text-black whitespace-pre-wrap">{siteSettings?.landing_hero_title}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hero Subtitle</label>
                {isEditing ? (
                  <textarea name="landing_hero_subtitle" value={formData.landing_hero_subtitle} onChange={handleInputChange} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-gray-600">{siteSettings?.landing_hero_subtitle}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hero Preheader Badge</label>
                {isEditing ? (
                  <input type="text" name="landing_hero_badge" value={formData.landing_hero_badge} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-black">{siteSettings?.landing_hero_badge}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-100 p-4 rounded-xl">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Hero Image Quote</label>
                  {isEditing ? (
                    <input type="text" name="landing_hero_quote" value={formData.landing_hero_quote} onChange={handleInputChange} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="italic text-black">{siteSettings?.landing_hero_quote}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Hero Image Quote Author / Label</label>
                  {isEditing ? (
                    <input type="text" name="landing_hero_quote_author" value={formData.landing_hero_quote_author} onChange={handleInputChange} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="text-gray-600">{siteSettings?.landing_hero_quote_author}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Crafted Section (Core Values) */}
            <div className="border-b border-gray-100 pb-6 space-y-4">
              <h3 className="font-bold text-black text-base">Core Concept (Crafted Section)</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                {isEditing ? (
                  <input type="text" name="landing_crafted_title" value={formData.landing_crafted_title} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="font-bold text-black">{siteSettings?.landing_crafted_title}</p>
                )}
              </div>

              {/* Box 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-100 p-4 rounded-xl">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Feature 1 Title</label>
                  {isEditing ? (
                    <input type="text" name="landing_crafted_1_title" value={formData.landing_crafted_1_title} onChange={handleInputChange} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="font-medium text-black">{siteSettings?.landing_crafted_1_title}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Feature 1 Description</label>
                  {isEditing ? (
                    <textarea name="landing_crafted_1_body" value={formData.landing_crafted_1_body} onChange={handleInputChange} rows={2} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="text-gray-500 text-sm">{siteSettings?.landing_crafted_1_body}</p>
                  )}
                </div>
              </div>

              {/* Box 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-100 p-4 rounded-xl">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Feature 2 Title</label>
                  {isEditing ? (
                    <input type="text" name="landing_crafted_2_title" value={formData.landing_crafted_2_title} onChange={handleInputChange} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="font-medium text-black">{siteSettings?.landing_crafted_2_title}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Feature 2 Description</label>
                  {isEditing ? (
                    <textarea name="landing_crafted_2_body" value={formData.landing_crafted_2_body} onChange={handleInputChange} rows={2} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="text-gray-500 text-sm">{siteSettings?.landing_crafted_2_body}</p>
                  )}
                </div>
              </div>

              {/* Box 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-100 p-4 rounded-xl">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Feature 3 Title</label>
                  {isEditing ? (
                    <input type="text" name="landing_crafted_3_title" value={formData.landing_crafted_3_title} onChange={handleInputChange} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="font-medium text-black">{siteSettings?.landing_crafted_3_title}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Feature 3 Description</label>
                  {isEditing ? (
                    <textarea name="landing_crafted_3_body" value={formData.landing_crafted_3_body} onChange={handleInputChange} rows={2} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="text-gray-500 text-sm">{siteSettings?.landing_crafted_3_body}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Featured Specialties Section */}
            <div className="border-b border-gray-100 pb-6 space-y-4">
              <h3 className="font-bold text-black text-base">Featured Specialties Section</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                {isEditing ? (
                  <input type="text" name="landing_featured_title" value={formData.landing_featured_title} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="font-bold text-black">{siteSettings?.landing_featured_title}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section Subtitle</label>
                {isEditing ? (
                  <input type="text" name="landing_featured_subtitle" value={formData.landing_featured_subtitle} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-gray-600 text-sm">{siteSettings?.landing_featured_subtitle}</p>
                )}
              </div>

              {/* Selector / Picker for Featured Menu Items */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Specialties Picker
                </label>
                <p className="text-xs text-gray-500 mb-3">Select the menu items you want to feature on the homepage.</p>
                
                <div className="border border-gray-200 rounded-xl max-h-60 overflow-y-auto p-4 space-y-2.5 bg-gray-50/50">
                  {menuItems.length === 0 ? (
                    <p className="text-gray-400 text-sm text-center">No menu items found in the database.</p>
                  ) : (
                    menuItems.map(item => (
                      <label 
                        key={item.id} 
                        className={`flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer select-none border ${
                          selectedFeaturedIds.includes(item.id) 
                            ? 'bg-red-50 border-red-200 text-red-900' 
                            : 'bg-white border-gray-100 hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <input
                          type="checkbox"
                          disabled={!isEditing}
                          checked={selectedFeaturedIds.includes(item.id)}
                          onChange={() => handleFeaturedIdToggle(item.id)}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500 h-4.5 w-4.5 disabled:opacity-50"
                        />
                        <div className="flex-1 flex justify-between items-center text-sm">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-600 uppercase tracking-wider">{item.category}</span>
                        </div>
                      </label>
                    ))
                  )}
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
                  <span>Selected: {selectedFeaturedIds.length} items</span>
                  {selectedFeaturedIds.length > 0 && isEditing && (
                    <button 
                      onClick={() => setSelectedFeaturedIds([])} 
                      className="text-red-500 hover:underline"
                    >
                      Clear Selection
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Promo Banner Section */}
            <div className="space-y-4">
              <h3 className="font-bold text-black text-base">Promo Banner</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Promo Banner Background Image</label>
                <div className="space-y-3">
                  <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border">
                    {promoPreview ? <img src={promoPreview} alt="Promo BG" className="w-full h-full object-cover" /> : <div className="text-gray-400">No Image Uploaded</div>}
                  </div>
                  {isEditing && (
                    <div>
                      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setPromoFile, setPromoPreview)} className="hidden" id="promo-upload" />
                      <label htmlFor="promo-upload" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer text-sm inline-flex items-center space-x-2 border">
                        <Upload className="h-4 w-4" />
                        <span>Upload Promo Image</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Promo Title</label>
                {isEditing ? (
                  <input type="text" name="landing_promo_title" value={formData.landing_promo_title} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="font-bold text-black">{siteSettings?.landing_promo_title}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Promo Subtitle</label>
                {isEditing ? (
                  <textarea name="landing_promo_subtitle" value={formData.landing_promo_subtitle} onChange={handleInputChange} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-gray-600 text-sm">{siteSettings?.landing_promo_subtitle}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Services Settings */}
        {activeTab === 'services' && (
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Services Page Title</label>
              {isEditing ? (
                <input type="text" name="services_title" value={formData.services_title} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
              ) : (
                <p className="text-lg font-bold text-black">{siteSettings?.services_title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Services Page Description</label>
              {isEditing ? (
                <textarea name="services_description" value={formData.services_description} onChange={handleInputChange} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
              ) : (
                <p className="text-gray-600">{siteSettings?.services_description}</p>
              )}
            </div>

            {/* Service Item 1 */}
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <h3 className="font-bold text-black text-sm">Service 1: Table Reservations</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service 1 Image</label>
                <div className="space-y-3">
                  <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border">
                    {service1Preview ? <img src={service1Preview} alt="Service 1" className="w-full h-full object-cover" /> : <div className="text-gray-400">No Image</div>}
                  </div>
                  {isEditing && (
                    <div>
                      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setService1File, setService1Preview)} className="hidden" id="service1-upload" />
                      <label htmlFor="service1-upload" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer text-sm inline-flex items-center space-x-2 border">
                        <Upload className="h-4 w-4" />
                        <span>Upload Service 1 Image</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service 1 Title</label>
                {isEditing ? (
                  <input type="text" name="service_1_title" value={formData.service_1_title} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="font-semibold text-black">{siteSettings?.service_1_title}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service 1 Description</label>
                {isEditing ? (
                  <textarea name="service_1_body" value={formData.service_1_body} onChange={handleInputChange} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-gray-600 text-sm">{siteSettings?.service_1_body}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service 1 Catalogue Images</label>
                <div className="flex flex-wrap gap-3 items-center">
                  {s1Gallery.map((item) => (
                    <div key={item.id} className="relative w-20 h-20 rounded-xl overflow-hidden border bg-gray-50 flex-shrink-0 group">
                      <img src={item.url} alt="Gallery thumbnail" className="w-full h-full object-cover" />
                      {isEditing && (
                        <button
                          type="button"
                          onClick={() => handleRemoveGalleryImage(1, item.id)}
                          className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-0.5 hover:bg-red-700 transition-all opacity-90 group-hover:opacity-100 shadow-sm"
                          title="Remove Image"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  ))}
                  {isEditing && (
                    <div>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => handleAddGalleryImages(e, 1)}
                        className="hidden"
                        id="service-1-gallery-upload"
                      />
                      <label
                        htmlFor="service-1-gallery-upload"
                        className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-300 hover:border-red-600 flex flex-col items-center justify-center cursor-pointer transition-colors bg-gray-50/50 hover:bg-red-50/5 hover:text-red-600 text-gray-400"
                        title="Add Images from Device"
                      >
                        <Upload className="h-5 w-5 mb-1" />
                        <span className="text-[10px] font-medium">Add Files</span>
                      </label>
                    </div>
                  )}
                  {s1Gallery.length === 0 && !isEditing && (
                    <p className="text-gray-400 text-xs">No catalogue images added.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <h3 className="font-bold text-black text-sm">Service 2: Catering & Events</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service 2 Image</label>
                <div className="space-y-3">
                  <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border">
                    {service2Preview ? <img src={service2Preview} alt="Service 2" className="w-full h-full object-cover" /> : <div className="text-gray-400">No Image</div>}
                  </div>
                  {isEditing && (
                    <div>
                      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setService2File, setService2Preview)} className="hidden" id="service2-upload" />
                      <label htmlFor="service2-upload" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer text-sm inline-flex items-center space-x-2 border">
                        <Upload className="h-4 w-4" />
                        <span>Upload Service 2 Image</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service 2 Title</label>
                {isEditing ? (
                  <input type="text" name="service_2_title" value={formData.service_2_title} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="font-semibold text-black">{siteSettings?.service_2_title}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service 2 Description</label>
                {isEditing ? (
                  <textarea name="service_2_body" value={formData.service_2_body} onChange={handleInputChange} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-gray-600 text-sm">{siteSettings?.service_2_body}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service 2 Catalogue Images</label>
                <div className="flex flex-wrap gap-3 items-center">
                  {s2Gallery.map((item) => (
                    <div key={item.id} className="relative w-20 h-20 rounded-xl overflow-hidden border bg-gray-50 flex-shrink-0 group">
                      <img src={item.url} alt="Gallery thumbnail" className="w-full h-full object-cover" />
                      {isEditing && (
                        <button
                          type="button"
                          onClick={() => handleRemoveGalleryImage(2, item.id)}
                          className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-0.5 hover:bg-red-700 transition-all opacity-90 group-hover:opacity-100 shadow-sm"
                          title="Remove Image"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  ))}
                  {isEditing && (
                    <div>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => handleAddGalleryImages(e, 2)}
                        className="hidden"
                        id="service-2-gallery-upload"
                      />
                      <label
                        htmlFor="service-2-gallery-upload"
                        className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-300 hover:border-red-600 flex flex-col items-center justify-center cursor-pointer transition-colors bg-gray-50/50 hover:bg-red-50/5 hover:text-red-600 text-gray-400"
                        title="Add Images from Device"
                      >
                        <Upload className="h-5 w-5 mb-1" />
                        <span className="text-[10px] font-medium">Add Files</span>
                      </label>
                    </div>
                  )}
                  {s2Gallery.length === 0 && !isEditing && (
                    <p className="text-gray-400 text-xs">No catalogue images added.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Service Item 3 */}
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <h3 className="font-bold text-black text-sm">Service 3: Venue Booking</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service 3 Image</label>
                <div className="space-y-3">
                  <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border">
                    {service3Preview ? <img src={service3Preview} alt="Service 3" className="w-full h-full object-cover" /> : <div className="text-gray-400">No Image</div>}
                  </div>
                  {isEditing && (
                    <div>
                      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setService3File, setService3Preview)} className="hidden" id="service3-upload" />
                      <label htmlFor="service3-upload" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer text-sm inline-flex items-center space-x-2 border">
                        <Upload className="h-4 w-4" />
                        <span>Upload Service 3 Image</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service 3 Title</label>
                {isEditing ? (
                  <input type="text" name="service_3_title" value={formData.service_3_title} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="font-semibold text-black">{siteSettings?.service_3_title}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service 3 Description</label>
                {isEditing ? (
                  <textarea name="service_3_body" value={formData.service_3_body} onChange={handleInputChange} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-gray-600 text-sm">{siteSettings?.service_3_body}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service 3 Catalogue Images</label>
                <div className="flex flex-wrap gap-3 items-center">
                  {s3Gallery.map((item) => (
                    <div key={item.id} className="relative w-20 h-20 rounded-xl overflow-hidden border bg-gray-50 flex-shrink-0 group">
                      <img src={item.url} alt="Gallery thumbnail" className="w-full h-full object-cover" />
                      {isEditing && (
                        <button
                          type="button"
                          onClick={() => handleRemoveGalleryImage(3, item.id)}
                          className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-0.5 hover:bg-red-700 transition-all opacity-90 group-hover:opacity-100 shadow-sm"
                          title="Remove Image"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  ))}
                  {isEditing && (
                    <div>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => handleAddGalleryImages(e, 3)}
                        className="hidden"
                        id="service-3-gallery-upload"
                      />
                      <label
                        htmlFor="service-3-gallery-upload"
                        className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-300 hover:border-red-600 flex flex-col items-center justify-center cursor-pointer transition-colors bg-gray-50/50 hover:bg-red-50/5 hover:text-red-600 text-gray-400"
                        title="Add Images from Device"
                      >
                        <Upload className="h-5 w-5 mb-1" />
                        <span className="text-[10px] font-medium">Add Files</span>
                      </label>
                    </div>
                  )}
                  {s3Gallery.length === 0 && !isEditing && (
                    <p className="text-gray-400 text-xs">No catalogue images added.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Services CTA Buttons Settings */}
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <h3 className="font-bold text-black text-sm">Services CTA Buttons</h3>
              
              {/* Terms & Conditions Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Terms & Conditions Image</label>
                <div className="space-y-3">
                  <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border">
                    {termsPreview ? (
                      <img src={termsPreview} alt="Terms and Conditions Preview" className="w-full h-full object-contain" />
                    ) : (
                      <div className="text-gray-400">No Image Uploaded</div>
                    )}
                  </div>
                  {isEditing && (
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, setTermsFile, setTermsPreview)}
                        className="hidden"
                        id="terms-upload"
                      />
                      <label
                        htmlFor="terms-upload"
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer text-sm inline-flex items-center space-x-2 border"
                      >
                        <Upload className="h-4 w-4" />
                        <span>Upload Terms & Conditions Image</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Inquire Link */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Inquire Now Form Link</label>
                {isEditing ? (
                  <input
                    type="url"
                    name="services_inquire_link"
                    value={formData.services_inquire_link}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none text-sm"
                    placeholder="https://form.jotform.com/..."
                  />
                ) : (
                  <p className="text-gray-600 text-sm break-all font-mono bg-gray-50 p-2.5 rounded-lg border">
                    {siteSettings?.services_inquire_link || "https://form.jotform.com/253152398113050"}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: About Us Settings */}
        {activeTab === 'about' && (
          <div className="space-y-8">
            {/* Story block 1 */}
            <div className="border-b border-gray-100 pb-6 space-y-4">
              <h3 className="text-base font-bold text-black">Section 1: Our Origins</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section 1 Image</label>
                <div className="space-y-3">
                  <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border">
                    {about1Preview ? <img src={about1Preview} alt="About 1" className="w-full h-full object-cover" /> : <div className="text-gray-400">No Image Uploaded</div>}
                  </div>
                  {isEditing && (
                    <div>
                      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setAbout1File, setAbout1Preview)} className="hidden" id="about1-upload" />
                      <label htmlFor="about1-upload" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer text-sm inline-flex items-center space-x-2 border">
                        <Upload className="h-4 w-4" />
                        <span>Upload Section 1 Image</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section 1 Title</label>
                {isEditing ? (
                  <input type="text" name="about_story_title_1" value={formData.about_story_title_1} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="font-semibold text-black">{siteSettings?.about_story_title_1}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section 1 Paragraph</label>
                {isEditing ? (
                  <textarea name="about_story_body_1" value={formData.about_story_body_1} onChange={handleInputChange} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-gray-600 text-sm whitespace-pre-wrap">{siteSettings?.about_story_body_1}</p>
                )}
              </div>
            </div>

            {/* Story block 2 */}
            <div className="border-b border-gray-100 pb-6 space-y-4">
              <h3 className="text-base font-bold text-black">Section 2: Our Concept</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section 2 Image</label>
                <div className="space-y-3">
                  <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border">
                    {about2Preview ? <img src={about2Preview} alt="About 2" className="w-full h-full object-cover" /> : <div className="text-gray-400">No Image Uploaded</div>}
                  </div>
                  {isEditing && (
                    <div>
                      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setAbout2File, setAbout2Preview)} className="hidden" id="about2-upload" />
                      <label htmlFor="about2-upload" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer text-sm inline-flex items-center space-x-2 border">
                        <Upload className="h-4 w-4" />
                        <span>Upload Section 2 Image</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section 2 Title</label>
                {isEditing ? (
                  <input type="text" name="about_story_title_2" value={formData.about_story_title_2} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="font-semibold text-black">{siteSettings?.about_story_title_2}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section 2 Paragraph</label>
                {isEditing ? (
                  <textarea name="about_story_body_2" value={formData.about_story_body_2} onChange={handleInputChange} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-gray-600 text-sm whitespace-pre-wrap">{siteSettings?.about_story_body_2}</p>
                )}
              </div>
            </div>

            {/* Story block 3 */}
            <div className="border-b border-gray-100 pb-6 space-y-4">
              <h3 className="text-base font-bold text-black">Section 3: Crafted with Passion</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section 3 Image</label>
                <div className="space-y-3">
                  <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border">
                    {about3Preview ? <img src={about3Preview} alt="About 3" className="w-full h-full object-cover" /> : <div className="text-gray-400">No Image Uploaded</div>}
                  </div>
                  {isEditing && (
                    <div>
                      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setAbout3File, setAbout3Preview)} className="hidden" id="about3-upload" />
                      <label htmlFor="about3-upload" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer text-sm inline-flex items-center space-x-2 border">
                        <Upload className="h-4 w-4" />
                        <span>Upload Section 3 Image</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section 3 Title</label>
                {isEditing ? (
                  <input type="text" name="about_story_title_3" value={formData.about_story_title_3} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="font-semibold text-black">{siteSettings?.about_story_title_3}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section 3 Paragraph</label>
                {isEditing ? (
                  <textarea name="about_story_body_3" value={formData.about_story_body_3} onChange={handleInputChange} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-gray-600 text-sm whitespace-pre-wrap">{siteSettings?.about_story_body_3}</p>
                )}
              </div>
            </div>

            {/* Story block 4 */}
            <div className="border-b border-gray-100 pb-6 space-y-4">
              <h3 className="text-base font-bold text-black">Section 4: Sustainably Minded</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section 4 Image</label>
                <div className="space-y-3">
                  <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border">
                    {about4Preview ? <img src={about4Preview} alt="About 4" className="w-full h-full object-cover" /> : <div className="text-gray-400">No Image Uploaded</div>}
                  </div>
                  {isEditing && (
                    <div>
                      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setAbout4File, setAbout4Preview)} className="hidden" id="about4-upload" />
                      <label htmlFor="about4-upload" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer text-sm inline-flex items-center space-x-2 border">
                        <Upload className="h-4 w-4" />
                        <span>Upload Section 4 Image</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section 4 Title</label>
                {isEditing ? (
                  <input type="text" name="about_story_title_4" value={formData.about_story_title_4} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="font-semibold text-black">{siteSettings?.about_story_title_4}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section 4 Paragraph</label>
                {isEditing ? (
                  <textarea name="about_story_body_4" value={formData.about_story_body_4} onChange={handleInputChange} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-gray-600 text-sm whitespace-pre-wrap">{siteSettings?.about_story_body_4}</p>
                )}
              </div>
            </div>

            {/* Our Standards Section */}
            <div className="space-y-4">
              
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Standards Section Title</label>
                {isEditing ? (
                  <input type="text" name="about_standards_title" value={formData.about_standards_title} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="font-bold text-black">{siteSettings?.about_standards_title}</p>
                )}
              </div>

              {/* Standard 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-100 p-4 rounded-xl">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Standard 1 Title</label>
                  {isEditing ? (
                    <input type="text" name="about_standards_1_title" value={formData.about_standards_1_title} onChange={handleInputChange} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="font-medium text-black">{siteSettings?.about_standards_1_title}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Standard 1 Description</label>
                  {isEditing ? (
                    <textarea name="about_standards_1_body" value={formData.about_standards_1_body} onChange={handleInputChange} rows={2} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="text-gray-500 text-sm">{siteSettings?.about_standards_1_body}</p>
                  )}
                </div>
              </div>

              {/* Standard 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-100 p-4 rounded-xl">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Standard 2 Title</label>
                  {isEditing ? (
                    <input type="text" name="about_standards_2_title" value={formData.about_standards_2_title} onChange={handleInputChange} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="font-medium text-black">{siteSettings?.about_standards_2_title}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Standard 2 Description</label>
                  {isEditing ? (
                    <textarea name="about_standards_2_body" value={formData.about_standards_2_body} onChange={handleInputChange} rows={2} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="text-gray-500 text-sm">{siteSettings?.about_standards_2_body}</p>
                  )}
                </div>
              </div>

              {/* Standard 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-100 p-4 rounded-xl">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Standard 3 Title</label>
                  {isEditing ? (
                    <input type="text" name="about_standards_3_title" value={formData.about_standards_3_title} onChange={handleInputChange} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="font-medium text-black">{siteSettings?.about_standards_3_title}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Standard 3 Description</label>
                  {isEditing ? (
                    <textarea name="about_standards_3_body" value={formData.about_standards_3_body} onChange={handleInputChange} rows={2} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none" />
                  ) : (
                    <p className="text-gray-500 text-sm">{siteSettings?.about_standards_3_body}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Contact Us Settings */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              {isEditing ? (
                <textarea name="contact_address" value={formData.contact_address} onChange={handleInputChange} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
              ) : (
                <p className="text-black">{siteSettings?.contact_address}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                {isEditing ? (
                  <input type="text" name="contact_phone" value={formData.contact_phone} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-black font-semibold">{siteSettings?.contact_phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                {isEditing ? (
                  <input type="email" name="contact_email" value={formData.contact_email} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-black font-semibold">{siteSettings?.contact_email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weekday Hours</label>
                {isEditing ? (
                  <input type="text" name="contact_hours_weekdays" value={formData.contact_hours_weekdays} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-gray-600 text-sm">{siteSettings?.contact_hours_weekdays}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weekend Hours</label>
                {isEditing ? (
                  <input type="text" name="contact_hours_weekends" value={formData.contact_hours_weekends} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                ) : (
                  <p className="text-gray-600 text-sm">{siteSettings?.contact_hours_weekends}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Social & Delivery Settings */}
        {activeTab === 'social' && (
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-base font-bold text-black mb-1">Social Media Handles</h3>
              <p className="text-xs text-gray-500">Configure your public social page handles (e.g., @homerosph or direct links).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
                {isEditing ? (
                  <input type="text" name="social_fb" value={formData.social_fb} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none text-sm" placeholder="@homerosph" />
                ) : (
                  <p className="text-black text-sm font-semibold">{siteSettings?.social_fb || 'Not Set'}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
                {isEditing ? (
                  <input type="text" name="social_ig" value={formData.social_ig} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none text-sm" placeholder="@homerosph" />
                ) : (
                  <p className="text-black text-sm font-semibold">{siteSettings?.social_ig || 'Not Set'}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">TikTok</label>
                {isEditing ? (
                  <input type="text" name="social_tiktok" value={formData.social_tiktok} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none text-sm" placeholder="@homerosph" />
                ) : (
                  <p className="text-black text-sm font-semibold">{siteSettings?.social_tiktok || 'Not Set'}</p>
                )}
              </div>
            </div>

            <div className="border-b border-gray-100 pb-4 pt-4">
              <h3 className="text-base font-bold text-black mb-1">Delivery & Review Platforms</h3>
              <p className="text-xs text-gray-500">Configure public URLs for customer reviews and online orders.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Google Reviews Link</label>
                {isEditing ? (
                  <input type="text" name="link_google_reviews" value={formData.link_google_reviews} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none text-sm" />
                ) : (
                  <p className="text-black text-sm truncate font-medium">{siteSettings?.link_google_reviews || 'Not Set'}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Grab Food Store Link</label>
                {isEditing ? (
                  <input type="text" name="link_grabfood" value={formData.link_grabfood} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none text-sm" />
                ) : (
                  <p className="text-black text-sm truncate font-medium">{siteSettings?.link_grabfood || 'Not Set'}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Food Panda Store Link</label>
                {isEditing ? (
                  <input type="text" name="link_foodpanda" value={formData.link_foodpanda} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none text-sm" />
                ) : (
                  <p className="text-black text-sm truncate font-medium">{siteSettings?.link_foodpanda || 'Not Set'}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SiteSettingsManager;
