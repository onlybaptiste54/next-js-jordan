"use client"
import React, { useState } from 'react';

const Contact = () => {
  // State pour la gestion des champs du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Gestion de la mise à jour des valeurs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Votre message a été envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' }); // Réinitialise les champs
      } else {
        setStatusMessage('Une erreur est survenue, veuillez réessayer.');
      }
    } catch (error) {
      setStatusMessage('Une erreur est survenue, veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-gold-rose" data-aos="fade-up">
          Contactez-nous
        </h2>
        <p className="text-center text-gray-300 mb-12" data-aos="fade-up">
          Pour toute demande ou question, n'hésitez pas à nous écrire. Nous vous répondrons dans les plus brefs délais.
        </p>
        <form onSubmit={handleSubmit} data-aos="fade-up" className="max-w-3xl mx-auto bg-gray-900 border-4 border-gold-rose p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Votre nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Entrez votre nom"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-rose"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Votre email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Entrez votre email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-rose"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Écrivez votre message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-rose"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold-rose text-gray-900 font-semibold py-3 rounded-lg hover:bg-opacity-90 transition"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
        {statusMessage && (
          <div className="text-center mt-6">
            <p className="text-sm text-gray-300">{statusMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
