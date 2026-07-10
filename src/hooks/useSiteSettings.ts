import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { SiteSettings, SiteSetting } from '../types';

export const useSiteSettings = () => {
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSiteSettings = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .order('id');

      if (error) throw error;

      // Transform the data into a more usable format
      const settings: SiteSettings = {
        site_name: data.find(s => s.id === 'site_name')?.value || 'Homeros Cafe',
        site_logo: data.find(s => s.id === 'site_logo')?.value || '',
        site_description: data.find(s => s.id === 'site_description')?.value || '',
        currency: data.find(s => s.id === 'currency')?.value || 'PHP',
        currency_code: data.find(s => s.id === 'currency_code')?.value || 'PHP',
        landing_hero_title: data.find(s => s.id === 'landing_hero_title')?.value || 'Artisan Brews & Comforting Bites',
        landing_hero_subtitle: data.find(s => s.id === 'landing_hero_subtitle')?.value || 'Exceptional coffee, freshly baked pastries, and a minimalist space designed for connection. Welcome to Homeros Cafe.',
        landing_hero_image: data.find(s => s.id === 'landing_hero_image')?.value || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200',
        about_story_title_1: data.find(s => s.id === 'about_story_title_1')?.value || 'Where Passion Meets Craft',
        about_story_body_1: data.find(s => s.id === 'about_story_body_1')?.value || 'At Homeros Cafe, our journey began with a simple belief: that a cup of coffee is more than just a morning routine. It\'s a moment of pause, an opportunity for connection, and a showcase of meticulous craft. We source only the finest Arabica beans from sustainable farms around the globe, working closely with farmers who share our values of respect, quality, and community.',
        about_story_image_1: data.find(s => s.id === 'about_story_image_1')?.value || 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800',
        about_story_title_2: data.find(s => s.id === 'about_story_title_2')?.value || 'A Space to Connect',
        about_story_body_2: data.find(s => s.id === 'about_story_body_2')?.value || 'Our space is consciously designed with a minimalist aesthetic, clean lines, and warm tones. We wanted to create a peaceful environment that lets our products speak for themselves and allows our guests to find clarity amidst their busy schedules. Whether you are here to work on your next big idea, share a laugh with a friend, or simply enjoy a quiet espresso, we invite you to make Homeros Cafe your second home.',
        about_story_image_2: data.find(s => s.id === 'about_story_image_2')?.value || 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800',
        about_story_title_3: data.find(s => s.id === 'about_story_title_3')?.value || 'Crafted with Passion',
        about_story_body_3: data.find(s => s.id === 'about_story_body_3')?.value || 'Every cup we serve is a product of dedication and precision. From calibration in the morning to the final pour, our baristas treat coffee-making as a fine art, ensuring each sip is as memorable as the last.',
        about_story_image_3: data.find(s => s.id === 'about_story_image_3')?.value || 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800',
        about_story_title_4: data.find(s => s.id === 'about_story_title_4')?.value || 'Sustainably Minded',
        about_story_body_4: data.find(s => s.id === 'about_story_body_4')?.value || 'We believe in leaving a positive footprint. Our cafe utilizes eco-friendly packaging, actively composts coffee waste, and seeks out organic, direct-trade ingredients to protect the planet we all share.',
        about_story_image_4: data.find(s => s.id === 'about_story_image_4')?.value || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800',
        contact_address: data.find(s => s.id === 'contact_address')?.value || '123 Rizal Avenue, Corner Taft Street, Metro Manila, Philippines',
        contact_phone: data.find(s => s.id === 'contact_phone')?.value || '+63 912 345 6789',
        contact_email: data.find(s => s.id === 'contact_email')?.value || 'hello@homeroscafe.com',
        contact_hours_weekdays: data.find(s => s.id === 'contact_hours_weekdays')?.value || 'Mon - Fri: 7:00 AM - 9:00 PM',
        contact_hours_weekends: data.find(s => s.id === 'contact_hours_weekends')?.value || 'Sat - Sun: 8:00 AM - 10:00 PM',
        social_fb: data.find(s => s.id === 'social_fb')?.value || '@homerosph',
        social_ig: data.find(s => s.id === 'social_ig')?.value || '@homerosph',
        social_tiktok: data.find(s => s.id === 'social_tiktok')?.value || '@homerosph',
        link_google_reviews: data.find(s => s.id === 'link_google_reviews')?.value || 'https://g.page/r/CXgqtjEDfIfrEBM/review',
        link_grabfood: data.find(s => s.id === 'link_grabfood')?.value || 'https://r.grab.com/o/VFJraQvq',
        link_foodpanda: data.find(s => s.id === 'link_foodpanda')?.value || 'https://www.foodpanda.ph/restaurant/e9bd/homeros-cafe',
        
        services_title: data.find(s => s.id === 'services_title')?.value || 'Our Services',
        services_description: data.find(s => s.id === 'services_description')?.value || 'Beyond artisan coffee, we offer premium culinary and booking experiences.',
        service_1_title: data.find(s => s.id === 'service_1_title')?.value || 'Table Reservation',
        service_1_body: data.find(s => s.id === 'service_1_body')?.value || 'Book a table in advance for meetings, dates, or cozy study sessions.',
        service_1_image: data.find(s => s.id === 'service_1_image')?.value || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800',
        service_2_title: data.find(s => s.id === 'service_2_title')?.value || 'Catering & Events',
        service_2_body: data.find(s => s.id === 'service_2_body')?.value || 'Bring the Homeros experience to your parties, office functions, and gatherings.',
        service_2_image: data.find(s => s.id === 'service_2_image')?.value || 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800',
        service_3_title: data.find(s => s.id === 'service_3_title')?.value || 'Private Venue Booking',
        service_3_body: data.find(s => s.id === 'service_3_body')?.value || 'Reserve our entire minimalist café space for private workshops, product launches, or shoots.',
        service_3_image: data.find(s => s.id === 'service_3_image')?.value || 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
        service_1_gallery: data.find(s => s.id === 'service_1_gallery')?.value || '',
        service_2_gallery: data.find(s => s.id === 'service_2_gallery')?.value || '',
        service_3_gallery: data.find(s => s.id === 'service_3_gallery')?.value || '',
        services_terms_image: data.find(s => s.id === 'services_terms_image')?.value || 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800',
        services_inquire_link: data.find(s => s.id === 'services_inquire_link')?.value || 'https://form.jotform.com/253152398113050',
        
        landing_crafted_title: data.find(s => s.id === 'landing_crafted_title')?.value || 'Crafted with Intention',
        landing_crafted_1_title: data.find(s => s.id === 'landing_crafted_1_title')?.value || 'The Perfect Roast',
        landing_crafted_1_body: data.find(s => s.id === 'landing_crafted_1_body')?.value || 'We source single-origin specialty beans, roasting them carefully to unlock unique, complex flavor profiles.',
        landing_crafted_2_title: data.find(s => s.id === 'landing_crafted_2_title')?.value || 'Honest Ingredients',
        landing_crafted_2_body: data.find(s => s.id === 'landing_crafted_2_body')?.value || 'From our dairy to our custom syrups and fresh pastries, every ingredient is selected for quality and sustainability.',
        landing_crafted_3_title: data.find(s => s.id === 'landing_crafted_3_title')?.value || 'A Space for All',
        landing_crafted_3_body: data.find(s => s.id === 'landing_crafted_3_body')?.value || 'Designed as a modern sanctuary, we provide a warm, quiet environment for remote work, read, or meaningful conversations.',
        
        landing_featured_title: data.find(s => s.id === 'landing_featured_title')?.value || 'Featured Specialties',
        landing_featured_subtitle: data.find(s => s.id === 'landing_featured_subtitle')?.value || 'Curated favorites from our kitchen and espresso bar.',
        landing_featured_ids: data.find(s => s.id === 'landing_featured_ids')?.value || '',
        
        landing_promo_title: data.find(s => s.id === 'landing_promo_title')?.value || 'Craving something special?',
        landing_promo_subtitle: data.find(s => s.id === 'landing_promo_subtitle')?.value || 'Order online for quick pickup, or dine-in to experience the cozy warmth of Homeros Cafe.',
        
        about_standards_title: data.find(s => s.id === 'about_standards_title')?.value || 'Our Standards',
        about_standards_1_title: data.find(s => s.id === 'about_standards_1_title')?.value || '100% Ethical Sourcing',
        about_standards_1_body: data.find(s => s.id === 'about_standards_1_body')?.value || 'Supporting farming families with fair pricing and sustainable agricultural practices.',
        about_standards_2_title: data.find(s => s.id === 'about_standards_2_title')?.value || 'Precision Brewing',
        about_standards_2_body: data.find(s => s.id === 'about_standards_2_body')?.value || 'Measuring temperature, grind size, and extraction ratios to perfection for every cup.',
        about_standards_3_title: data.find(s => s.id === 'about_standards_3_title')?.value || 'Community First',
        about_standards_3_body: data.find(s => s.id === 'about_standards_3_body')?.value || 'Hosting local creators, supporting neighborhood projects, and fostering inclusivity.',
        
        color_cafe_cream: data.find(s => s.id === 'color_cafe_cream')?.value || '#F5F1E8',
        color_cafe_brown: data.find(s => s.id === 'color_cafe_brown')?.value || '#3B2D26',
        color_cafe_accent: data.find(s => s.id === 'color_cafe_accent')?.value || '#4E5D3A',
        color_cafe_gold: data.find(s => s.id === 'color_cafe_gold')?.value || '#B08D57',
        color_cafe_beige: data.find(s => s.id === 'color_cafe_beige')?.value || '#E2DCCE',
        color_cafe_clay: data.find(s => s.id === 'color_cafe_clay')?.value || '#B86E4B',
        color_cafe_btn_text: data.find(s => s.id === 'color_cafe_btn_text')?.value || '#FFFFFF'
      };

      setSiteSettings(settings);
    } catch (err) {
      console.error('Error fetching site settings:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch site settings');
    } finally {
      setLoading(false);
    }
  };

  const updateSiteSetting = async (id: string, value: string) => {
    try {
      setError(null);

      const { error } = await supabase
        .from('site_settings')
        .update({ value })
        .eq('id', id);

      if (error) throw error;

      // Refresh the settings
      await fetchSiteSettings();
    } catch (err) {
      console.error('Error updating site setting:', err);
      setError(err instanceof Error ? err.message : 'Failed to update site setting');
      throw err;
    }
  };

  const updateSiteSettings = async (updates: Partial<SiteSettings>) => {
    try {
      setError(null);

      // Filter out undefined/null values
      const updatePromises = Object.entries(updates)
        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) =>
          supabase
            .from('site_settings')
            .upsert({ id: key, value: String(value) })
        );

      const results = await Promise.all(updatePromises);
      
      // Check for errors
      const errors = results.filter(result => result.error);
      if (errors.length > 0) {
        console.error('Failed updates:', errors.map(e => e.error));
        throw new Error(errors[0].error?.message || 'Some updates failed');
      }

      // Refresh the settings
      await fetchSiteSettings();
    } catch (err) {
      console.error('Error updating site settings:', err);
      setError(err instanceof Error ? err.message : 'Failed to update site settings');
      throw err;
    }
  };

  useEffect(() => {
    fetchSiteSettings();
  }, []);

  return {
    siteSettings,
    loading,
    error,
    updateSiteSetting,
    updateSiteSettings,
    refetch: fetchSiteSettings
  };
};
