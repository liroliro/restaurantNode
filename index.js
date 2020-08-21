const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');

const sassMiddleware = require("node-sass-middleware");
const mainRouter = require('./router/mainRouter');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(sassMiddleware({
    src: path.join(__dirname, "scss"),
    // dest: path.join(__dirname, "public")
}));

app.set('view engine', 'ejs');

// Routing
app.use(mainRouter)

// Error handling
app.get("*", (req, res) => res.send("404"));

// Hosting
const PORT = process.env.PORT || 8000;
const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true
};

mongoose.connect(config.databaseURL, options).then(()=>{
    console.log('Server is hosted on port ' + PORT);
    app.listen(PORT)
});

module.exports = app;