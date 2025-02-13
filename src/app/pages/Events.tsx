"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedBorder from './AnimatedBorder';

const EventSection = ({ title, subtitle, description, items, linkText, linkTo, imageSrc, reverse }) => {
  return (
    <div
      className={`flex flex-col px-8 md:flex-row lg:flex-row bg-gradient-to-b from-black via-gray-900 to-black ${
        reverse ? 'md:flex-row-reverse lg:flex-row-reverse' : ''
      }`}
    >
      <div className="flex-1 m-4 px-4">
        <h1 className="heading-1 mb-4">{title}</h1>
        <h2 className="heading-2">{subtitle}</h2>
        <p className="paragraph">{description}</p>
        <ul className="mt-4 text-center">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <li>
            <Link href={linkTo} className="text-gold-rose hover:underline">
              {linkText}
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-72 h-72 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg m-4">
          <Image
            src={imageSrc}
            alt="Événement en cours"
            layout="fill"
            objectFit="cover"
            className="rounded-full transform transition duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <section id="events" className="py-4 mt-10 p-4">
      <EventSection
        title="La solution pour les particuliers"
        subtitle="Sublimer vos événements"
        description="Des souvenirs inoubliables grâce à Nancy By Night. Vos événements sur mesure, planifiés avec soin pour répondre à vos attentes."
        items={["Anniversaire", "Fêtes privées", "Soirées professionnelles"]}
        linkText="Découvrez nos options de location"
        linkTo="/locations"
        imageSrc="/assets/image_1.jpeg" // Utilisation du chemin direct
        reverse={true}
      />
      <AnimatedBorder />

      <EventSection
        title="La solution pour les associations"
        subtitle="Le meilleur de vos événements associatifs"
        description="Des services adaptés à vos besoins associatifs, que ce soit pour des galas, des week-ends d'intégration, ou des événements étudiants."
        items={["Galas étudiants", "Week-ends d'intégration", "Soirées étudiantes"]}
        linkText="Découvrez nos services"
        linkTo="/services"
        imageSrc="/assets/image_1.jpeg"
        reverse={false}
      />
    </section>
  );
};

export default Events;
