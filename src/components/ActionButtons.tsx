import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import { LanguageContext } from "../App";

export default function ActionButtons() {

    const { language } = useContext(LanguageContext);
    const headerButtons = data[language].headerButtons;

  return (
    <>
      <div className="flex items-center gap-9">
        {headerButtons.map((btn, idx) => (
          <Link
            key={btn.label}
            id="header-button"
            to={btn.link}
          >
            {btn.label}
          </Link>
        ))}
      </div>
    </>
  )
}