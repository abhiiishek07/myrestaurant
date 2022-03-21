import React from 'react';

function TypeDP(props) {
    return (
        <div className='nav_breakfastBody'>
            <div className='nav_breakfast'>
                <img className='typeOfFood' src={props.image} />
            </div>
            <h2>{props.title}</h2>
        </div>
    );
}

export default TypeDP;