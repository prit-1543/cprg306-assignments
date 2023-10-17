import React from 'react';
import ItemList from './item-list';

const Page = () => (
  <main className="p-8 bg-gray-900 min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-3xl font-semibold mb-6">Shopping List</h1>
    <ItemList />
  </main>
);

export default Page;
