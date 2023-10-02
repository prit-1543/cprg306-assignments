function Item({ name, quantity, category}){
    return(
        <li className="tailwind-class">
            {name} 
            {quantity}
            {category}
        </li>
    );
}

export default Item;