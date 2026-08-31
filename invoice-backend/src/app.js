const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
  origin: [
    'http://localhost:4200',
    'https://nomadstudio.netlify.app/login'
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/auth', require('./routes/auth.routes'));
app.use('/api', require('./routes/protected.routes'));
app.use('/api', require('./routes/user.routes'));
app.use('/api', require('./routes/invoice.routes'));
app.use('/api/expenses', require('./routes/expense.routes'));

module.exports = app;
