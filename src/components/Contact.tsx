import { data } from '../data/data';
import { useContext } from 'react';
import { LanguageContext } from '../App';
import { Link, useNavigate } from 'react-router-dom';

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const langData = data[language];
  const contactData = langData.contact;
  const navigate = useNavigate();

  function redirectToHome() {
    navigate('/');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{contactData?.title}</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{contactData?.recruiterSection?.heading}</h2>
        <p className="text-lg mb-2">{contactData?.recruiterSection?.description}</p>
        <ul className="list-disc list-inside ml-4">
          <li>{contactData?.recruiterSection?.emailLabel}: mmeupw@gmail.com</li>
          <li>{contactData?.recruiterSection?.phoneLabel}: +34 658669609</li>
        </ul>
        <p className="mt-4">{contactData?.recruiterSection?.closing}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{contactData?.servicesSection?.heading}</h2>
        <p className="text-lg mb-4">{contactData?.servicesSection?.description}</p>
        <div className="text-center">
          <Link to="/services" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {contactData?.servicesSection?.buttonLabel}
          </Link>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          onClick={redirectToHome}
        >
          {langData.backButtonLabel}
        </button>
      </div>
    </div>
  );
}