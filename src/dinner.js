import React from 'react';

function Dinner(props){
    return(
        <div>
            <h1>Today we are serving ABC food {props.dishName} </h1>
            <p> o'bhai sweet dish {props.sweetDish} </p>
        </div>
    )
}
export default Dinner;
