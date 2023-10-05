const React = require('react');
const Layout = require('./Layout');
const RegForm = require('./RegForm');

function Main({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Main page</h1>
      <RegForm />
    </Layout>
  );
}

module.exports = Main;
