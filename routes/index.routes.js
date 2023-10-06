const router = require('express').Router();

const mainRouter = require('./view/main.routes');
const themesRouter = require('./view/themes.routes');
const questionsRouter = require('./view/questions.routes');

router.use('/', mainRouter);
router.use('/themes', themesRouter);
router.use('/themes', questionsRouter);
module.exports = router;
