import '../css/Header.css'
import GlobeIcon from './icons/GlobeIcon';
import NameIcon from './icons/NameIcon';
import ActionButtons from './ActionButtons';
import { useContext } from 'react';
import { LanguageContext } from '../App';

export default function Header() {
    const { language, setLanguage } = useContext(LanguageContext);
    const authorName = "Ian Extremera Jambrina";

    function handleLanguageToggle() {
      setLanguage(language === 'es' ? 'en' : 'es');
    }

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f2f4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#121417]">
            <NameIcon />
            <h2 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em]">{authorName}</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <ActionButtons />
            <button id="change-language" onClick={handleLanguageToggle}>
              <GlobeIcon />
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              id="profile-picture"
            ></div>
          </div>
        </header>
    </>
  )
}