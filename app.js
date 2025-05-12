const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const cors = require("cors");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

// Routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

