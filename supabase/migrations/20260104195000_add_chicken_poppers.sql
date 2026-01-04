/*
  # Add Chicken Poppers Menu Item
  
  1. New Menu Item
    - Name: Chicken Poppers
    - Base Price: 100 (Solo price)
    - Category: snacks
    
  2. Variations
    - Solo w/ Rice (+0)
    - Kasalo (Good for 2) (+50)
    
  3. Add-ons (Flavors)
    - Category: Flavor
    - Price: 0 (Free choice)
    - List: Soy Garlic, Flaming Buffalo, Garlic Parmesan, Salted Egg, Snow Cheese, Honey Garlic, Spicy Korean BBQ, Hickory BBQ, Honey Sriracha, Honey BBQ
*/

WITH new_item AS (
  INSERT INTO menu_items (name, description, base_price, category, popular)
  VALUES (
    'Chicken Poppers', 
    'Crispy chicken bites in your favorite flavor. Available in Solo (w/ Rice) or Kasalo sharing size.', 
    100, 
    'snacks', 
    true
  )
  RETURNING id
),
vars AS (
  INSERT INTO variations (menu_item_id, name, price)
  SELECT id, 'Solo w/ Rice', 0 FROM new_item
  UNION ALL
  SELECT id, 'Kasalo (Good for 2)', 50 FROM new_item
),
flavors AS (
  INSERT INTO add_ons (menu_item_id, name, price, category)
  SELECT id, name, 0, 'Flavor'
  FROM new_item, 
  unnest(ARRAY[
    'Soy Garlic', 
    'Flaming Buffalo', 
    'Garlic Parmesan', 
    'Salted Egg', 
    'Snow Cheese', 
    'Honey Garlic', 
    'Spicy Korean BBQ', 
    'Hickory BBQ', 
    'Honey Sriracha', 
    'Honey BBQ'
  ]) as name
)
SELECT id FROM new_item;
