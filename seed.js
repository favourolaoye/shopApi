// seed.js
const supabase = require('./db/supabaseClient');

const seedProducts = async () => {
  const products = [
    // Electronics
    {
      name: 'Smartphone X200',
      description: '6.5-inch OLED display, 128GB storage, 5G compatible',
      price: 699.99,
      category: 'Electronics',
    },
    {
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with 12h battery life and waterproof design',
      price: 59.99,
      category: 'Electronics',
    },

    // Fashion
    {
      name: 'Men’s Leather Jacket',
      description: 'Genuine leather, slim fit biker jacket',
      price: 120.0,
      category: 'Fashion',
    },
    {
      name: 'Women’s Running Shoes',
      description: 'Breathable mesh, lightweight design for everyday running',
      price: 75.5,
      category: 'Fashion',
    },

    // Home & Kitchen
    {
      name: 'Stainless Steel Cookware Set',
      description: '10-piece set including pots, pans, and lids',
      price: 149.99,
      category: 'Home & Kitchen',
    },
    {
      name: 'Memory Foam Pillow',
      description: 'Orthopedic support with cooling gel',
      price: 39.99,
      category: 'Home & Kitchen',
    },

    // Books
    {
      name: 'The Pragmatic Programmer',
      description: 'Classic book on software engineering practices',
      price: 42.0,
      category: 'Books',
    },
    {
      name: 'Atomic Habits',
      description: 'James Clear’s guide to building good habits and breaking bad ones',
      price: 18.50,
      category: 'Books',
    },

    // Sports
    {
      name: 'Mountain Bike',
      description: '21-speed aluminum frame bike with suspension fork',
      price: 349.99,
      category: 'Sports',
    },
    {
      name: 'Yoga Mat',
      description: 'Non-slip, eco-friendly material with carrying strap',
      price: 25.99,
      category: 'Sports',
    },

    // Toys
    {
      name: 'LEGO Star Wars Set',
      description: 'Millennium Falcon building kit for kids aged 9+',
      price: 129.99,
      category: 'Toys',
    },
    {
      name: 'RC Car',
      description: 'Off-road, 4WD, 30km/h high-speed remote control car',
      price: 55.00,
      category: 'Toys',
    },
  ];

  const { data, error } = await supabase.from('products').insert(products);

  if (error) {
    console.error('❌ Error seeding data:', error.message);
  } else {
    console.log(`✅ Seeded ${data.length} products with categories`);
  }
};

seedProducts();
