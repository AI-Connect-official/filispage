const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware für POST-Daten
app.use(bodyParser.urlencoded({ extended: true }));

// Anmeldeinformationen (normalerweise aus einer Datenbank)
const users = [
    { username: 'paula', password: '09062017', role: 'paula' },
    { username: 'lilli', password: '29072020', role: 'lilli' },
    { username: 'admin', password: '04052005', role: 'admin' }
];

// Routen für Login und verschiedene Seiten
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Überprüfen der Anmeldeinformationen
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Weiterleitung basierend auf Benutzerrolle
        if (user.role === 'admin') {
            res.redirect('/admin');
        } else if (user.role === 'paula') {
            res.redirect('/paula');
        } else if (user.role === 'lilli') {
            res.redirect('/lilli');
        }
    } else {
        res.send('Falsche Anmeldeinformationen');
    }
});

app.get('/admin', (req, res) => {
    res.send('Willkommen im Admin-Bereich');
});

app.get('/paula', (req, res) => {
    res.sendFile(__dirname + '/paula.html');
});

app.get('/lilli', (req, res) => {
    res.sendFile(__dirname + '/lilli.html');
});

// Starten des Servers
const port = 9999;
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
