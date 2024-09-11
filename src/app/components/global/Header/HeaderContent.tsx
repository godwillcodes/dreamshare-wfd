import React from 'react';

const HeaderContent: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      {/* <!-- Background Image --> */}
     
        <video 
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          muted
          loop
          // playsInline
          preload="auto"
          // poster="/path-to-poster-image.jpg"
        >
          <source src="https://videos.pexels.com/video-files/2146395/2146395-hd_1280_720_25fps.mp4" type="video/mp4" />
        </video>
  

      {/* <!-- Tint Overlay --> */}
      <div className="absolute inset-0 bg-black opacity-70 -z-10"></div>
      {/* <!-- <div className="absolute inset-0 bg-red-900 opacity-20 -z-10"></div> --> */}


      {/* <!-- Main Content --> */}
      <div className="relative mx-auto max-w-md py-32 px-8 md:px-0 sm:py-32 lg:py-32 z-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">Share your Holiday
            Dream</h1>
          <p className="mt-6 text-lg font-light leading-8 text-[#F7F3F2]">And find the perfect partner</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#"
              className="text-base font-bold  text-white bg-[#ff4e50] px-6 py-3 rounded-full hover:bg-[#ff3b3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff4e50]"
              role="button" aria-label="Find your holiday partner">Find your holiday partner</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
