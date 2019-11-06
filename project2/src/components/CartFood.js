import React from 'react'

const CartFood = (props) =>{
let allitem;
if(props.foods.length == 0){
    allitem = <h1>Empty catr</h1>
}else{
  allitem =  props.foods.map((food,index)=>{
        return <h1 key={index} >{food.name}</h1>
    })

}
    
        return (
            <div>
                {allitem}
            </div>
        )
}

export default CartFood