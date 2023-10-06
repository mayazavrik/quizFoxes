const React = require('react');
const Layout = require('./Layout');
const RegForm = require('./RegForm');

function Main({ title, user }) {
  return (
    <Layout title={title} user={user}>
     
      <RegForm />
    </Layout>
  );
}

module.exports = Main;
