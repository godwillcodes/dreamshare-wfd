import React from 'react';

const HolidayActivityForm: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-montserrat font-bold tracking-tight text-gray-900">
            Create your holiday activity
          </h2>
          <h4 className="text-xl mt-16 font-roboto font-light tracking-tight text-[#666666]">
            Hi! What are your holiday interests?
          </h4>
          <div className="w-full max-w-md mx-auto my-6">
            <form className="flex  flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter your interests"
                className="p-2 font-montserrat  border border-gray-300 rounded-md flex-1"
              />
              <button
                type="submit"
                className="px-6 py-2 text-base font-montserrat  bg-[#B30002] font-bold text-white rounded-full hover:bg-[#d53f4a]"
              >
                Search Partners
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayActivityForm;
