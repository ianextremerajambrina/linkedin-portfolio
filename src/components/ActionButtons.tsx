import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import { LanguageContext } from "../App";

export default function ActionButtons() {
    const [isClicked, setIsClicked] = useState(false);
    const { language } = useContext(LanguageContext);
    const headerButtons = data[language].headerButtons;

    function handleClick(): void {
        setIsClicked((isClicked) => !isClicked); // Toggle the value of isClicked
    }

  return (
    <>
      <div className="flex items-center gap-9">
        {headerButtons.map((btn, idx) => (
          <Link
            key={btn.label}
            id="header-button"
            to={isClicked ? '/' : btn.link}
            onClick={() => handleClick()}
          >
            {btn.label}
          </Link>
        ))}
      </div>
    </>
  )
}