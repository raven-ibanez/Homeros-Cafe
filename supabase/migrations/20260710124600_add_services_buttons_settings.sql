-- Add terms and condition image and inquire now link settings
INSERT INTO site_settings (id, value, type, description)
VALUES 
  (
    'services_terms_image', 
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800', 
    'image', 
    'Terms & Conditions Sheet Image'
  ),
  (
    'services_inquire_link', 
    'https://form.jotform.com/253152398113050', 
    'text', 
    'Inquire Now Form Link'
  )
ON CONFLICT (id) DO NOTHING;
