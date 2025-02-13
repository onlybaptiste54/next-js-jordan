"use client"
import Image from 'next/image';
import { useState } from 'react';

const locations = [
  { 
    title: "Appartement Paris", 
    description: "Un appartement chic au cœur de Paris, idéal pour des séjours romantiques.", 
    imageSrc: "/images/location1.jpg" 
  },
  { 
    title: "Villa Ibiza", 
    description: "Venez profiter de la tranquillité et des paysages magnifiques d'Ibiza.", 
    imageSrc: "/images/location2.jpg" 
  },
  { 
    title: "Chalet Montagne", 
    description: "Un chalet confortable et cosy pour vos vacances d'hiver.", 
    imageSrc: "/images/location3.jpg" 
  },
  { 
    title: "Penthouse New York", 
    description: "Un penthouse moderne avec une vue imprenable sur la ville de New York.", 
    imageSrc: "/images/location4.jpg" 
  }
];

const LocationCard = ({ title, description, imageSrc }) => (
  <div className="w-full max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative w-full h-56">
      <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
    </div>
    <div className="p-4">
      <h3 className="text-2xl font-semibold text-gold-rose mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      <button className="w-full py-2 bg-gold-rose text-white rounded-md hover:bg-silver transition duration-300">
        Réserver maintenant
      </button>
    </div>
  </div>
);

const LocationsPage = () => {
  return (
    <div className=" bg-bg-black text-white py-10 px-6">
      <h1 className="text-4xl text-center font-bold text-gold-rose mb-8">Nos Locations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((location, index) => (
          <LocationCard key={index} {...location} />
        ))}
      </div>
    </div>
  );
};

export default LocationsPage;
