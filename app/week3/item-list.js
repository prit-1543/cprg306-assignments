import React from 'react';  // import the React library
import Item from './item';  // import the Item component

function ItemList() {
    const items = [
         item1 = {
            name: "milk, 4 L 🥛",
            quantity: 1,
            category: "dairy",
          },
           
         item2 = {
            name: "bread 🍞",
            quantity: 2,
            category: "bakery",
          },

         item3 = {
            name: "eggs, dozen 🥚",
            quantity: 2,
            category: "dairy",
          },
           
         item4 = {
            name: "bananas 🍌",
            quantity: 6,
            category: "produce",
          },
           
         item5 = {
            name: "broccoli 🥦",
            quantity: 3,
            category: "produce",
          },
           
            item6 = {
            name: "chicken breasts, 1 kg 🍗",
            quantity: 1,
            category: "meat",
          },
           
            item7 = {
            name: "pasta sauce 🍝",
            quantity: 3,
            category: "canned goods",
          },
           
            item8 = {
            name: "spaghetti, 454 g 🍝",
            quantity: 2,
            category: "dry goods",
          },
           
            item9 = {
            name: "toilet paper, 12 pack 🧻",
            quantity: 1,
            category: "household",
          },
           
            item10 = {
            name: "paper towels, 6 pack",
            quantity: 1,
            category: "household",
          },
           
            item11 = {
            name: "dish soap 🍽️",
            quantity: 1,
            category: "household",
          },
           
            item12 = {
            name: "hand soap 🧼",
            quantity: 4,
            category: "household",
          }
    ];
    

    return (
        <ul className="divide-y divide-gray-200">
            {items.map((item) => (
                <Item name={item.name} quantity={item.quantity} category={item.category} />
            ))}
        </ul>
    );
}

export default ItemList;