const express = require('express');
const connectDB = require('./DbConnection/localDb');
// const authRoutes = require('./routes/auth');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/index');
const cors = require('cors');


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
