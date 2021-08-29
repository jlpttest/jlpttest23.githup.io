// module
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
//user define
const bodyParser = require('body-parser');
const router = require('./routes/user.route');
const routerCategory = require('./routes/category.route');

// Test
var testdata =[
  {
    id:1,
    de:"Đề 1"
  },
  {
    id:2,
    de:"Đề 2"
  },
  {
    id:3,
    de:"Đề 3"
  },
  {
    id:4,
    de:"Đề 4"
  },
  {
    id:5,
    de:"Đề 5"
  },
  {
    id:6,
    de:"Đề 6"
  },
  {
    id:7,
    de:"Đề 7"
  },{
    id:1,
    de:"Đề 1"
  },
  {
    id:2,
    de:"Đề 2"
  },
  {
    id:3,
    de:"Đề 3"
  },
  {
    id:4,
    de:"Đề 4"
  },
  {
    id:5,
    de:"Đề 5"
  },
  {
    id:6,
    de:"Đề 6"
  },
  {
    id:7,
    de:"Đề 7"
  }
]
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public', 'images')));
app.use(express.static(path.join(__dirname, 'public', 'css')));
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/user', router);
app.use('/category', routerCategory);

app.listen(port, () => {
  //console.log(`Example app listening at http://localhost:${port}`)
});

