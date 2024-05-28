import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      {items.map((item, index) => (
        <div key={index} className="mb-4 border rounded-lg overflow-hidden">
          <div
            className="cursor-pointer p-4 bg-gray-200 hover:bg-gray-300"
            onClick={() => handleToggle(index)}
          >
            <h2 className="text-lg font-medium">{item.title}</h2>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-white">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
const App1 = () => {
  const items = [
    {
      title: 'Section 1',
      content: 'Content for section 1. This is some sample text to demonstrate the accordion functionality.',
    },
    {
      title: 'Section 2',
      content: 'Content for section 2. This is some sample text to demonstrate the accordion functionality.',
    },
    {
      title: 'Section 3',
      content: 'Content for section 3. This is some sample text to demonstrate the accordion functionality.',
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Accordion Example</h1>
      <Accordion items={items} />
    </div>
  );
};

export default App1;
