const express = require('express');
const router = express.Router();
const { prisma } = require('../client');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
	const { firstName, lastName, password, email } = req.body;
	prisma.user
		.create({
			data: {
				firstName,
				lastName,
				email,
				password,
			},
		})
		.then((user) => {
			res.status(201).json(user);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post('/login', (req, res) => {
	const { email, password } = req.body;
	prisma.user
		.findUnique({
			where: {
				email,
			},
		})
		.then((user) => {
			if (user?.password === password) {
				let token = jwt.sign({ username: user.username }, process.env.SECRET_KEY, { expiresIn: '24h' });
				res.status(200).json({ token });
			} else {
				res.status(401).json('Credenciales Inválidas');
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
