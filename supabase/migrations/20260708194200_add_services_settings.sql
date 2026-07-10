-- Insert editable content settings for the Services page
INSERT INTO site_settings (id, value, type, description) VALUES
  ('services_title', 'Our Services', 'text', 'Services page main title'),
  ('services_description', 'Beyond artisan coffee, we offer premium culinary and booking experiences.', 'text', 'Services page introduction text'),
  
  ('service_1_title', 'Table Reservation', 'text', 'Service 1 block title'),
  ('service_1_body', 'Book a table in advance for meetings, dates, or cozy study sessions.', 'text', 'Service 1 block description'),
  ('service_1_image', 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800', 'image', 'Service 1 block image URL'),
  
  ('service_2_title', 'Catering & Events', 'text', 'Service 2 block title'),
  ('service_2_body', 'Bring the Homeros experience to your parties, office functions, and gatherings.', 'text', 'Service 2 block description'),
  ('service_2_image', 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800', 'image', 'Service 2 block image URL'),
  
  ('service_3_title', 'Private Venue Booking', 'text', 'Service 3 block title'),
  ('service_3_body', 'Reserve our entire minimalist café space for private workshops, product launches, or shoots.', 'text', 'Service 3 block description'),
  ('service_3_image', 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800', 'image', 'Service 3 block image URL')
ON CONFLICT (id) DO NOTHING;
