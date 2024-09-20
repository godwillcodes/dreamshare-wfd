import React from "react";
import Image from "next/image";

const HeaderContent: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      {/* Background image for mobile only */}
      <div className="absolute inset-0 -z-20 block md:hidden">
        <Image
          src="/images/header.webp"
          alt="People enjoying a beach vacation"
          fill
          objectFit="cover"
          priority
        />
      </div>

      {/* Video for tablet and larger screens */}
      <video
        className="absolute h-full w-full inset-0 -z-20 hidden md:block object-cover"
        poster="/images/header.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://videos.pexels.com/video-files/2169879/2169879-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
        <track
          src="/caption/caption.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        Your browser does not support the video tag.
      </video>

      {/* Tint overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

      {/* Main content section */}
      <div className="relative mx-auto max-w-md py-32 px-8 md:px-0 sm:py-32 lg:py-32 z-20">
        <div className="text-center">
          {/* //create a div only visible on mobile */}
          <div className="block my-3 md:hidden mx-auto text-center">
            <svg
              className="h-4 w-64 mb-12 mx-auto text-center"
              viewBox="0 0 150 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.66 0.999999H7.02C8.54 0.999999 9.88 1.29333 11.04 1.88C12.2133 2.45333 13.12 3.26667 13.76 4.32C14.4133 5.37333 14.74 6.6 14.74 8C14.74 9.4 14.4133 10.6267 13.76 11.68C13.12 12.7333 12.2133 13.5533 11.04 14.14C9.88 14.7133 8.54 15 7.02 15H0.66V0.999999ZM6.86 12.34C8.26 12.34 9.37333 11.9533 10.2 11.18C11.04 10.3933 11.46 9.33333 11.46 8C11.46 6.66667 11.04 5.61333 10.2 4.84C9.37333 4.05333 8.26 3.66 6.86 3.66H3.9V12.34H6.86ZM26.1034 15L23.4034 11.1H23.2434H20.4234V15H17.1834V0.999999H23.2434C24.4834 0.999999 25.5568 1.20667 26.4634 1.62C27.3834 2.03333 28.0901 2.62 28.5834 3.38C29.0768 4.14 29.3234 5.04 29.3234 6.08C29.3234 7.12 29.0701 8.02 28.5634 8.78C28.0701 9.52667 27.3634 10.1 26.4434 10.5L29.5834 15H26.1034ZM26.0434 6.08C26.0434 5.29333 25.7901 4.69333 25.2834 4.28C24.7768 3.85333 24.0368 3.64 23.0634 3.64H20.4234V8.52H23.0634C24.0368 8.52 24.7768 8.30667 25.2834 7.88C25.7901 7.45333 26.0434 6.85333 26.0434 6.08ZM42.7305 12.4V15H31.8905V0.999999H42.4705V3.6H35.1105V6.64H41.6105V9.16H35.1105V12.4H42.7305ZM54.5284 12H48.0284L46.7884 15H43.4684L49.7084 0.999999H52.9084L59.1684 15H55.7684L54.5284 12ZM53.5084 9.54L51.2884 4.18L49.0684 9.54H53.5084ZM73.3609 15L73.3409 6.6L69.2209 13.52H67.7609L63.6609 6.78V15H60.6209V0.999999H63.3009L68.5409 9.7L73.7009 0.999999H76.3609L76.4009 15H73.3609ZM84.3225 15.24C83.2158 15.24 82.1425 15.0933 81.1025 14.8C80.0758 14.4933 79.2492 14.1 78.6225 13.62L79.7225 11.18C80.3225 11.62 81.0358 11.9733 81.8625 12.24C82.6892 12.5067 83.5158 12.64 84.3425 12.64C85.2625 12.64 85.9425 12.5067 86.3825 12.24C86.8225 11.96 87.0425 11.5933 87.0425 11.14C87.0425 10.8067 86.9092 10.5333 86.6425 10.32C86.3892 10.0933 86.0558 9.91333 85.6425 9.78C85.2425 9.64667 84.6958 9.5 84.0025 9.34C82.9358 9.08667 82.0625 8.83333 81.3825 8.58C80.7025 8.32667 80.1158 7.92 79.6225 7.36C79.1425 6.8 78.9025 6.05333 78.9025 5.12C78.9025 4.30667 79.1225 3.57333 79.5625 2.92C80.0025 2.25333 80.6625 1.72667 81.5425 1.34C82.4358 0.953333 83.5225 0.76 84.8025 0.76C85.6958 0.76 86.5692 0.866666 87.4225 1.08C88.2758 1.29333 89.0225 1.6 89.6625 2L88.6625 4.46C87.3692 3.72667 86.0758 3.36 84.7825 3.36C83.8758 3.36 83.2025 3.50667 82.7625 3.8C82.3358 4.09333 82.1225 4.48 82.1225 4.96C82.1225 5.44 82.3692 5.8 82.8625 6.04C83.3692 6.26667 84.1358 6.49333 85.1625 6.72C86.2292 6.97333 87.1025 7.22667 87.7825 7.48C88.4625 7.73333 89.0425 8.13333 89.5225 8.68C90.0158 9.22667 90.2625 9.96667 90.2625 10.9C90.2625 11.7 90.0358 12.4333 89.5825 13.1C89.1425 13.7533 88.4758 14.2733 87.5825 14.66C86.6892 15.0467 85.6025 15.24 84.3225 15.24ZM105.316 0.999999V15H102.076V9.26H95.7164V15H92.4764V0.999999H95.7164V6.52H102.076V0.999999H105.316ZM117.849 12H111.349L110.109 15H106.789L113.029 0.999999H116.229L122.489 15H119.089L117.849 12ZM116.829 9.54L114.609 4.18L112.389 9.54H116.829ZM132.861 15L130.161 11.1H130.001H127.181V15H123.941V0.999999H130.001C131.241 0.999999 132.315 1.20667 133.221 1.62C134.141 2.03333 134.848 2.62 135.341 3.38C135.835 4.14 136.081 5.04 136.081 6.08C136.081 7.12 135.828 8.02 135.321 8.78C134.828 9.52667 134.121 10.1 133.201 10.5L136.341 15H132.861ZM132.801 6.08C132.801 5.29333 132.548 4.69333 132.041 4.28C131.535 3.85333 130.795 3.64 129.821 3.64H127.181V8.52H129.821C130.795 8.52 131.535 8.30667 132.041 7.88C132.548 7.45333 132.801 6.85333 132.801 6.08ZM149.488 12.4V15H138.648V0.999999H149.228V3.6H141.868V6.64H148.368V9.16H141.868V12.4H149.488Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl font-bold font-montserrat uppercase tracking-tight text-white sm:text-5xl">
            Share your Holiday Dream
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-xl font-light font-roboto leading-8 text-[#F7F3F2]">
            And find the perfect partner to fulfill it
          </p>

          {/* Call-to-action button */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="text-sm w-full md:w-auto font-montserrat font-bold leading-6 text-white bg-[#B30002] px-6 py-2 rounded-full
              transition-all duration-150 ease-in-out transform hover:text-white hover:bg-[#ff4e50]
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-md hover:shadow-lg"
              role="button"
              aria-label="Sign Up"
            >
              Find your holiday partner
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
