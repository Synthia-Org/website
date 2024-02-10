const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/chat', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});