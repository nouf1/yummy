import React from 'react'
import { Button, Container } from 'react-bootstrap';

const Food = (props) => {
    return (
        <>
            <img src={props.food.img} width= "800px" height="700px" alt="image of the item"></img>
            <div className="details">

            <h3>{props.food.name}</h3>
            <p>{props.food.price}</p>
            </div>
            <Button onClick={()=> props.handleBtnClick(props.food)} variant="outline-warning">Add item to the cart</Button>
            
            
        </>
    )
}

export default Food
