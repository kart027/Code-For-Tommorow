const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes.js');
const categoryRoutes = require('./routes/categoryRoutes.js');
const serviceRoutes = require('./routes/serviceRoutes.js');

dotenv.config();
app.use(express.json());

app.use('/login', authRoutes);
app.use('/category', categoryRoutes);
app.use('/category', serviceRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
