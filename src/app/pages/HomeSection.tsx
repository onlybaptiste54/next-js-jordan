"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image'

import logoFondBlanc from '../../../public/assets/logoTransparent.png'
import AnimatedBorder from './AnimatedBorder';

const HomeSection = () => {
  


  return (
    <section
    id="home"
    className="flex w-full flex-col min-h-screen bg-black mt-16 items-center pt-20 "
    style={{
      backgroundImage: "url('/assets/1.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      transition: 'background-image 1s ease-in-out', // Transition fluide entre les images
    }}
  >      
      <div className="flex flex-col md:flex-col lg:flex-col items-center gap-8 px-6 text-center md:text-left">

        <div className="flex-1 px-4 md:px-8  m-4 " data-aos="zoom-in-up" data-aos-duration="2000">
          <h1 className="heading-1 text-gold-rose whitespace-nowrap text-border  " >Sublimez vos Evenements</h1>
          <div className="mt-6 flex gap-8 justify-center md:justify-center">
          
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-48 h-48 md:w-72 md:h-72  via-indigo-500 to-black flex items-center justify-center rounded-full shadow-lg"data-aos="zoom-in-left" data-aos-duration="2000">
            <Image
              src={logoFondBlanc}
              alt="NancyBynight Logo"
              className="w-80 h-full object-contain rounded-full"
            />
          </div>

        
        </div>
      </div>
     
    <div>

    </div>
    </section>
  );
};

export default HomeSection;