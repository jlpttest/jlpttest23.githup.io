// module
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
//user define
const bodyParser = require('body-parser');
const router = require('./routes/user.route');
const routerCategory = require('./routes/category.route');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public', 'images')));
app.use(express.static(path.join(__dirname, 'public', 'js')));
app.use(express.static(path.join(__dirname, 'public', 'css')));
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/user', router);
app.use('/category', routerCategory);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

