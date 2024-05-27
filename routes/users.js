const express = require('express');
const router = express.Router();

const users = [
	{ id: 1, name: 'Alice' },
	{ id: 2, name: 'Bob' },
];

router.get('/', (req, res) => {
	res.json(users);
});

router.get('/:id', (req, res) => {
	const user = users.find((u) => u.id === parseInt(req.params.id));
	if (!user) {
		return res.status(404).send('User not found');
	}
	res.json(user);
});

router.post('/', (req, res) => {
	const user = {
		id: parseInt(req.body.id),
		name: req.body.name,
	};
	users.push(user);
	res.status(201).json(user);
});

module.exports = router;
