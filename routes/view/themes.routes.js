const router = require('express').Router();
const { Theme } = require('../../db/models');
const ThemesPage = require('../../components/ThemesPage');

router.get('/', async (req, res) => {
  const themes = await Theme.findAll();
  const html = res.renderComponent(ThemesPage, { title: 'Themes', themes });
  res.send(html);
});

module.exports = router;
