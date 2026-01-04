/*
  # Update More Menu Images
  
  Updates image_url for:
  - Spanish Latte
  - Cookie Creme
  - Biscoff Latte
  - Dutch Mocha
*/

UPDATE menu_items SET image_url = '/items/spanish_latte.png' WHERE name = 'Spanish Latte';
UPDATE menu_items SET image_url = '/items/cookie_creme.png' WHERE name = 'Cookie Creme';
UPDATE menu_items SET image_url = '/items/biscoff_latte.png' WHERE name = 'Biscoff Latte';
UPDATE menu_items SET image_url = '/items/dutch_mocha.png' WHERE name = 'Dutch Mocha';
