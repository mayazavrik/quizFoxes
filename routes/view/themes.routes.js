const router = require('express').Router();
const { Theme} = require('../../db/models');
const ThemesPage = require('../../components/ThemesPage');

router.get('/', async (req, res) => {
  const themes = await Theme.findAll();
  const html = res.renderComponent(ThemesPage, { title: 'Themes', themes });
  res.send(html);
});

// router.post('/',  async (req, res)=>{
//   const {name} = req.body
  
//   const user = await User.create({name,score:0})
//   res.app.locals.user=user
//   res.redirect('/themesCard')
// })

module.exports = router;
