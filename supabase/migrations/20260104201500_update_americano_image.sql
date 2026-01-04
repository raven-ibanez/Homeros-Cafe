/*
  # Update Americano Image
  
  Updates the image_url for the 'Americano' menu item to use the newly uploaded image.
*/

UPDATE menu_items 
SET image_url = '/items/americano.png'
WHERE name = 'Americano';
