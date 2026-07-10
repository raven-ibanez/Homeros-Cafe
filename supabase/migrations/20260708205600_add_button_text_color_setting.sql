-- Insert editable button text color setting default record
INSERT INTO site_settings (id, value, type, description) VALUES
  ('color_cafe_btn_text', '#FFFFFF', 'text', 'Primary buttons text color')
ON CONFLICT (id) DO NOTHING;
