const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Example Product Schema
const Product = mongoose.model("Product", new mongoose.Schema({
    name: String,
    cost: Number,
    image: String
}));

// Get all products
app.get("/api/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Add new product
app.post("/api/products", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.send("Product Added");
});

// Payment Routes Placeholder
app.post("/api/pay", (req, res) => {
    // Integrate M-Pesa and PayPal APIs here
    res.send("Payment processed");
});

// Start server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
