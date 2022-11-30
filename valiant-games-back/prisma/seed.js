const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const PUBLISHERS = [
	{
		id: 1,
		name: 'Sony Interactive Entertainment',
	},
	{
		id: 2,
		name: 'Microsoft Studios',
	},
	{
		id: 3,
		name: 'Nintendo',
	},
	{
		id: 4,
		name: 'Ubisoft',
	},
	{
		id: 5,
		name: 'Electronic Arts',
	},
	{
		id: 6,
		name: 'Bethesda Softworks',
	},
	{
		id: 7,
		name: 'Activision',
	},
	{
		id: 8,
		name: 'Square Enix',
	},
	{
		id: 9,
		name: 'Capcom',
	},
	{
		id: 10,
		name: 'Bandai Namco Entertainment',
	},
	{
		id: 11,
		name: 'Konami',
	},
];

const PLATFORMS = [
	{
		id: 1,
		name: 'PlayStation 3',
	},
	{
		id: 2,
		name: 'PlayStation 4',
	},
	{
		id: 3,
		name: 'Xbox 360',
	},
	{
		id: 4,
		name: 'Xbox One',
	},
	{
		id: 5,
		name: 'Nintendo Switch',
	},
	{
		id: 6,
		name: 'Nintendo 3DS',
	},
	{
		id: 7,
		name: 'Nintendo DS',
	},
	{
		id: 8,
		name: 'Nintendo Wii',
	},
	{
		id: 9,
		name: 'Nintendo Wii U',
	},
	{
		id: 10,
		name: 'PC',
	},
];

const DIRECTORS = [
	{
		id: 1,
		name: 'Hideo Kojima',
	},
	{
		id: 2,
		name: 'Shigeru Miyamoto',
	},
	{
		id: 3,
		name: 'Hironobu Sakaguchi',
	},
	{
		id: 4,
		name: 'Tetsuya Nomura',
	},
	{
		id: 5,
		name: 'Yoshihiro Sakaguchi',
	},
	{
		id: 6,
		name: 'Takashi Tokita',
	},
	{
		id: 7,
		name: 'Neil Druckmann',
	},
	{
		id: 8,
		name: 'Todd Howard',
	},
	{
		id: 9,
		name: 'Casey Hudson',
	},
	{
		id: 10,
		name: 'David Cage',
	},
];

