const express = require('express');
const userRouter = require('./routers/user.router');
const gameRouter = require('./routers/game.router');
const platformRouter = require('./routers/platform.router');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', userRouter);
app.use('/games', gameRouter);
app.use('/platform', platformRouter);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});
