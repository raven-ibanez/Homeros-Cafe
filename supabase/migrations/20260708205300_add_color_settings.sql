-- Insert editable color settings default records
INSERT INTO site_settings (id, value, type, description) VALUES
  ('color_cafe_cream', '#F5F1E8', 'text', 'Website background color (Warm Ivory)'),
  ('color_cafe_brown', '#3B2D26', 'text', 'Typography/dark neutral color (Espresso Brown)'),
  ('color_cafe_accent', '#4E5D3A', 'text', 'Primary call-to-action color (Deep Olive Green)'),
  ('color_cafe_gold', '#B08D57', 'text', 'Accent detail color (Burnish Brass)'),
  ('color_cafe_beige', '#E2DCCE', 'text', 'Dividers and light border color (Warm Beige)'),
  ('color_cafe_clay', '#B86E4B', 'text', 'Supporting badge highlight color (Terracotta Clay)')
ON CONFLICT (id) DO NOTHING;
