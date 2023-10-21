import React from 'react';

const Item = ({ name, quantity, category }) => (
  <li className="p-4 bg-gray-700 border rounded-md shadow-md flex justify-between items-center">
  <div>
    <span className="font-medium text-lg">{name}</span> 
    <span className="text-sm ml-2 text-gray-300">({category})</span>
  </div>
  <span className="text-blue-300">{quantity}</span>
</li>
);

export default Item;