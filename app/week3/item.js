import React from 'react';

function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center bg-white p-4 rounded-lg my-2 shadow-md">
      <div>
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-gray-500">Category: {category}</p>
      </div>
      <p className="font-bold text-blue-500 text-xl">x{quantity}</p>
    </li>
  );
}

export default Item;