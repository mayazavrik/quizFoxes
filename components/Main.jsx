const React = require('react');
const Layout = require('./Layout');
const RegForm = require('./RegForm');

function Main({ title, user }) {
 
  return (
    
    <Layout title={title} user={user}>
            {/* <div className="preload" data-preaload>
 <div className="circle"></div>
 <p className="text">Добро пожаловать на квиз</p>
</div> */}
     
      <RegForm />
    </Layout>
  );
  
}

module.exports = Main;
