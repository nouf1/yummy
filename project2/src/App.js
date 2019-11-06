import React, { Component } from 'react'
// import logo from './favicon.ico';
import './App.css';
import FoodList from './components/FoodList'
// import { url } from 'inspector';
import burger1 from './imges/burger1.jpg';
import burger2 from './imges/burger2.jpeg';
import burger3 from './imges/burger3.jpg';
import burger4 from './imges/burger4.jpg';
import daynmitshrimp from './imges/daynmitshrimp.jpg';

import CartFood from './components/CartFood';
import Home from './Home';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Mnue from './Mnue';
import Contact from './Contact';
import axios from 'axios'


class App extends Component {
 constructor(props) {
   super(props)
   this.state = {
     foodDB: [{
       img: burger1,
       name: 'Chicken Crispy',
       price: "45 SR",
     }, {
       img:burger2 ,
       name: 'Solar Gravity',
       price: "45 SR",
     },
     {
       img:burger3,
       name: 'Chickn Burger',
       price: "45 SR",
     },
     {
       img:burger4 ,
       name: 'Beef Burger',
       price: "45 SR",
     },
     {
      img:daynmitshrimp,
      name: 'Dynamit-Shrimp',
      price: "45 SR",
    }],

     carts : [],
     temp : '',
     city : ''
   }
 }
 
 handleBtnClick = (food) => {

     let carts = [...this.state.carts];
     console.log(food)
     const foodIndex = carts.indexOf(food)

     if (foodIndex !== -1){
       carts.splice(foodIndex, 1);
       console.log('Removing ${food.name} From Carts')
     }else{
       carts = [...this.state.carts, food]
       this.setState({
         carts: carts
       })
       console.log(this.state.carts)
       console.log(`Adding ${food.name} To Carts`)
     }

     this.setState({carts})
   console.log(this.state.carts);

 }

 clearHanle =()=>{
   console.log(this.state.carts)
   this.setState({
     carts: []
   })
   console.log(this.state.carts)

 }

 componentDidMount(){
  // const weather = document.querySelector('#degree');
  // const cityName = document.querySelector('#city');
  
  axios({
    method:'get',
    url:'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&APPID=17fb5fb0eaaf777fa63a9d3ce7daa9c6'
  })
  .then(response =>{
    const temp=response.data.main.temp -273.15;
    const city =response.data.name;
    // cityName.innerText=city;
    // weather.innerHTML=`${temp}&deg;C`;

    this.setState({temp, city})
    console.log(response);
  })
  .catch(error =>{
    console.log(error);
  })
 }


 render() {
   return (


<Router>
      <nav>
        <Link to="/">Home</Link>{'  |  '}
        <Link to="/mnue">Mnue</Link>{'  |  '}
        <Link to="/contact">Contact</Link>{'  |  '}
        <Link to="/cartfood">My Cart</Link>{'  |  '}
      </nav>

      <div>
        <Route exact path="/" component={() => <Home temp={this.state.temp} city = {this.state.city}/>} />
        <Route path="/mnue" component={()=> <Mnue carts={this.state.carts} clearHanle={this.clearHanle} foodDB={this.state.foodDB} clearHanle={this.clearHanle} handleBtnClick={this.handleBtnClick} />} />
        <Route path="/contact" component={Contact} />
        <Route path="/cartfood" component={()=> <CartFood foods={this.state.carts} />} />
      </div>
    </Router>
   )
 }
}





export default App;