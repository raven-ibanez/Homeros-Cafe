-- Insert default settings for Section 3 and Section 4 on the About Us page
INSERT INTO site_settings (id, value, type, description) VALUES
  ('about_story_title_3', 'Crafted with Passion', 'text', 'About page section 3 story title'),
  ('about_story_body_3', 'Every cup we serve is a product of dedication and precision. From calibration in the morning to the final pour, our baristas treat coffee-making as a fine art, ensuring each sip is as memorable as the last.', 'text', 'About page section 3 story body text'),
  ('about_story_image_3', 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800', 'image', 'About page section 3 story image URL'),
  
  ('about_story_title_4', 'Sustainably Minded', 'text', 'About page section 4 story title'),
  ('about_story_body_4', 'We believe in leaving a positive footprint. Our cafe utilizes eco-friendly packaging, actively composts coffee waste, and seeks out organic, direct-trade ingredients to protect the planet we all share.', 'text', 'About page section 4 story body text'),
  ('about_story_image_4', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800', 'image', 'About page section 4 story image URL')
ON CONFLICT (id) DO NOTHING;
