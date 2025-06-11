import { useState, createContext } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProfileSection from './components/ProfileSection'
import type { Language } from './data/data'

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {}
});

function App() {
  const [language, setLanguage] = useState<Language>('es');
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Header />
     {isHomePage && <ProfileSection /> }
      <Outlet />
      <Footer />
    </LanguageContext.Provider>
  )
}

export default App
