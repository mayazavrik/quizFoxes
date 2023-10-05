require('@babel/register');
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index.routes');

const ssr = require('./middleware/ssr');

const app = express();

app.use(ssr);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Наша шарманка играет на ${PORT} порту`);
});
