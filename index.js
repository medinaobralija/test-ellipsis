const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const logger = require('./middleware/logger');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

app.use(bodyParser.json());
app.use(logger);

app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
