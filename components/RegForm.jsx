const React = require('react');
const Layout = require('./Layout');

function RegForm() {
  return (
    <div className="divReg">
      <form action="/themes" id="regForm" method="POST">
        <label>Как Вас зовут?</label>
        <div className="divInput">
          <input className="regName" name="name" />
          <button className="regBtn" type="submit">
            Зарегистрироваться!
          </button>
        </div>
      </form>
    </div>
  );
}

module.exports = RegForm;
