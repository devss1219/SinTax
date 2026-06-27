const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Mongoose add kiya
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB Connection Code
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully!'))
  .catch((err) => console.log('❌ Database connection error:', err));

app.get('/', (req, res) => {
    res.send('SinTax Backend is Running perfectly, Ridhima! 🚀');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});