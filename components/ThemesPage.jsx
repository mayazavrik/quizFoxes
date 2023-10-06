const React = require('react');
const Layout = require('./Layout');

function ThemesPage({ title, user, themes }) {

  return (
    <Layout title={title} user={user}>
      <div className="ThemesCard">
        <div className="choseCard">
          
          {themes.map((el) => {

            

            if (el.id === 1) {
              return <a className='link' href={`/themes/${el.id}/questions/1`}>{el.name}</a>;
            } else {
              return <a className='link' href={`/themes/${el.id}/questions/8`}>{el.name}</a>;
            }
          })}
        </div>
      </div>
    </Layout>
  );
}

module.exports = ThemesPage;
