const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const SinTaxData = require('./DataModel'); // Naya model import kiya

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully!'))
  .catch((err) => console.log('❌ Database connection error:', err));

app.get('/', (req, res) => {
    res.send('SinTax Backend is Running perfectly, Ridhima! 🚀');
});

// 👇 NAYA POST ROUTE YAHAN ADD KIYA HAI 👇
app.post('/api/save', (req, res) => {
    const incomingData = req.body.data;
    console.log("🚀 Extension se data aaya:", incomingData);
    
    // Response wapas bhej rahe hain extension ko
    res.json({ success: true, message: "Backend received your data!", data: incomingData });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});