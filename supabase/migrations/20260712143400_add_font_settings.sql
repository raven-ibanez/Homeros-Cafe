-- Insert default font settings
INSERT INTO site_settings (id, value, type, description) VALUES
  ('font_heading', 'Cormorant Garamond', 'text', 'Primary heading font style'),
  ('font_body', 'Manrope', 'text', 'Body copy font style'),
  ('font_menu', 'Cormorant Garamond', 'text', 'Menu items card font style'),
  ('landing_hero_badge', 'Premium Specialty Cafe', 'text', 'Preheader badge text in hero section'),
  ('landing_hero_quote', '"The perfect blend of flavor and atmosphere."', 'text', 'Quote block content in hero image card'),
  ('landing_hero_quote_author', '— Homeros Signature Experience', 'text', 'Quote block author in hero image card'),
  ('landing_promo_image', 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800', 'image', 'Background image URL for the promo section')
ON CONFLICT (id) DO NOTHING;
