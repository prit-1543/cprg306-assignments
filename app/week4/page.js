// @client
import React, {useState} from 'react';

const NewItem = () => {
  // ... [rest of the component logic remains unchanged]

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-96">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* ... [rest of the form remains unchanged] */}

        <button type="submit" className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
      </form>
    </div>
  );
}

export default NewItem;
