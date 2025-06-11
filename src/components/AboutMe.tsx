import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../App";
import { data } from '../data/data';

export default function AboutMe() {
  const { language } = useContext(LanguageContext);
  const langData = data[language];
  const navigate = useNavigate();

  function redirectToHome() {
    navigate('/');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{language === 'es' ? 'Sobre mí' : 'About Me'}</h1>
      <p>{langData.contact.aboutMe.description}</p>

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