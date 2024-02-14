import Image from "next/image";
import NetflixBanner from "@/public/assets/netflix-banner-img2.webp";
import NetflixTextLogo from "@/public/assets/Bg-Transparent Netflix Text Logo.png";
import {
  footerLinks,
  frequentlyaskedquestions,
  getstartedfeatures,
} from "@/utils/getstarted";
import FAQDropdown from "@/components/FAQDropdown";
import Link from "next/link";
import Footer from '@/components/Footer'


export default function GetStarted() {
  return (
    
    <div className="w-full h-full">
      {/* Section 1 */}
      <section className="px-3 relative w-full h-[500px] sm:h-[600px] md:h-screen ">
        <div className="absolute -z-10 w-full h-full left-0 top-0 right-0 bottom-0">
          <Image
            src={NetflixBanner}
            alt="Netflix-Banner"
            fill
            className="object-cover filter brightness-[30%]"
          />
        </div>
        <div className="max-w-6xl h-full mx-auto z-20 w-full flex flex-col ">
          <nav className="w-full flex -mt-4 items-center justify-between">
              <Link href = {'/'}>
            <div className="relative w-32 md:w-60 h-32">
              <Image
                src={NetflixTextLogo}
                alt="netflix-logo"
                fill
                className="object-contain filter brightness-[150%]"
              />
            </div>
              </Link>
            <Link href={"/login"}>
              {" "}
              <button className="text-gray-100 text-sm capitalize rounded-md font-semibold tracking-wide py-2 px-4 bg-[#E41B17]">
                Sign In
              </button>
            </Link>
          </nav>
          <main className="flex flex-col items-center justify-center h-full w-full">
            <div className="w-full text-center flex flex-col items-center justify-center space-y-5">
              <h2
                className="text-3xl lg:text-5xl font-black tracking-wider text-gray-100"
                style={{ fontFamily: "Arial Black" }}
              >
                Unlimited movies, TV shows, and more
              </h2>
              <h3 className="text-base md:text-2xl font-medium text-gray-200">
                Watch anywhere. Cancel anytime.
              </h3>
              <h4 className="text-base px-3 md:text-xl text-gray-200">
                Ready to watch? Enter your email to create
                or restart your membership.
              </h4>
            </div>
            <form className="w-full flex flex-col px-12 sm:flex-row items-center space-x-2 mt-4 max-w-[550px] mx-auto space-y-3 sm:space-y-0">
              <input
                type="email"
                className="flex-grow w-full rounded-md text-sm font-normal text-gray-100 px-3 py-4 placeholder:text-gray-200 placeholder:text-sm border border-neutral-500 bg-neutral-950 bg-opacity-60 focus:rounded-md focus:outline-neutral-100"
                placeholder="Email address"
              />
              <Link href = {'/login'} >
              <button className="max-w-fit flex-shrink-0 whitespace-nowrap text-gray-100 text-lg capitalize font-medium px-4 py-3 rounded-sm bg-[#E41B17]">
                Get Started
              </button>
              </Link>
            </form>
          </main>
        </div>
      </section>
      {/* Section 2 */}
      <section className="w-full bg-black">
        {getstartedfeatures.map((feature, indx) => (
          <div
            key={indx}
            className="border-y-4 py-3 border-neutral-800 w-full"
          >
            <div
              className={`max-w-6xl mx-auto py-10 grid ${
                !feature.img
                  ? "grid-cols-1"
                  : "grid-cols-1 md:grid-cols-2"
              } gap-5 place-content-center`}
            >
              <div className="flex flex-shrink-0 even: flex-col items-center justify-center space-y-4 px-10 w-full">
                <h2
                  className="text-3xl md:text-5xl/[50px] text-center md:text-left font-black tracking-wider text-gray-100"
                  style={{ fontFamily: "Arial Black" }}
                >
                  {feature.h2}
                </h2>
                <h3
                  className="text-lg text-center md:text-left md:ml-1 mt-2 md:text-2xl/[30px] font-normal text-gray-100"
                  style={{ fontFamily: "schrift" }}
                >
                  {feature.h3}
                </h3>
              </div>
              {feature.img && (
                <div className="relative w-full h-[350px] md:w-[500px] md:h-[500px]">
                  <Image
                    src={feature.img}
                    alt="Enjoy on Tv"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
      {/* Section 3 */}
      <section className="py-7 border-y-4 border-neutral-800  bg-black">
        <h2
          className="text-3xl text-center font-black tracking-wider text-gray-100"
          style={{ fontFamily: "Arial Black" }}
        >
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col justify-center space-y-2 max-w-6xl mx-auto px-6 mt-8 md:px-10">
          {frequentlyaskedquestions.map((each, indx) => (
            <FAQDropdown data={each} key={indx} />
          ))}
        </div>
        <div className="flex flex-col items-center p-7 mt-5">
          <h3 className="text-lg text-center font-medium text-gray-200">
            Ready to watch? Enter your email to create or
            restart your membership.
          </h3>
          <form className="w-full flex flex-col px-12 sm:flex-row items-center space-x-2 mt-4 max-w-[550px] mx-auto space-y-3 sm:space-y-0">
            <input
              type="email"
              className="flex-grow w-full rounded-md text-sm font-normal text-gray-100 px-3 py-4 placeholder:text-gray-200 placeholder:text-sm border border-neutral-500 bg-neutral-800 bg-opacity-60 focus:rounded-md focus:outline-neutral-100"
              placeholder="Email address"
            />
            <Link href = {'/login'}>
            <button className="max-w-fit flex-shrink-0 whitespace-nowrap text-gray-100 text-lg capitalize font-medium px-4 py-3 rounded-sm bg-[#E41B17]">
              Get Started
            </button>
            </Link>
          </form>
        </div>
      </section>
      {/* Section 4 */}
      <Footer />
    </div>
  );
}

