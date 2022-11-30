const express = require('express');
const router = express.Router();
const { prisma } = require('../client');

router.get('/', (req, res) => {
	prisma.game
		.findMany()
		.then((games) => {
			res.status(200).json(games);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get('/search', (req, res) => {
	let { name, orderby = id, order } = req.query;
	orderby = orderby ? orderby.toLowerCase() : 'id';
	prisma.game
		.findMany({
			where: {
				name: {
					contains: name,
					mode: 'insensitive',
				},
			},
			orderBy: {
				[orderby ?? id]: order ?? 'asc',
			},
		})
		.then((games) => {
			res.status(200).json(games);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	prisma.game
		.findUnique({
			where: {
				id: Number(id),
			},
			include: {
				platforms: true,
				publishers: true,
			},
		})
		.then((game) => {
			res.status(200).json(game);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
