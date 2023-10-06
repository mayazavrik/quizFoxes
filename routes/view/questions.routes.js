/* eslint-disable no-lonely-if */
const router = require('express').Router();
const QuestionList = require('../../components/QuestionList');
const QuestionPage = require('../../components/QuestionPage');
const { Question } = require('../../db/models');
const { Theme } = require('../../db/models');

router.get('/:themeId/questions/:questId', async (req, res) => {
  try {
    const { questId } = req.params;
    const { themeId } = req.params;

    const question = await Question.findOne({
      where: { id: questId, idTheme: themeId },
    });
    const theme = await Theme.findOne({ where: { id: themeId } });
    const html = res.renderComponent(QuestionPage, {
      title: 'HELLO',
      question,
      theme,
    });

    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});
router.put('/:themeId/questions/:questId', async (req, res) => {
  try {
    let { listId, contId } = req.body;
    listId = +listId + 1;
    let question;
    if (+contId === 1) {
      if (+listId <= 7) {
        question = await Question.findOne({ where: { id: +listId } });

        const html = res.renderComponent(
          QuestionList,
          { question },
          { htmlOnly: true },
        );
        console.log(html);
        res.json({ message: 'success', html });
      } else res.json({ message: 'false' });
    } else {
      if (+listId > 7 && +listId <= 14) {
        question = await Question.findOne({ where: { id: +listId } });
        const html = res.renderComponent(
          QuestionList,
          { title: 'Вопрос', question },
          { htmlOnly: true },
        );
        res.json({ message: 'success', html });
      } else res.json({ message: 'false' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});
router.post('/:themeId/questions/:questId', async (req, res) => {
  try {
    const { listId, contId, answerInput } = req.body;
    let result;
    console.log(listId);
    const question = await Question.findOne({ where: { id: listId } });
    if (answerInput === question.textAnswer) {
      console.log('hello');
      result = 'Молодец!';
    } else {
      result = '!ХОРООООШ';
    }
    const html = res.renderComponent(
      QuestionList,
      { question, result },
      { htmlOnly: true },
    );

    res.json({ message: 'success', html });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
