import React , { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import FoodList from './components/FoodList';
import CartFood from './components/CartFood';
export default function Mnue(props) {
  return (
    <Container>
 <Row>
   
   <Col xs = {8} ><FoodList foodDB={props.foodDB} handleBtnClick={props.handleBtnClick}/>
</Col>
  
 </Row>




<button onClick={props.clearHanle}>Clear</button>
 {props.carts.length>0 ? <CartFood foods={props.carts}/> : false}
</Container>
  )
}





