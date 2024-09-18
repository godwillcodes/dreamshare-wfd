import React from 'react';
import Form from './Form';

const HolidayActivityForm: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-montserrat font-bold tracking-tight text-gray-900">
            Create your holiday activity
          </h2>
          <h3 className="text-xl mt-16 font-roboto font-light tracking-tight text-[#666666]">
            Hi! What are your holiday interests?
          </h3>
          <div className="w-full max-w-md mx-auto my-6">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayActivityForm;
