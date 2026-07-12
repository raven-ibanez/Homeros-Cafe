export interface Variation {
  id: string;
  name: string;
  price: number;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  category: string;
  quantity?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: string;
  image?: string;
  popular?: boolean;
  available?: boolean;
  variations?: Variation[];
  addOns?: AddOn[];
  // Discount pricing fields
  discountPrice?: number;
  discountStartDate?: string;
  discountEndDate?: string;
  discountActive?: boolean;
  // Computed effective price (calculated in the app)
  effectivePrice?: number;
  isOnDiscount?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
  selectedVariation?: Variation;
  selectedAddOns?: AddOn[];
  totalPrice: number;
}

export interface OrderData {
  items: CartItem[];
  customerName: string;
  contactNumber: string;
  serviceType: 'dine-in' | 'pickup' | 'delivery';
  address?: string;
  pickupTime?: string;
  // Dine-in specific fields
  partySize?: number;
  dineInTime?: string;
  paymentMethod: 'gcash' | 'maya' | 'bank-transfer';
  referenceNumber?: string;
  total: number;
  notes?: string;
}

export type PaymentMethod = 'gcash' | 'maya' | 'bank-transfer';
export type ServiceType = 'dine-in' | 'pickup' | 'delivery';

// Site Settings Types
export interface SiteSetting {
  id: string;
  value: string;
  type: 'text' | 'image' | 'boolean' | 'number';
  description?: string;
  updated_at: string;
}

export interface SiteSettings {
  site_name: string;
  site_logo: string;
  site_description: string;
  currency: string;
  currency_code: string;
  // Landing Page Settings
  landing_hero_title?: string;
  landing_hero_subtitle?: string;
  landing_hero_image?: string;
  // About Page Settings
  about_story_title_1?: string;
  about_story_body_1?: string;
  about_story_image_1?: string;
  about_story_title_2?: string;
  about_story_body_2?: string;
  about_story_image_2?: string;
  // Contact Page Settings
  contact_address?: string;
  contact_phone?: string;
  contact_email?: string;
  contact_hours_weekdays?: string;
  contact_hours_weekends?: string;
  // Services Page Settings
  services_title?: string;
  services_description?: string;
  service_1_title?: string;
  service_1_body?: string;
  service_1_image?: string;
  service_2_title?: string;
  service_2_body?: string;
  service_2_image?: string;
  service_3_title?: string;
  service_3_body?: string;
  service_3_image?: string;
  // Landing Page Crafted Section Settings
  landing_crafted_title?: string;
  landing_crafted_1_title?: string;
  landing_crafted_1_body?: string;
  landing_crafted_2_title?: string;
  landing_crafted_2_body?: string;
  landing_crafted_3_title?: string;
  landing_crafted_3_body?: string;
  // Landing Page Featured Specialties Settings
  landing_featured_title?: string;
  landing_featured_subtitle?: string;
  landing_featured_ids?: string;
  // Landing Page Promo Section Settings
  landing_promo_title?: string;
  landing_promo_subtitle?: string;
  // About Page Standards Settings
  about_standards_title?: string;
  about_standards_1_title?: string;
  about_standards_1_body?: string;
  about_standards_2_title?: string;
  about_standards_2_body?: string;
  about_standards_3_title?: string;
  about_standards_3_body?: string;
  // About Page Sections 3 and 4
  about_story_title_3?: string;
  about_story_body_3?: string;
  about_story_image_3?: string;
  about_story_title_4?: string;
  about_story_body_4?: string;
  about_story_image_4?: string;
  // Service Gallery Settings (comma-separated list of image URLs)
  service_1_gallery?: string;
  service_2_gallery?: string;
  service_3_gallery?: string;
  // Services page CTA settings
  services_terms_image?: string;
  services_inquire_link?: string;
  // Social & Delivery Settings
  social_fb?: string;
  social_ig?: string;
  social_tiktok?: string;
  link_google_reviews?: string;
  link_grabfood?: string;
  link_foodpanda?: string;
  // Color Settings
  color_cafe_cream?: string;
  color_cafe_brown?: string;
  color_cafe_accent?: string;
  color_cafe_gold?: string;
  color_cafe_beige?: string;
  color_cafe_clay?: string;
  color_cafe_btn_text?: string;
  font_heading?: string;
  font_body?: string;
  font_menu?: string;
  landing_hero_badge?: string;
  landing_hero_quote?: string;
  landing_hero_quote_author?: string;
  landing_promo_image?: string;
}