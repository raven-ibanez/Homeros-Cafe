-- Add gallery settings for the three services
INSERT INTO site_settings (id, value, type, description)
VALUES 
  (
    'service_1_gallery', 
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800,https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800,https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800', 
    'text', 
    'Table Reservation Gallery (comma-separated list of image URLs)'
  ),
  (
    'service_2_gallery', 
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800,https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800,https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800', 
    'text', 
    'Catering & Events Gallery (comma-separated list of image URLs)'
  ),
  (
    'service_3_gallery', 
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800,https://images.unsplash.com/photo-1517502884422-41eaaced0168?q=80&w=800,https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800', 
    'text', 
    'Private Venue Booking Gallery (comma-separated list of image URLs)'
  )
ON CONFLICT (id) DO NOTHING;
