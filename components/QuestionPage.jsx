const React = require('react');
const Layout = require('./Layout');
const QuestionList = require('./QuestionList');

module.exports = function QuestionPage({ title, question, theme ,user}) {
 
  return (
    <Layout user={user}>
      
      <div data-id={theme.id} className="quest-container" title={title}>
        <QuestionList question={question} />
      </div>
     
     
    </Layout>
  );
};
