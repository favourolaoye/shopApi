// controllers/productController.js
const supabase = require('../db/supabaseClient');

exports.getAllProducts = async (req, res) => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
  if (error) return res.status(404).json({ error: 'Product not found' });
  res.json(data);
};

exports.createProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const { data, error } = await supabase.from('products').insert([{ name, description, price, category }]).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('products').delete().eq('id', id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: 'Product deleted' });
};
