import React from 'react';
import Image from 'next/image';

const Activity: React.FC<{ imageUrl: string; title: string; className?: string }> = ({
  imageUrl,
  title,
  className,
}) => (
  <div
    className={`relative mx-auto h-[310px] shadow-2xl overflow-hidden rounded-lg transition-transform transform hover:scale-95 ${className}`}
  >
    <div className="relative w-full h-full">
      <Image
        src={imageUrl}
        alt={title}
        fill // Use "fill" to ensure the image covers the container
        className="object-cover"
        placeholder="blur"
        blurDataURL={imageUrl} // Optionally use a low-quality placeholder
      />
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-70 flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-[#B30002]">
      <h3 className="text-white text-xl font-montserrat font-bold">{title}</h3>
    </div>
  </div>
);

const HolidayActivities: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl py-6 px-8 md:px-0">
      <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-8 text-center">
        Discover holiday activity ideas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Activity
          imageUrl="/jeremy-bishop-pikyGuAmwpM-unsplash.jpg"
          title="Beach Activities"
          className="h-full w-full"
        />
        <Activity
          imageUrl="/freestocks-_3Q3tsJ01nc-unsplash.jpg"
          title="Shopping Spree"
          className="h-full w-full"
        />
        <Activity
          imageUrl="/alex-munsell-auIbTAcSH6E-unsplash.jpg"
          title="Local Cuisine"
          className="h-full w-full"
        />
        <Activity
          imageUrl="/ski.jpg"
          title="Skiing"
          className="col-span-1 h-full w-full"
        />
        <Activity
          imageUrl="/peter-kasprzyk-5081CW5tuz0-unsplash.jpg"
          title="Sight Seeing"
          className="col-span-2 w-full h-full"
        />
        <Activity
          imageUrl="/sneha-cecil-8wH5ug37nbk-unsplash.jpg"
          title="Cultural Experience"
          className="col-span-2 w-full h-full"
        />
        <Activity
          imageUrl="/safari.jpg"
          title="Wildlife Safari"
          className="col-span-1 h-full w-full"
        />
      </div>
    </section>
  );
};

export default HolidayActivities;
