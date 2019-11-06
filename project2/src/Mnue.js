import React , { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import FoodList from './components/FoodList';
import CartFood from './components/CartFood';
import { Button } from 'react-bootstrap';

export default function Mnue(props) {
  return (
    <Container className="mnue">
 <Row>
   
   <Col xs = {8} ><FoodList foodDB={props.foodDB} handleBtnClick={props.handleBtnClick}/>
</Col>
  
 </Row>




<Button onClick={props.clearHanle} variant="outline-warning">Clear</Button>

 {props.carts.length>0 ? <CartFood foods={props.carts}/> : false}
</Container>
  )
}





