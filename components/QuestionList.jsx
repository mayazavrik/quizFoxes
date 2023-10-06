const React = require('react');

module.exports = function QuestionList({ title, question }) {
  return (
    <div data-itemid={question.id} className="quest-list" title={title}>
      <h2>{question.textQuestion}</h2>
      <form className="answer-form" id={question.id} method="POST">
        <label className='answerlabel' htmlFor="">Введите свой ответ</label>
        <input name="answer-input" type="text" />
        <button type="submit" className="btn btn-answer">
          Отправить ответ
        </button>
      </form>
      <button type="submit" className="btn btn-next">
        Следующий вопрос
      </button>
      <div className="answer"></div>
    </div>
  );
};
