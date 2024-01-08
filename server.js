const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello, Express.js Server!</h1>');
});

const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');

app.use('/user', usersRoute);
app.use('/products', productsRoute);

const port = process.env.PORT || 3000;

// You can use environment variables for port configuration
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('<h1>Hello, Express.js Server!</h1>');
// });

// const port = process.env.PORT || 3000; // You can use environment variables for port

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
