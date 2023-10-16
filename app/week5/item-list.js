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
    <div>
      <button
        className={sortBy === 'name' ? 'bg-blue-500' : ''}
        onClick={() => setSortBy('name')}
      >
        Sort by Name
      </button>
      <button
        className={sortBy === 'category' ? 'bg-blue-500' : ''}
        onClick={() => setSortBy('category')}
      >
        Sort by Category
      </button>
      <button
        className={sortBy === 'grouped' ? 'bg-blue-500' : ''}
        onClick={() => setSortBy('grouped')}
      >
        Group by Category
      </button>

      <ul>
        {sortBy === 'grouped'
          ? Object.keys(groupedItems).sort().map(category => (
              <li key={category}>
                <strong className="capitalize">{category}</strong>
                <ul>
                  {groupedItems[category].map(item => (
                    <Item key={item.id} {...item} />
                  ))}
                </ul>
              </li>
            ))
          : items.map(item => (
              <Item key={item.id} {...item} />
            ))}
      </ul>
    </div>
  );
};

export default ItemList;
