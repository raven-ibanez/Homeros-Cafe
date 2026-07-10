-- Insert editable section contents for Landing page and About page
INSERT INTO site_settings (id, value, type, description) VALUES
  ('landing_crafted_title', 'Crafted with Intention', 'text', 'Landing page crafted section main title'),
  ('landing_crafted_1_title', 'The Perfect Roast', 'text', 'Landing page crafted box 1 title'),
  ('landing_crafted_1_body', 'We source single-origin specialty beans, roasting them carefully to unlock unique, complex flavor profiles.', 'text', 'Landing page crafted box 1 description'),
  ('landing_crafted_2_title', 'Honest Ingredients', 'text', 'Landing page crafted box 2 title'),
  ('landing_crafted_2_body', 'From our dairy to our custom syrups and fresh pastries, every ingredient is selected for quality and sustainability.', 'text', 'Landing page crafted box 2 description'),
  ('landing_crafted_3_title', 'A Space for All', 'text', 'Landing page crafted box 3 title'),
  ('landing_crafted_3_body', 'Designed as a modern sanctuary, we provide a warm, quiet environment for remote work, read, or meaningful conversations.', 'text', 'Landing page crafted box 3 description'),
  
  ('landing_featured_title', 'Featured Specialties', 'text', 'Featured section main title'),
  ('landing_featured_subtitle', 'Curated favorites from our kitchen and espresso bar.', 'text', 'Featured section description subtitle'),
  ('landing_featured_ids', '', 'text', 'Comma-separated list of featured menu item IDs'),
  
  ('landing_promo_title', 'Craving something special?', 'text', 'Promo section banner title'),
  ('landing_promo_subtitle', 'Order online for quick pickup, or dine-in to experience the cozy warmth of Homeros Cafe.', 'text', 'Promo section banner description'),
  
  ('about_standards_title', 'Our Standards', 'text', 'About page standards section title'),
  ('about_standards_1_title', '100% Ethical Sourcing', 'text', 'About page standards box 1 title'),
  ('about_standards_1_body', 'Supporting farming families with fair pricing and sustainable agricultural practices.', 'text', 'About page standards box 1 description'),
  ('about_standards_2_title', 'Precision Brewing', 'text', 'About page standards box 2 title'),
  ('about_standards_2_body', 'Measuring temperature, grind size, and extraction ratios to perfection for every cup.', 'text', 'About page standards box 2 description'),
  ('about_standards_3_title', 'Community First', 'text', 'About page standards box 3 title'),
  ('about_standards_3_body', 'Hosting local creators, supporting neighborhood projects, and fostering inclusivity.', 'text', 'About page standards box 3 description')
ON CONFLICT (id) DO NOTHING;
