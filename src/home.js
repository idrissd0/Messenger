import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <a href='login' >
        Login
      </a>
      <br/>
      <a href='signup' >
        SignUp
      </a>
    </div>
  );
};

export default Home;