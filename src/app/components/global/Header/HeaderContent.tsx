import React from "react";
// import Image from "next/image";

const HeaderContent: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      {/* Background image for mobile only */}
      <div className="absolute inset-0 -z-20 block md:hidden">
        <div className="bg-black w-full h-full">
          <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
              }}
            />
          </div>

          {/* New SVG Pattern for Mobile */}
          <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            />
          </svg>
        </div>
      </div>

      {/* Video for tablet and larger screens */}
      <video
        className="absolute inset-0 -z-20 hidden md:block object-cover"
        poster="/headerbg.webp"
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
          src="/caption.vtt"
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
              className="text-sm font-montserrat font-bold leading-6 text-white bg-[#B30002] px-6 py-2 rounded-full
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
