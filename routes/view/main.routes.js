const router = require('express').Router();
const Main = require('../../components/Main');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  const html = res.renderComponent(Main, { title: 'Main page' });
  res.send(html);
});

router.post('/themes', async (req, res) => {
  const { name } = req.body;

  const user = await User.create({ name, score: 0 });
  res.app.locals = user;
  res.redirect('./themes');
});

module.exports = router;
