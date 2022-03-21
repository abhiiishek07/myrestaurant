import React from 'react';

const Card=(props)=>{

    return(
        <div className='card'>
            <div className='card__body'>
                <img className='card__image' src={props.img} />
                <h2 className='food__name'>{props.name}</h2>
                <h2 className='card__title'> Rs {props.price} </h2>

            </div>
            <button className='card__btn'><h2>Order Now</h2></button>
        </div>
    );
}

export default Card;