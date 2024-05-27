const express = require('express');
const router = express.Router();

const products = [
	{ id: 1, name: 'Product A' },
	{ id: 2, name: 'Product B' },
];

router.get('/', (req, res) => {
	res.json(products);
});

router.get('/:id', (req, res) => {
	const product = products.find((p) => p.id === parseInt(req.params.id));
	if (!product) {
		return res.status(404).send('Product not found');
	}
	res.json(product);
});

// Introduce a bug: Updating a product with a non-existing ID should return an error
router.put('/:id', (req, res) => {
	const product = products.find((p) => p.id === parseInt(req.params.id));
	if (!product) {
		return res.status(404).send('Product not found');
	}
	product.name = req.body.name; // Bug: No validation on input
	res.json(product);
});

module.exports = router;
