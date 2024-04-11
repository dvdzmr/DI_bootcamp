const express = require('express');
const app = express();
const port = 5000;
const axios = require('axios');
const { fetchPosts } = require('./data/dataService');

app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        res.json(posts);
        console.log('Data successfully retrieved and sent as a response.')
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});