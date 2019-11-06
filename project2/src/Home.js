import React, { Component } from 'react';

function Home(props) {
  return (
      <div>

          <div>
              <h3>{props.city}</h3>
          <h3>{props.temp}&deg;C</h3>

          </div>
          
        <h1>Food App</h1>
        <p>
          Welcome to my Food App
        </p>
        
      </div>
  );
}


export default Home;