const GAMES = [
	{
		id: 1,
		name: 'The Last of Us',
		description:
			'The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. The game was released for the PlayStation 3 in June 2013, and an remastered version was released for the PlayStation 4 in July 2014. The Last of Us is played from a third-person perspective; players use firearms and improvised weapons, and can use stealth to defend against hostile humans and cannibalistic creatures infected by a mutated strain of the Cordyceps fungus. The game is set in a post-apocalyptic United States, twenty years after a fungal infection has wiped out most of humanity and transformed the infected into violent, predatory beings.',
		releaseDate: new Date('2013-06-14'),
		platforms: [PLATFORMS[1], PLATFORMS[9]],
		publishers: [PUBLISHERS[0]],
		directors: [DIRECTORS[7]],
		rating: 4.5,
		picture: 'https://upload.wikimedia.org/wikipedia/en/4/4f/The_Last_of_Us_cover_art.jpg',
		price: 4,
	},
	{
		id: 2,
		name: 'The Legend of Zelda: Breath of the Wild',
		description:
			'The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U video game consoles.',
		releaseDate: new Date('2017-03-03'),
		platforms: [PLATFORMS[4], PLATFORMS[8]],
		publishers: [PUBLISHERS[2]],
		directors: [DIRECTORS[1]],
		rating: 4.5,
		picture: 'https://upload.wikimedia.org/wikipedia/en/7/75/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
		price: 5,
	},
	{
		id: 3,
		name: 'Metal Gear Solid V: The Phantom Pain',
		description:
			'Metal Gear Solid V: The Phantom Pain is an action-adventure stealth game developed by Kojima Productions and published by Konami for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One. It is the ninth installment in the Metal Gear series, and the first main entry since Metal Gear Solid: Peace Walker in 2010. The game was released worldwide in September 2015 for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One.',
		releaseDate: new Date('2015-09-01'),
		platforms: [PLATFORMS[1], PLATFORMS[2], PLATFORMS[3], PLATFORMS[4], PLATFORMS[9]],
		publishers: [PUBLISHERS[10]],
		directors: [DIRECTORS[0]],
		rating: 4.5,
		picture: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Metal_Gear_Solid_V_The_Phantom_Pain.jpg',
		price: 4,
	},
	{
		id: 4,
		name: 'Final Fantasy VII',
		description:
			'Final Fantasy VII is a 1997 role-playing video game developed by Square for the PlayStation console. It is the seventh main installment in the Final Fantasy series. The game was directed and produced by Yoshinori Kitase and Takashi Tokita, and features character designs by Tetsuya Nomura. It was released in January 1997 in Japan, and later in other regions.',
		releaseDate: new Date('1997-01-31'),
		platforms: [PLATFORMS[1]],
		publishers: [PUBLISHERS[8]],
		directors: [DIRECTORS[4]],
		rating: 4.5,
		picture: 'https://upload.wikimedia.org/wikipedia/en/5/56/Final_Fantasy_VII_Cover_Art.jpg',
		price: 2,
	},
	{
		id: 5,
		name: 'Final Fantasy VIII',
		description:
			'Final Fantasy VIII is a 1999 role-playing video game developed and published by Square for the PlayStation console. It is the eighth main installment in the Final Fantasy series. The game was directed and produced by Yoshinori Kitase and features character designs by Tetsuya Nomura. It was released in February 1999 in Japan, and later in other regions.',
		releaseDate: new Date('1999-02-11'),
		platforms: [PLATFORMS[1]],
		publishers: [PUBLISHERS[8]],
		directors: [DIRECTORS[4]],
		rating: 4.5,
		picture: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Final_Fantasy_VIII_Cover_Art.jpg',
		price: 2,
	},
	{
		id: 6,
		name: 'Final Fantasy IX',
		description:
			'Final Fantasy IX is a 2000 role-playing video game developed and published by Square for the PlayStation console. It is the ninth main installment in the Final Fantasy series. The game was directed and produced by Hiroyuki Itō and features character designs by Tetsuya Nomura. It was released in July 2000 in Japan, and later in other regions.',
		releaseDate: new Date('2000-07-07'),
		platforms: [PLATFORMS[1]],
		publishers: [PUBLISHERS[8]],
		directors: [DIRECTORS[4]],
		rating: 4.5,
		picture: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Final_Fantasy_IX_Cover_Art.jpg',
		price: 2,
	},
	{
		id: 7,
		name: 'Call of Duty: Modern Warfare 2',
		description:
			'Call of Duty: Modern Warfare 2 is a first-person shooter video game developed by Infinity Ward and published by Activision. It is the sixth installment in the Call of Duty series and the direct sequel to Call of Duty 4: Modern Warfare, continuing the same storyline. The game was released worldwide in November 2009 for Microsoft Windows, the PlayStation 3, and Xbox 360.',
		releaseDate: new Date('2009-11-10'),
		platforms: [PLATFORMS[1], PLATFORMS[2], PLATFORMS[3]],
		publishers: [PUBLISHERS[1]],
		directors: [DIRECTORS[2]],
		rating: 4.5,
		picture: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Call_of_Duty_Modern_Warfare_2_cover.jpg',
		price: 3,
	},
	{
		id: 8,
		name: 'Call of Duty: Modern Warfare 3',
		description:
			'Call of Duty: Modern Warfare 3 is a first-person shooter video game developed by Infinity Ward and Sledgehammer Games, with assistance from Raven Software, and published by Activision. It is the eighth installment in the Call of Duty series, and the third main entry in the Modern Warfare sub-series.',
		releaseDate: new Date('2011-11-08'),
		platforms: [PLATFORMS[1], PLATFORMS[2], PLATFORMS[3]],
		publishers: [PUBLISHERS[1]],
		directors: [DIRECTORS[2]],
		rating: 4.5,
		picture: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Call_of_Duty_Modern_Warfare_3_cover.jpg',
		price: 3,
	},
	{
		id: 9,
		name: 'Halo 4',
		description:
			'Halo 4 is a 2012 first-person shooter video game developed by 343 Industries and published by Microsoft Studios for the Xbox 360 video game console. The seventh installment in the Halo franchise, the game concludes the story arc begun in 2001 with the original Halo: Combat Evolved and continued in 2004 with Halo 2, 2007 with Halo 3, and 2010 with Halo: Reach.',
		releaseDate: new Date('2012-11-06'),
		platforms: [PLATFORMS[2]],
		publishers: [PUBLISHERS[1]],
		directors: [DIRECTORS[3]],
		rating: 4.5,
		picture: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Halo_4_cover_art.jpg',
		price: 3,
	},
	{
		id: 10,
		name: 'Halo 5: Guardians',
		description:
			'Halo 5: Guardians is a 2015 first-person shooter video game developed by 343 Industries and published by Microsoft Studios for the Xbox One home video game console. The fifth mainline entry and tenth overall in the Halo series, it was released worldwide on October 27, 2015.',
		releaseDate: new Date('2015-10-27'),
		platforms: [PLATFORMS[2]],
		publishers: [PUBLISHERS[1]],
		directors: [DIRECTORS[3]],
		rating: 4.5,
		picture: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Halo_5_Guardians_cover_art.jpg',
		price: 5,
	},
	{
		id: 11,
		name: 'Super Mario Bros.',
		description:
			'Super Mario Bros. is a 1985 platform video game developed and published by Nintendo. It is an action-adventure game in which players control Mario, the protagonist of the series, as he travels through the Mushroom Kingdom to rescue Princess Peach from the antagonist Bowser. The game was first released in Japan on September 13, 1985, and later in North America, Europe, and Australia.',
		releaseDate: new Date('1985-09-13'),
		platforms: [PLATFORMS[0]],
		publishers: [PUBLISHERS[0]],
		directors: [DIRECTORS[0]],
		rating: 4.5,
		picture: 'https://upload.wikimedia.org/wikipedia/en/5/50/Super_Mario_Bros._box_artwork.png',
		price: 1,
	},
	{
		id: 12,
		name: 'Super Mario Bros. 3',
		description:
			'Super Mario Bros. 3 is a 1988 platform video game developed and published by Nintendo for the Nintendo Entertainment System. It is the third game in the Super Mario series and the first to feature Mario and Luigi as playable characters. The game was first released in Japan on October 23, 1988, and later in North America, Europe, and Australia.',
		releaseDate: new Date('1988-10-23'),
		platforms: [PLATFORMS[0]],
		publishers: [PUBLISHERS[0]],
		directors: [DIRECTORS[0]],
		rating: 4.5,
		picture: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Super_Mario_Bros._3_cover_art.png',
		price: 2,
	},
];

