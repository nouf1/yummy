import React, { Component } from 'react';

function Home(props) {
  return (
      <div className="containerhome">

          <div className="citytemp">

              <h3>{props.city}</h3>
          <h3>{props.temp}&deg;C</h3>

          </div>
        <div className="title">
        <h1>Yummy Yum App</h1>
        <p>
          Welcome to my Dilicious App
        </p>
        </div>

      </div>
  );
}
export default Home;