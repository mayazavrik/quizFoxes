const router = require('express').Router();

const mainRouter = require('./view/main.routes');
const themesRouter = require('./view/themes.routes');

router.use('/', mainRouter);
router.use('/themes', themesRouter);

module.exports = router;
