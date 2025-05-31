import { data } from '../data/data';
import { useContext } from 'react';
import { LanguageContext } from '../App';

export default function Services() {
  const { language } = useContext(LanguageContext);
  const langData = data[language];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{langData.contact.servicesSection.heading}</h1>
      <p className="text-lg mb-4 text-center">{langData.contact.servicesSection.description}</p>
      <div className="text-center">
        <a
          href="/contact"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {langData.contact.servicesSection.buttonLabel}
        </a>
      </div>
    </div>
  );
}