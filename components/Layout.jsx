const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/script.js" />
        <script defer src="/scripts/btn.js" />
      </head>
      <body>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
};
