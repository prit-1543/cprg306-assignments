"use client";
import React, { useState } from 'react';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import MealIdeas from './meal-ideas.js';
import itemsData from './items.json';

function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  
const handleItemSelect = (item) => {
    const cleanedName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\�[\�-\�]|\�[\�-\�]|[\u2011-\u26FF]|\�[\�-\�])/g, '');
    setSelectedItemName(cleanedName);
};


  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    
<main className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-8">
    <h1 className="text-3xl font-semibold mb-6">Shopping List</h1>
    <div className="flex">
        <div className="mr-4">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
    </div>
</main>

  );
}

export default Page;
