const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files like music or images
app.use(express.static(path.join(__dirname, 'public')));

// Root route serving HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Your API routes...
const cards = require('./api/cards.js');
const randomcard = require('./api/randomcard.js');
const cardtier = require('./api/cardtier.js');
const cardid = require('./api/cardid.js');
const enhance = require('./api/enhance.js');
const gptlogic = require('./api/chatgpt.js');
const copilot = require('./api/copilot.js');
const cohere = require('./api/cohere.js');
const tiktok = require('./api/tiktok.js');
const igdl = require('./api/igdl.js');
const musicapple = require('./api/musicapple.js');
const facebook = require('./api/facebook.js');
const spotify = require('./api/spotify.js');
const twitter = require('./api/twitter.js');
const youtube = require('./api/youtube.js');

// Register API endpoints
app.all('/api/cards', cards);
app.all('/api/randomcard', randomcard);
app.all('/api/cardtier', cardtier);
app.all('/api/cardid', cardid);
app.get('/api/enhance', enhance);
app.get('/api/chatgpt', gptlogic);
app.get('/api/copilot', copilot);
app.get('/api/cohere', cohere);
app.get('/api/tiktok', tiktok);
app.get('/api/igdl', igdl);
app.get('/api/musicapple', musicapple);
app.get('/api/facebook', facebook);
app.get('/api/spotify', spotify);
app.get('/api/twitter', twitter);
app.get('/api/youtube', youtube);

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});

