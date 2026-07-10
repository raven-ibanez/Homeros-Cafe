-- Insert editable content settings for Landing, About, and Contact pages
INSERT INTO site_settings (id, value, type, description) VALUES
  ('landing_hero_title', 'Artisan Brews & Comforting Bites', 'text', 'Landing page main hero title'),
  ('landing_hero_subtitle', 'Exceptional coffee, freshly baked pastries, and a minimalist space designed for connection. Welcome to Homeros Cafe.', 'text', 'Landing page hero description text'),
  ('landing_hero_image', 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200', 'image', 'Landing page main hero image URL'),
  
  ('about_story_title_1', 'Where Passion Meets Craft', 'text', 'About page story 1 section title'),
  ('about_story_body_1', 'At Homeros Cafe, our journey began with a simple belief: that a cup of coffee is more than just a morning routine. It''s a moment of pause, an opportunity for connection, and a showcase of meticulous craft. We source only the finest Arabica beans from sustainable farms around the globe, working closely with farmers who share our values of respect, quality, and community.', 'text', 'About page story 1 section body description'),
  ('about_story_image_1', 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800', 'image', 'About page story 1 section image URL'),
  
  ('about_story_title_2', 'A Space to Connect', 'text', 'About page story 2 section title'),
  ('about_story_body_2', 'Our space is consciously designed with a minimalist aesthetic, clean lines, and warm tones. We wanted to create a peaceful environment that lets our products speak for themselves and allows our guests to find clarity amidst their busy schedules. Whether you are here to work on your next big idea, share a laugh with a friend, or simply enjoy a quiet espresso, we invite you to make Homeros Cafe your second home.', 'text', 'About page story 2 section body description'),
  ('about_story_image_2', 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800', 'image', 'About page story 2 section image URL'),
  
  ('contact_address', '123 Rizal Avenue, Corner Taft Street, Metro Manila, Philippines', 'text', 'Cafe physical address'),
  ('contact_phone', '+63 912 345 6789', 'text', 'Cafe contact phone number'),
  ('contact_email', 'hello@homeroscafe.com', 'text', 'Cafe contact email address'),
  ('contact_hours_weekdays', 'Mon - Fri: 7:00 AM - 9:00 PM', 'text', 'Weekday business hours'),
  ('contact_hours_weekends', 'Sat - Sun: 8:00 AM - 10:00 PM', 'text', 'Weekend business hours')
ON CONFLICT (id) DO NOTHING;
