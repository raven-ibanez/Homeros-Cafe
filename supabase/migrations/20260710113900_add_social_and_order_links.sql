-- Insert default settings for Social Media Handles and Order/Review Links
INSERT INTO site_settings (id, value, type, description) VALUES
  ('social_fb', '@homerosph', 'text', 'Facebook handle/URL'),
  ('social_ig', '@homerosph', 'text', 'Instagram handle/URL'),
  ('social_tiktok', '@homerosph', 'text', 'TikTok handle/URL'),
  ('link_google_reviews', 'https://g.page/r/CXgqtjEDfIfrEBM/review', 'text', 'Google reviews link'),
  ('link_grabfood', 'https://r.grab.com/o/VFJraQvq', 'text', 'Grab Food shop link'),
  ('link_foodpanda', 'https://www.foodpanda.ph/restaurant/e9bd/homeros-cafe', 'text', 'Food Panda restaurant page link')
ON CONFLICT (id) DO NOTHING;
