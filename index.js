let express = require('express');
let hbs = require('express-handlebars');
let giphy = require('giphy-api')();
let app = express();

app.engine('handlebars', hbs());
app.use(express.static('public'));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    let searchTerm = req.query.term || "funny cat";
    giphy.search(searchTerm, (err, response) => {
        res.render('home', {gifs: response.data});
    });
});

app.listen(5000, console.log("Running Giphy Search on port 5000"));

