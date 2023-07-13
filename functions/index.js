const functions = require('firebase-functions');
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Make sure we can parse the carModels.json file
const file = path.join(__dirname, 'carModels.json');
let carData;
try {
  const content = fs.readFileSync(file, 'utf-8');
  carData = JSON.parse(content);
  console.log('Parsed the carModel.json file');
} catch (error) {
  console.log('Error parsing the carModel.json file.');
}

// Get gas price from https://gasprices.aaa.com/
app.get('/gas-price', async (req, res) => {
  try {
    const response = await axios.get('https://gasprices.aaa.com/');
    const $ = cheerio.load(response.data);
    const gasPrice = $('main#maincontent p.numb').text().trim();

    res.json({ gasPrice });
  } catch (error) {
    console.error('Error fetching gas price:', error);
    res.status(500).json({ error: 'Failed to fetch gas price' });
  }
});

// Retrieve car model from submitted form
app.post('/form', (req, res) => {
  const { carModel } = req.body;

  // Find the car model in carModels.json
  const carModelEntry = carData.car_models.find(
    (entry) => entry.model.toLowerCase() === carModel.toLowerCase()
  );

  if (carModelEntry) {
    const { mpg } = carModelEntry;
    console.log('Car Model:', carModel);
    console.log('MPG:', mpg);
    res.json({ mpg });
  } else {
    console.log('Car Model not found:', carModel);
    res.status(404).json({ error: 'Car Model not found' });
  }
});

// Expose the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);
