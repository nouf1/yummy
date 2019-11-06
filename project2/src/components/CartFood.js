import React from 'react'

const CartFood = (props) =>{
let allitem;
if(props.foods.length == 0){
    allitem = <h1>Empty Cart..</h1>
}else{
  allitem =  props.foods.map((food,index)=>{
        return <div key={index}>
        <img src={food.img} width= "800px" height="700px" alt="image of the item"></img>
        <div className="details">

        <h3>{food.name}</h3>
        <p>{food.price}</p>
        </div>
        </div>
    })

}
    
        return (
            <div className="cart">
                {allitem}
            </div>
        )
}

export default CartFood