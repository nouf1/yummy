import React, { Component } from 'react'
import Food from './Food'
import { Carousel } from 'react-bootstrap';

export default class FoodList extends Component {
    render() {
        const allFood = this.props.foodDB.map((food, index) => {
            return <Carousel.Item key={index}  ><Food handleBtnClick={(e)=>this.props.handleBtnClick(food)} food={food}  /></Carousel.Item>
        })
        return (
            <Carousel>
                {allFood}
            </Carousel>)
    }
}
