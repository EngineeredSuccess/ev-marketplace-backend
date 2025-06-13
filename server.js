const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Polish EV Marketplace API is running!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/vehicles', (req, res) => {
  res.json({
    vehicles: [
      {
        id: 1,
        make: 'Tesla',
        model: 'Model 3',
        year: 2022,
        price: 189000,
        batteryCapacity: 75,
        range: 491,
        chargingType: 'Supercharger',
        location: 'Warszawa',
        description: 'Idealny samochód elektryczny w doskonałym stanie.'
      },
      {
        id: 2,
        make: 'Volkswagen',
        model: 'ID.4',
        year: 2023,
        price: 215000,
        batteryCapacity: 82,
        range: 520,
        chargingType: 'CCS',
        location: 'Kraków',
        description: 'Nowy SUV elektryczny z pełnym wyposażeniem.'
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚗 Polish EV Marketplace API running on port ${PORT}`);
});