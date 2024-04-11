const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
];

let scores = {};

app.get('/new-game', (req, res) => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const options = [randomEmoji.name, 'Option 1', 'Option 2', 'Option 3'];
    res.json({ emoji: randomEmoji.emoji, options });
});

app.post('/guess', (req, res) => {
    const { username, guess } = req.body;
    const correct = emojis.find(emoji => emoji.name === guess);
    if (!scores[username]) scores[username] = 0;
    if (correct) {
        scores[username]++;
        res.json({ correct: true, score: scores[username] });
    } else {
        res.json({ correct: false, score: scores[username] });
    }
});

app.get('/scores', (req, res) => {
    const leaderboard = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    res.json(leaderboard);
});

app.listen(3000, () => console.log('Server listening on port 3000'));