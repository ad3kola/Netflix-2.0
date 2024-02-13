import { footerLinks } from '@/utils/getstarted'
import Link from 'next/link'
import Image from 'next/image'
import NetflixTextLogo from '@/public/assets/Bg-Transparent Netflix Text Logo.png'

function Footer() {
	return (
		<footer className="w-full bg-neutral-950">
      <div className="relative max-w-6xl mx-auto w-full pt-6 pb-20 flex flex-col px-5">
      <div className="relative w-40 h-28">
          <Image
            src={NetflixTextLogo}
            alt="netflix-logo"
            fill
            className="object-contain filter brightness-[150%]"
          />
        </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {footerLinks.map((link, indx) => (
              <Link
                className="whitespace-nowrap text-gray-300 text-xs underline tracking-wider"
                key={indx}
                href={`/${link
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
              >
                {link}
              </Link>
            ))}
          </div>
          <p
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-300 text-center text-sm font-medium tracking-wider"
            style={{ fontFamily: "Bahnschrift" }}
          >
            &copy; Copyright 2022
          </p>
        </div>
      </footer>
	)
}


export default Footer