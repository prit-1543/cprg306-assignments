import React from 'react';
import ItemList from './item-list';

function Page() {
  return (
    <main className="bg-gray-100 p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Shopping List</h1>
      <ItemList />
    </main>
  );
}

export default Page;