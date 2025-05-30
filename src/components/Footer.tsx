import '../css/Footer.css'
import SocialLinks from './SocialLinks';

export default function Footer() {

  const authorName = "Ian Extremera Jambrina";

  return (
      <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <SocialLinks />
              <p className="text-[#677583] text-base font-normal leading-normal">@2025 {authorName}</p>
            </footer>
          </div>
        </footer>
  )
}