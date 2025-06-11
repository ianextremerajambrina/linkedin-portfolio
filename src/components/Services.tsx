import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../App";
import { data } from '../data/data';

export default function Services() {
  const { language } = useContext(LanguageContext);
  const langData = data[language];
  const servicesData = langData.contact?.servicesSection;
  const navigate = useNavigate();

  function redirectToHome() {
    navigate('/');
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">{servicesData?.heading}</h1>
      <p className="text-lg mb-12 text-center max-w-3xl mx-auto text-gray-700">{servicesData?.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {servicesData?.services.map((service, index) => (
          <div 
            key={index} 
            className={`
              rounded-lg p-6 transform transition-all duration-300 hover:scale-105
              ${index === 0 ? 'bg-blue-50 hover:bg-blue-100 shadow-blue-200' : 
                index === 1 ? 'bg-purple-50 hover:bg-purple-100 shadow-purple-200' : 
                'bg-green-50 hover:bg-green-100 shadow-green-200'} 
              shadow-lg hover:shadow-xl
            `}
          >
            <h3 className={`text-xl font-semibold mb-4 
              ${index === 0 ? 'text-blue-800' : 
                index === 1 ? 'text-purple-800' : 
                'text-green-800'}
            `}>
              {service.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          onClick={redirectToHome}
        >
          {langData.backButtonLabel}
        </button>
      </div>
    </div>
  );
}