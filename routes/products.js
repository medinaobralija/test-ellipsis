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

router.post('/', (req, res) => {
	const product = {
		id: parseInt(req.body.id),
		name: req.body.name,
	};
	products.push(product);
	res.status(201).json(product);
});

router.put('/:id', (req, res) => {
	const product = products.find((p) => p.id === parseInt(req.params.id));
	product.name = req.body.name;
	res.json(product);
});

module.exports = router;
