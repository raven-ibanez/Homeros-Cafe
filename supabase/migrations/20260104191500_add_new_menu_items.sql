/*
  # Add New Menu Items and Categories
  
  1. New Categories
    - Cold Brew (cold-brew)
    - Refreshers (refreshers)
    - Frappuccinos (frappuccinos)
    - Crème Frappé (creme-frappe)
    - Snacks (snacks)
  
  2. New Menu Items
    - Adds items for the new categories + Non-Coffee
*/

-- First, insert the new categories
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('cold-brew', 'Cold Brew', '☕', 10, true),
  ('refreshers', 'Refreshers', '🍹', 11, true),
  ('frappuccinos', 'Frappuccinos', '🥤', 12, true),
  ('creme-frappe', 'Crème Frappé', '🍦', 13, true),
  ('snacks', 'Snacks', '🍟', 14, true)
ON CONFLICT (id) DO NOTHING;

-- Then insert the menu items using the correct category IDs
INSERT INTO menu_items (name, description, base_price, category, popular, image_url) VALUES
  -- COLD BREW (category: cold-brew)
  ('Americano', 'Classic Cold Brew Americano', 100, 'cold-brew', false, NULL),
  ('Spanish Latte', 'Sweet and creamy Spanish Latte', 120, 'cold-brew', false, NULL),
  ('French Vanilla Latte', 'Aromatic French Vanilla Latte', 150, 'cold-brew', false, NULL),
  ('Triple Mocha Milano', 'Rich Triple Mocha Milano', 150, 'cold-brew', false, NULL),
  ('Dutch Mocha', 'Smooth Dutch Mocha', 150, 'cold-brew', false, NULL),
  ('Caramel Macchiato', 'Sweet Caramel Macchiato', 150, 'cold-brew', false, NULL),
  ('Hazelnut Macchiato', 'Nutty Hazelnut Macchiato', 150, 'cold-brew', false, NULL),
  ('Sea Salt Caramel', 'Savory and sweet Sea Salt Caramel', 150, 'cold-brew', false, NULL),
  ('Sagada Presa', 'Classic Sagada Presa', 150, 'cold-brew', false, NULL),
  ('Dirty Matcha Latte', 'Matcha Latte with a shot of espresso', 160, 'cold-brew', false, NULL),

  -- NON-COFFEE (category: non-coffee) - this category already exists
  ('Matcha Latte', 'Creamy Matcha Latte', 130, 'non-coffee', false, NULL),
  ('Strawberry Matcha', 'Matcha with strawberry flavor', 150, 'non-coffee', false, NULL),
  ('Strawberry Milk', 'Fresh Strawberry Milk', 150, 'non-coffee', false, NULL),
  ('Dutch Chocolate', 'Rich Dutch Chocolate', 130, 'non-coffee', false, NULL),
  ('White Chocolate', 'Creamy White Chocolate', 150, 'non-coffee', false, NULL),
  ('Biscoff Latte', 'Latte with Biscoff cookie flavor', 170, 'non-coffee', false, NULL),
  ('Dragon Magenta', 'Vibrant Dragon Magenta drink', 140, 'non-coffee', false, NULL),

  -- REFRESHERS (category: refreshers)
  ('Strawberry Acai', 'Refreshing Strawberry Acai', 100, 'refreshers', false, NULL),
  ('Lemonada', 'Classic Lemonade', 100, 'refreshers', false, NULL),
  ('Blueberry Lemonada', 'Lemonade with blueberry twist', 100, 'refreshers', false, NULL),
  ('Lychee Pop', 'Sparkling Lychee Pop', 100, 'refreshers', false, NULL),

  -- FRAPPUCCINOS (category: frappuccinos)
  ('Dutch Mocha', 'Blended Dutch Mocha', 150, 'frappuccinos', false, NULL),
  ('Caramel Macchiato', 'Blended Caramel Macchiato', 150, 'frappuccinos', false, NULL),
  ('Triple Mocha Milano', 'Blended Triple Mocha Milano', 150, 'frappuccinos', false, NULL),
  ('Java Chip', 'Frappuccino with Java Chips', 150, 'frappuccinos', false, NULL),
  ('White Choco Chip', 'Frappuccino with White Choco Chips', 160, 'frappuccinos', false, NULL),

  -- CRÈME FRAPPÉ (category: creme-frappe)
  ('Strawberry Creme', 'Creamy Strawberry Frappé', 150, 'creme-frappe', false, NULL),
  ('Cookie Creme', 'Cookies and Cream Frappé', 150, 'creme-frappe', false, NULL),
  ('Matcha Creme', 'Creamy Matcha Frappé', 150, 'creme-frappe', false, NULL),
  ('Blueberry Cheesecake', 'Blueberry Cheesecake style Frappé', 150, 'creme-frappe', false, NULL),
  ('Dragonfruity Creme', 'Dragonfruit flavored Cream Frappé', 160, 'creme-frappe', false, NULL),

  -- SNACKS (category: snacks)
  ('Supremo Fries', 'Crispy Supremo Fries', 100, 'snacks', false, NULL),
  ('Chicky Fries', 'Chicken Fries', 120, 'snacks', false, NULL),
  ('Belgian Waffle', 'Classic Belgian Waffle', 120, 'snacks', false, NULL),
  ('Cheesy Buldak', 'Spicy Cheesy Buldak', 185, 'snacks', false, NULL);
