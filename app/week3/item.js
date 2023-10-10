import React from 'react';

function Item({ name, quantity, category}){
    return(
        <li className="tailwind-class">
            {name} 
            Quantity: {quantity}
            Category: {category}
        </li>
    );
}

export default Item;