async function main() {
	console.log('Start seeding for Directors...');
	DIRECTORS.forEach(async (director) => {
		console.log(`Seeding director ${director.name}...`);
		await prisma.director.upsert({
			where: { id: director.id },
			create: director,
			update: {},
		});
	});

	console.log('Start seeding for Publishers...');
	PUBLISHERS.forEach(async (publisher) => {
		console.log(`Seeding publisher ${publisher.name}...`);
		await prisma.publisher.upsert({
			where: { id: publisher.id },
			create: publisher,
			update: {},
		});
	});

	console.log('Start seeding for Platforms...');
	PLATFORMS.forEach(async (platform) => {
		console.log(`Seeding platform ${platform.name}...`);
		await prisma.platform.upsert({
			where: { id: platform.id },
			create: platform,
			update: {},
		});
	});

	console.log('Start seeding for Games...');
	GAMES.forEach(async (game) => {
		console.log(`Seeding game ${game.name}...`);
		await prisma.game.upsert({
			where: { id: game.id },
			create: {
				...game,
				directors: {
					connect: game.directors.map((director) => ({ id: director.id })),
				},
				publishers: {
					connect: game.publishers.map((publisher) => ({ id: publisher.id })),
				},
				platforms: {
					connect: game.platforms.map((platform) => ({ id: platform.id })),
				},
			},
			update: {},
		});
	});

	console.log('Seeding for users...');
	await prisma.user.upsert({
		where: {
			email: 'julian@julian.com',
		},
		update: {},
		create: {
			email: 'julian@julian.com',
			password: 'julian',
			firstName: 'Julian',
			lastName: 'Julian',
		},
	});
	await prisma.user.upsert({
		where: {
			email: 'admin@admin.com',
		},
		update: {},
		create: {
			email: 'admin@admin.com',
			password: 'admin',
			firstName: 'Admin',
			lastName: 'Admin',
		},
	});

	await prisma.user.upsert({
		where: {
			email: 'user@user.com',
		},
		update: {},
		create: {
			email: 'user@user.com',
			password: 'user',
			firstName: 'User',
			lastName: 'User',
		},
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
