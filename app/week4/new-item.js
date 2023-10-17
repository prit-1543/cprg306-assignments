"use client";

import { useState } from 'react';

const NewItem = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const item = {
            name,
            quantity,
            category,
        };
        console.log(item);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        
        // Reset state variables
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-700 p-4 rounded-lg shadow-md text-white">
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full px-3 py-2 border rounded-md text-black" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" min="1" max="99" value={quantity} onChange={e => setQuantity(Number(e.target.value))} required className="w-full px-3 py-2 border rounded-md text-black" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="category">Category:</label>
                <select id="category" value={category} onChange={e => setCategory(e.target.value)} className="w-full px-3 py-2 border rounded-md text-black">
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Submit</button>
            </div>
        </form>
    );
}

export default NewItem;
