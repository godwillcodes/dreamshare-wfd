import React from 'react';
import Image from 'next/image';

const HeaderContent: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      {/* Background image */}
      <Image
        src="/headerbg.webp"
        alt="People enjoying a beach vacation"
        fill
        priority
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        
      />

      {/* Tint overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-70 -z-10"></div>

      {/* Main content section */}
      <div className="relative mx-auto max-w-md py-32 px-8 md:px-0 sm:py-32 lg:py-32 z-20">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-3xl font-bold font-montserrat uppercase tracking-tight text-white sm:text-5xl">
            Share your Holiday Dream
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg font-light font-roboto leading-8 text-[#F7F3F2]">
            And find the perfect partner
          </p>

          {/* Call-to-action button */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="text-sm font-montserrat font-bold leading-6 text-white bg-[#B30002] px-6 py-2 rounded-full
              transition-all duration-150 ease-in-out transform hover:text-white hover:bg-[#ff4e50]
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-md hover:shadow-lg"
              role="button"
              aria-label="Sign Up"
            >
              Find your perfect holiday partner
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
