const express = require('express');
const router = express.Router();
const { prisma } = require('../client');

router.get('/', (req, res) => {
	prisma.platform
		.findMany()
		.then((platforms) => {
			res.status(200).json(platforms);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	prisma.platform
		.findUnique({
			where: {
				id: Number(id),
			},
		})
		.then((platform) => {
			res.status(200).json(platform);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
