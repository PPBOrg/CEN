const express = require("express");
const path = require("path");
const app = express();



const index = path.join(__dirname, 'pages/index.html');
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'sounds')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'js')));

app.listen(3000, () => console.log("Express server running @ port: 3000"));

app.get('/',(req, res) => {
	res.sendFile(index);
})
