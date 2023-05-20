const express = require("express");
const path = require("path");
const app = express();
const index = path.join(__dirname, 'pages/index.html');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'sounds')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'js')));
app.listen(PORT, () => console.log(`Running on port: ${PORT} `));

app.get('/',(req, res) => {
	res.sendFile(index);
})
