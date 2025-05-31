import '../css/ProfileSection.css'
import { data, type LanguageData } from '../data/data'
import { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import { Link } from 'react-router-dom';

export default function ProfileSection() {
  const { language } = useContext(LanguageContext);
  const langData: LanguageData = data[language];

  return (
    <>
      <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    id="profile-image"
                  ></div>
                  <div className="flex flex-col items-center justify-center justify-center">
                    <p className="text-[#121417] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">{langData.name}</p>
                    <p className="text-[#677583] text-base font-normal leading-normal text-center">{langData.title}</p>
                    <p className="text-[#677583] text-base font-normal leading-normal text-center">{langData.location}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#121417] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              {langData.description}
            </p>
            <div className="flex justify-center">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                {langData.profileButtons.map((button, index) => (
                  <button
                    key={index}
                    className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-[#121417] text-sm font-bold leading-normal tracking-[0.015em] grow ${
                      index === 0 ? 'bg-[#d2e2f3]' : index === 1 ? 'bg-[#f1f2f4]' : 'bg-[#f87171] hover:bg-[#ef4444] transition-colors'
                    }`}
                  >
                    <Link className="truncate" to={button.link}>
                      {button.label}
                    </Link>
                  </button>
                ))}
              </div>
            </div>
          </div>
      </div>
    </>
  )
}