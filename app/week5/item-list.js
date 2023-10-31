"use client";
import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  if (sortBy === 'name') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'category') {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  let groupedItems = {};

  if (sortBy === 'grouped') {
    groupedItems = items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  }

  return (
    <div className="bg-gray-800 p-6 text-white w-full min-h-screen">
      <h1 className="text-3xl mb-4">Shopping List</h1>
      <div className="flex mb-4 space-x-4">
        <button
          className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-blue-500' : 'bg-gray-700'}`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-blue-500' : 'bg-gray-700'}`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
        <button
          className={`px-4 py-2 rounded ${sortBy === 'grouped' ? 'bg-blue-500' : 'bg-gray-700'}`}
          onClick={() => setSortBy('grouped')}
        >
          Group by Category
        </button>
      </div>

      <ul className="divide-y divide-gray-600">
        {sortBy === 'grouped'
          ? Object.keys(groupedItems).sort().map(category => (
              <li key={category} className="py-4">
                <strong className="text-xl capitalize mb-2 block">{category}</strong>
                <ul>
                  {groupedItems[category].map(item => (
                    <Item key={item.id} {...item} />
                  ))}
                </ul>
              </li>
            ))
          : items.map(item => (
              <li key={item.id} className="py-4">
                <Item {...item} />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ItemList;
