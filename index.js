const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const port = 3000;
var favicon = require('serve-favicon');
const sqlite3 = require('sqlite3').verbose();


// Cookie Configuration Start
app.use(cookieParser());
// Cookie Configuration End


// Database Configuration Start
const db = new sqlite3.Database('synthia.db');
db.serialize(() => {
	console.log('Database Connected Successfully :)');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Database Configuration End


// Static Files Start
app.use(express.static(path.join(__dirname, 'public')));
// Static Files End


// Favicon Start
app.use(favicon(path.join(__dirname, 'public', 'assets', 'favicon.png')));
// Favicon End


// URL Routes Start
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/chat', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'chat.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});

app.get('/entertainment', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'entertainment.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});

// Games Routes Start
app.get('/games', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'games.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/bullseye', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'bullseye.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/catjumper', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'catjumper.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/clickonthecircle', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'clickonthecircle.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/cubnpup', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'cubnpup.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/minesweeper', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'minesweeper.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/remembercard', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'remembercard.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/rockpaperscissors', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'rockpaperscissors.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/snakesandladders', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'snakesandladders.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/thecube', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'thecube.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/tictactoe', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'tictactoe.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/tiltingmaze', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'tiltingmaze.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/towerblocks', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'towerblocks.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
// Games Routes End

app.get('/resources', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'resources.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});

app.get('/help', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'help.html'));
});

app.get('/settings', function(req, res) {
	if (req.cookies.email && req.cookies.password) {
		res.sendFile(path.join(__dirname, 'public', 'settings.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
// URL Routes End


// Register User Start
app.post('/userRegister', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;
	const confirmPassword = req.body.confirmPassword;
	const timestamp = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear() + ' ' + new Date().toTimeString().slice(0, 5);

	if (password === confirmPassword) {
		db.run('INSERT INTO users (name, email, password, timestamp) VALUES (?, ?, ?, ?)', [name, email, password, timestamp], (err) => {
			if (err) {
				console.error('Error Saving Data To Database:', err.message);
				res.status(500).send('Error Saving Data To Database :(');
				return;
			}

			console.log('Data Saved To Database :)');

			// HTML To Display Thanks & Submitted Data To User
			let userRegisterHtml = `
				<html>
					<head>
						<title>Thank You</title>
						<link rel="stylesheet" href="/css/style.css">
					</head>

					<body>
						<h1>Thank You!</h1>
						<br>
						<h1>Here Is Your Submitted Form Data:</h1>
						<p>Name: ${name}</p>
						<p>Email: ${email}</p>
						<p>Password: ${password}</p>
						<button onclick="window.location.href='/'">Home</button>
					</body>
				</html>
			`;

			res.send(userRegisterHtml);
		});
	} else {
		console.error('Password and Confirm Password do not match');
		res.status(500).send('Password and Confirm Password do not match :(');
		return;
	}
});
// Register User End


// Login User Start
app.post('/userLogin', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
		if (err) {
			console.error(err.message);
			res.status(500).send('Error Fetching Data From Database :(');
			return;
		}

		if (row) {
			if (password === row.password) {
				console.log('Login Successful :)');
				res.cookie('email', email, {
					maxAge: 1000 * 60 * 60 * 24 * 30, // Expires in 30 days
					httpOnly: true, // Only accessible by the server
					secure: false // Only sent over HTTPS
				});
				console.log('Email Cookie Set Successfully');
				res.cookie('password', password, {
					maxAge: 1000 * 60 * 60 * 24 * 30, // Expires in 30 days
					httpOnly: true, // Only accessible by the server
					secure: false // Only sent over HTTPS
				});
				console.log('Password Cookie Set Successfully');
				res.cookie('name', row.name, { // Save the name of the user from the database
					maxAge: 1000 * 60 * 60 * 24 * 30, // Expires in 30 days
					httpOnly: true, // Only accessible by the server
					secure: false // Only sent over HTTPS
				});
				console.log('Name Cookie Set Successfully');
				res.redirect('/chat');
			} else {
				console.error('Invalid Password :(');
				res.status(500).send(`<script>alert('Invalid Password :(');</script>`);
			}
		} else {
			console.error('Invalid Email :(');
			res.status(500).send(`<script>alert('Invalid Email :(');</script>`);
		}
	});
});
// Login User End


// Loggedin User Info Endpoint Start
app.get('/api/loggedin-userinfo', (req, res) => {
	const userInfo = {
		email: req.cookies.email,
		name: req.cookies.name,
		password: req.cookies.password
	};
	res.json(userInfo);
});
// Loggedin User Info Endpoint End


// Logout User Start
app.get('/logout', (req, res) => {
	function removeCookies() {
		res.clearCookie('email');
		console.log('Email Cookie Cleared');
		res.clearCookie('password');
		console.log('Password Cookie Cleared');
		res.clearCookie('name');
		console.log('Name Cookie Cleared');
	}
	removeCookies();
	res.redirect('/login');
});
// Logout User End


// Get Users Start
app.get('/api/getUsers', (req, res) => {
	db.all('SELECT * FROM users', (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		res.json(rows);
	});
});
// Get Users End


// Get Entertainment Start
app.get('/api/getEntertainment', function(req, res) {
	db.all('SELECT * FROM entertainment ORDER BY title ASC', (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		res.json(rows);
	});
});
// Get Entertainment End


// Get Games Start
app.get('/api/getGames', function(req, res) {
	db.all('SELECT * FROM games ORDER BY title ASC', (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		res.json(rows);
	});
});
// Get Games End


// Get Resources Start
app.get('/api/getResources', function(req, res) {
	db.all('SELECT * FROM resources ORDER BY title ASC', (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		res.json(rows);
	});
});
// Get Resources End

// Get Resource Start
app.get('/resources/:url', function(req, res) {
	const url = req.params.url;
	db.get('SELECT * FROM resources WHERE url = ?', [url], (err, row) => {
		if (err) {
			console.error(err.message);
			res.status(500).send(err.message);
		} else if (row) {
			res.sendFile(path.join(__dirname, 'public', 'resources', row.url + '.html'));
		} else {
			res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
		}
	});
});
// Get Resource End


// Error Handling Start
app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});
// Error Handling End


// Port Configuration Start
app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
// Port Configuration End