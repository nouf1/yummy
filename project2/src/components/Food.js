import React from 'react'
import { Button } from 'react-bootstrap';

const Food = (props) => {
    return (
        <div>
            <img src={props.food.img} alt="image of the item"></img>
            <h3>{props.food.name}</h3>
            <p>{props.food.price}</p>
            
            <Button onClick={props.handleBtnClick} variant="outline-warning">Add item to the cart</Button>
           
        </div>
    )
}

export default Food
