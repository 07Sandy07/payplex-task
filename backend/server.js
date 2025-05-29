const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const pageRoutes = require('./routes/pageRoutes');  // <-- import page routes

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/pages', pageRoutes);   // <-- mount page routes

app.listen(5000, () => console.log('Server running on port 5000'));
