const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const port = 3000;
var favicon = require('serve-favicon');
const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
	service: 'gmail', // use 'gmail' as an example, you can use other services
	auth: {
		user: 'teamsynthia@gmail.com', // your email
		pass: 'kjih rrxd gdmw ycht' // your email password
	}
});

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
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'chat.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});

app.get('/entertainment', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'entertainment.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});

// Games Routes Start
app.get('/games', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'games.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/bullseye', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'bullseye.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/catjumper', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'catjumper.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/clickonthecircle', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'clickonthecircle.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/cubnpup', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'cubnpup.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/minesweeper', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'minesweeper.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/remembercard', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'remembercard.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/rockpaperscissors', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'rockpaperscissors.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/snakesandladders', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'snakesandladders.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/thecube', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'thecube.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/tictactoe', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'tictactoe.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/tiltingmaze', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'tiltingmaze.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
app.get('/games/towerblocks', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'games', 'towerblocks.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});
// Games Routes End

app.get('/resources', function(req, res) {
	if (req.cookies.email) {
		res.sendFile(path.join(__dirname, 'public', 'resources.html'));
	} else {
		res.sendFile(path.join(__dirname, 'public', 'noaccess.html'));
	}
});

app.get('/help', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'help.html'));
});

app.get('/settings', function(req, res) {
	if (req.cookies.email) {
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
        // Check if email already exists in the database
        db.get('SELECT email FROM users WHERE email = ?', [email], (err, row) => {
            if (err) {
                console.error('Error querying database:', err.message);
                res.status(500).send('Error querying database :(');
                return;
            }

            if (row) {
                // If the SELECT statement returned a row, the email already exists
                console.error('Email already exists');
                res.status(500).send(`<script>alert('Email already exists'); window.history.back();</script>`);
                return;
            }

            // If the SELECT statement didn't return a row, the email doesn't exist and we can insert the new user
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
                            <button onclick="window.location.href='/login'">Login</button>
                        </body>
                    </html>
                `;

                res.send(userRegisterHtml);

                // after user is registered
                let mailOptions = {
                    from: 'teamsynthia@gmail.com', // sender address
                    to: email, // list of receivers
                    subject: 'Welcome to Synthia', // Subject line
                    text: 'Thank you for registering ' + name.split(' ')[0] + '.', // plain text body
                    html: `
                        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                        <html xmlns="http://www.w3.org/1999/xhtml">

                        <head>
                            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                        </head>

                        <body>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    margin: 0;
                                    padding: 0;
                                    color: #333;
                                }

                                a {
                                    color: #4CAF50;
                                    text-decoration: none;
                                }
                                a:hover {
                                    color: #3e8e41;
                                }

                                .container {
                                    padding: 20px;
                                    max-width: 600px;
                                    margin: 0 auto;
                                    border-radius: 5px;
                                    background-color: #f2f2f2;
                                }

                                .header {
                                    text-align: center;
                                }

                                .content {
                                    padding: 20px;
                                }

                                .footer {
                                    text-align: center;
                                    padding: 10px;
                                    background-color: #ddd;
                                }
                            </style>

                            <div class="container">
                                <div class="header">
                                    <h1>Welcome to Synthia, ${name.split(' ')[0]}!</h1>
</div>

								<div class="content">
									<p>We're thrilled to have you join us on your journey to mental well-being. Here at Synthia, we understand that mental health is just as important as physical health.</p>
									<p>That's why we offer a variety of resources and tools to help you manage stress, improve your mood, and build resilience. Explore what we have to offer:</p>
									<ul>
										<li>**AI Chatbot:** Feeling overwhelmed and need someone to talk to? Our friendly AI chatbot is available 24/7 to listen without judgment and offer support.</li>
										<li>**Entertainment:** Take a break and unwind with our curated selection of music genres.</li>
										<li>**Games:** Engage in fun and interactive games designed to reduce stress, improve focus, and promote positive thinking.</li>
										<li>**Resources:** Find valuable information, articles, and exercises on a wide range of mental health topics.</li>
									</ul>
									<p>We're constantly adding new features and content, so be sure to check back often!</p>

									<h2>Getting Started</h2>
									<p>For a seamless experience, we recommend creating a profile. This allows you to personalize your experience, track your progress, and access exclusive features. You can create your profile by logging in to your account.</p>

									<h2>Stay Connected</h2>
									<p>Follow us on social media for daily inspiration and updates:</p>
									<ul>
										<li><a href="">Link 1</a></li>
										<li><a href="">Link 2</a></li>
									</ul>
									<p>If you have any questions or suggestions, please don't hesitate to contact us at <a href="mailto:teamsynthia@gmail.com">teamsynthia@gmail.com</a>.</p>
									<p>We're here to support you on your path to mental well-being.</p>
									<p>Warmly,</p>
									<p>Synthia Team</p>
								</div>

								<div class="footer">
									<p>&copy; 2024 Synthia</p>
								</div>
							</div>
						</body>

						</html>
					` // html body
				};
				// send mail with defined transport object
				transporter.sendMail(mailOptions, (error, info) => {
					if (error) {
						return console.log(error);
					}
					console.log('Message sent: %s', info.messageId);
				});
			});
		});
	} else {
		console.error('Password and Confirm Password do not match');
		res.status(500).send(`<script>alert('Password and Confirm Password do not match'); window.history.back();</script>`);
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
				res.cookie('userid', row.id, {
					maxAge: 1000 * 60 * 60 * 24 * 30, // Expires in 30 days
					httpOnly: true, // Only accessible by the server
					secure: false // Only sent over HTTPS
				});
				console.log('User ID Cookie Set Successfully');
				res.cookie('email', email, {
					maxAge: 1000 * 60 * 60 * 24 * 30, // Expires in 30 days
					httpOnly: true, // Only accessible by the server
					secure: false // Only sent over HTTPS
				});
				console.log('Email Cookie Set Successfully');
				res.cookie('name', row.name, { // Save the name of the user from the database
					maxAge: 1000 * 60 * 60 * 24 * 30, // Expires in 30 days
					httpOnly: true, // Only accessible by the server
					secure: false // Only sent over HTTPS
				});
				console.log('Name Cookie Set Successfully');
				res.redirect('/chat');
			} else {
				console.error('Invalid Password :(');
				res.status(500).send(`<script>alert('Invalid Password :('); window.history.back();</script>`);
			}
		} else {
			console.error('Invalid Email :(');
			res.status(500).send(`<script>alert('Invalid Email :('); window.history.back();</script>`);
		}
	});
});
// Login User End


// Loggedin User Info Endpoint Start
app.get('/api/loggedin-userinfo', (req, res) => {
	const userInfo = {
		userid: req.cookies.userid,
		email: req.cookies.email,
		name: req.cookies.name
	};
	res.json(userInfo);
});
// Loggedin User Info Endpoint End


// Update Username Start
app.post('/api/updateusername', (req, res) => {
	const id = req.cookies.userid;
	const newName = req.body.newName;

	db.run('UPDATE users SET name = ? WHERE id = ?', [newName, id], (err) => {
		if (err) {
			console.error(err.message);
			res.json({ success: false });
		} else {
			res.cookie('name', newName, { // Save the name of the user from the database
				maxAge: 1000 * 60 * 60 * 24 * 30, // Expires in 30 days
				httpOnly: true, // Only accessible by the server
				secure: false // Only sent over HTTPS
			});
			console.log('Name Updated Successfully\nNew Name: ' + newName);
			res.json({ success: true });
		}
	});
});
// Update Username End


// Update Email Start
app.post('/api/updateuseremail', (req, res) => {
	const id = req.cookies.userid;
	const newEmail = req.body.newEmail;

	db.run('UPDATE users SET email = ? WHERE id = ?', [newEmail, id], (err) => {
		if (err) {
			console.error(err.message);
			res.json({ success: false });
		} else {
			res.cookie('email', newEmail, { // Save the email of the user from the database
				maxAge: 1000 * 60 * 60 * 24 * 30, // Expires in 30 days
				httpOnly: true, // Only accessible by the server
				secure: false // Only sent over HTTPS
			});
			console.log('Email Updated Successfully\nNew Email: ' + newEmail);
			res.json({ success: true });
		}
	});
});
// Update Email End


// Update Password Start
app.post('/api/updateuserpassword', (req, res) => {
	const id = req.cookies.userid;
	const newPassword = req.body.newPassword;
	const name = req.cookies.name;
	const email = req.cookies.email;

	db.run('UPDATE users SET password = ? WHERE id = ?', [newPassword, id], (err) => {
		if (err) {
			console.error(err.message);
			res.json({ success: false });
		} else {
			console.log('Password Updated Successfully\nNew Password: ' + newPassword);

			// after password is updated
			let mailOptions = {
				from: 'teamsynthia@gmail.com', // sender address
				to: email, // list of receivers
				subject: 'Your Password Has Been Updated', // Subject line
				text: 'Your password has been updated.', // plain text body
				html: `
					<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
					<html xmlns="http://www.w3.org/1999/xhtml">

					<head>
						<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
						<meta name="viewport" content="width=device-width, initial-scale=1" />
					</head>

					<body>
						<style>
							body {
								font-family: Arial, sans-serif;
								margin: 0;
								padding: 0;
								color: #333;
							}

							a {
								color: #4CAF50;
								text-decoration: none;
							}
							a:hover {
								color: #3e8e41;
							}

							.container {
								padding: 20px;
								max-width: 600px;
								margin: 0 auto;
								border-radius: 5px;
								background-color: #f2f2f2;
							}

							.content {
								padding: 20px;
							}
						</style>

						<div class="container">
							<div class="content">

								<p>Hi ${name.split(' ')[0]},</p>
								<p>This email confirms that your password for your account on Synthia has been successfully updated.</p>
								<p>**Important:** For your security, we cannot disclose your new password in this email. We recommend you choose a strong password that is unique to Synthia and not used for any other online accounts.</p>
								<p>If you did not request this password update, please contact us immediately at <a href="mailto:teamsynthia@gmail.com">teamsynthia@gmail.com</a> to ensure the security of your account.</p>

								<p>Thanks,</p>
								<p>The Synthia Team</p>

							</div>
						</div>
					</body>

					</html>				
				` // html body
			};

			// send mail with defined transport object
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					return console.log(error);
				}
				console.log('Message sent: %s', info.messageId);
			});

			res.json({ success: true });
		}
	});
});
// Update Password End


// Logout User Start
app.get('/logout', (req, res) => {
	function removeCookies() {
		res.clearCookie('userid');
		console.log('User ID Cookie Cleared');
		res.clearCookie('email');
		console.log('Email Cookie Cleared');
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