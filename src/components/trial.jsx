import React, { useState } from 'react';

const items = [
  { id: 1, title: 'Item 1', price: 10, content: 'This is the content of item 1' },
  { id: 2, title: 'Item 2', price: 20, content: 'This is the content of item 2' },
  { id: 3, title: 'Item 3', price: 30, content: 'This is the content of item 3' },
  { id: 4, title: 'Item 4', price: 40, content: 'This is the content of item 4' },
  { id: 5, title: 'Item 5', price: 50, content: 'This is the content of item 5' },
  { id: 6, title: 'Item 6', price: 60, content: 'This is the content of item 6' },
];

const PriceRangeFilter = () => {
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(50);
  const [filteredItems, setFilteredItems] = useState(items);

  const handleMinPriceChange = (e) => {
    const value = Number(e.target.value);
    setMinPrice(value);
    filterItems(value, maxPrice);
  };

  const handleMaxPriceChange = (e) => {
    const value = Number(e.target.value);
    setMaxPrice(value);
    filterItems(minPrice, value);
  };

  const filterItems = (min, max) => {
    setFilteredItems(
      items.filter(
        (item) => item.price >= min && item.price <= max
      )
    );
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex flex-col">
        <div className="mb-2">
          <label htmlFor="min-price" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Minimum Price: {minPrice}
          </label>
          <input
            id="min-price"
            type="range"
            value={minPrice}
            min={10}
            max={50}
            onChange={handleMinPriceChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="max-price" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Maximum Price: {maxPrice}
          </label>
          <input
            id="max-price"
            type="range"
            value={maxPrice}
            min={10}
            max={50}
            onChange={handleMaxPriceChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p>{item.content}</p>
            <p className="mt-2 text-green-500">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceRangeFilter;
