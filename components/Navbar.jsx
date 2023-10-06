const React = require('react');

function Navbar({ user }) {
  
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          {user && (
            <li>{`Hello ${user.name}!  `}</li>
          )}
        </ul>
      </div>
    </nav>
  );
}
module.exports = Navbar;
