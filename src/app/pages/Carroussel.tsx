"use client"

import { useCallback, useEffect, useRef, useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import Image from 'next/image'; // Importation de Image de Next.js

import image1 from '../../../public/djPhoto/DFTZ.jpeg';
import image2 from '../../../public/djPhoto/Sash.jpeg';
import image3 from '../../../public/djPhoto/GregAven.png';
import image4 from '../../../public/djPhoto/LouisTheKidd.jpeg';
import image5 from '../../../public/djPhoto/Nelot.jpeg';
import image6 from '../../../public/djPhoto/FreakyBoy.jpeg';
import AnimatedBorder from './AnimatedBorder';

const items = [
  { title: 'Sash', description: '', image: image1 },
  { title: 'DFTZ', description: '', image: image2 },
  { title: 'FreakyBoy', description: '', image: image3 },
  { title: 'Nelot', description: '', image: image4 },
  { title: 'GregAven', description: '', image: image5 },
  { title: 'LouisTheKidd', description: '', image: image6 },
];

function CarrousselTest() {
  const [currentItem, setCurrentItem] = useState(0);
  const snapRef = useRef(null); // Utilisation correcte de useRef

  const handleItemChange = useCallback(() => {
    const sizeContainer = snapRef.current?.scrollWidth ?? 0;
    const sizeItem = sizeContainer / items.length;

    if (currentItem >= items.length - 1) {
      snapRef.current?.scrollBy({ left: -sizeContainer, behavior: 'smooth' });
      setCurrentItem(0);
    } else {
      snapRef.current?.scrollBy({ left: sizeItem, behavior: 'smooth' });
      setCurrentItem((prevItem) => prevItem + 1); // Assurer un changement correct
    }
  }, [currentItem]);

  useEffect(() => {
    const interval = setInterval(handleItemChange, 3000);
    return () => clearInterval(interval);
  }, [handleItemChange]);

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="cava">
        <h1 className="heading-1">Nos DJ</h1>
      </div>
      <div className="relative pb-8 w-1/2 drop-shadow-lg">
        {/* Indicateur des points */}
        <div className="absolute flex gap-2 backdrop-blur-sm bottom-10 z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full">
          {items.map((item, index) =>
            currentItem === index ? (
              <FaCircle key={item.title} size={10} color="#222222" height="fill" />
            ) : (
              <FaCircle key={item.title} size={10} color="#222222" height="regular" />
            )
          )}
        </div>

        {/* Conteneur du carrousel avec scrolling horizontal */}
        <div
          ref={snapRef}
          className="snap-x snap-mandatory flex relative rounded-2xl overflow-hidden"
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="snap-center flex justify-center min-w-full gap-2 bg-cover bg-center bg-no-repeat rounded-2xl p-3"
              style={{
                width: '100%',
                height: '400px',
                position: 'relative',
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="w-full backdrop-blur-sm bg-white/50 h-fit px-5 py-2 rounded-lg absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <p className="text-gray-900 text-lg font-bold">{item.title}</p>
                <p className="text-gray-900 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CarrousselTest;
