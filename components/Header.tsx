import Image from 'next/image';
import Link from 'next/link';
import { Lily_Script_One } from 'next/font/google';

const lily = Lily_Script_One({ subsets: ['latin'], weight: ['400'] });

export default function Header() {
  return (
    <div
      className="relative w-full text-white bg-no-repeat bg-cover bg-center flex flex-col gap-10 overflow-hidden"
      style={{ backgroundImage: 'url("/pngs/hero.png")' }}
    >
      <div className="absolute inset-0 z-20 bg-[#00000033] sm:bg-[#00000026]" />
      <header className="flex flex-col md:flex-row items-center justify-between gap-4 px-[4.444444444vw] py-7 relative z-20">
        <Image src={'/svgs/logo.svg'} alt="logo" width={174} height={50} />

        <div className="flex items-center gap-5 sm:gap-7 flex-wrap justify-center md:justify-start">
          <Link
            className="text-[#D17738] text-sm sm:text-base  font-medium"
            href={'#about-us'}
          >
            About Us
          </Link>
          <Link
            className="text-[#D17738] text-sm sm:text-base font-medium"
            href={'#products'}
          >
            Products
          </Link>
          <Link
            className="text-[#D17738] text-sm sm:text-base font-medium"
            href={'#services'}
          >
            Services
          </Link>
          <Link
            href={'#contact-us'}
            className="text-[#1C6657] text-sm sm:text-base bg-white px-2 sm:px-4 py-1 rounded-[32px] font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </header>

      <div className="px-[4.444444444vw] mt-auto py-12 sm:py-16 sm:pt-24 text-white flex flex-col gap-2 relative z-20">
        <h3 className={`${lily.className} text-4xl md:text-5xl lg:text-6xl`}>
          G.O.A FARM
        </h3>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Your Premier Destination for Fish Produce
          </h3>
          <p className="text-base sm:text-xl font-semibold max-w-[550px]">
            Discover the highest quality of fishes, farmed with care and
            innovation. Dive into our world of fish farming with our exceptional
            services.
          </p>
        </div>
      </div>
    </div>
  );
}
