require('dotenv').config();


const express = require('express');
const app = express();
app.use(express.json);
const port = 3000;
const apiKey = process.env.SPOONACULAR_API_KEY;

app.post('/api/recipes', (request, respone) => {
  console.log(request);
});

