'use client';
import React from 'react';

const Form: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    const interests = (e.currentTarget.elements.namedItem("interests") as HTMLInputElement).value;
    console.log(interests); // For demonstration; replace with your logic
  };

  return (
    <form className="flex flex-col md:flex-row gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="interests"
        placeholder="Enter your interests"
        className="p-2 font-montserrat border border-gray-300 rounded-md flex-1"
      />
      <button
        type="submit"
        className="px-6 py-2 text-base font-montserrat bg-[#B30002] font-bold text-white rounded-full hover:bg-[#d53f4a]"
      >
        Search Partners
      </button>
    </form>
  );
};

export default Form;
