import Image from 'next/image';

export default function About() {
  return (
    <div
      data-aos="fade-up"
      id="about-us"
      className="flex items-center justify-between gap-12 lg:gap-5 bg-white text-[#1C6657] px-[4.444444444vw] border-b-[2px] border-b-[#1C6657] py-20 flex-col lg:flex-row"
    >
      <div className="lg:w-[50%] shrink-0 flex flex-col gap-5 sm:gap-7 relative">
        <img
          src="/pngs/about.png"
          alt="about"
          className="w-[70%] lg:w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        />
        <h3 className="text-3xl sm:text-4xl font-bold text-center">
          About G.O.A FARM
        </h3>
        <p className="text-base sm:text-xl sm:leading-[40px]">
          At GOA FARM, we are passionate about providing the freshest, most
          sustainably farmed fish. Located in the heart of a thriving
          aquaculture community, our farm delivers superior quality fish
          produce. Our commitment to environmental responsibility and quality
          ensures that you get the best fish for your table, every time.At GOA
          FARM, we are passionate about providing the freshest, most sustainably
          farmed fish. Located in the heart of a thriving aquaculture community,
          our farm delivers superior quality fish produce. Our commitment to
          environmental responsibility and quality ensures that you get the best
          fish for your table, every time.At GOA FARM, we are passionate about
          providing the freshest, most sustainably farmed fish. Located in the
          heart of a thriving aquaculture community, our farm delivers superior
          quality fish produce.
        </p>
      </div>

      <div className="w-full lg:w-[45%] flex gap-5">
        <div
          className="imageWrapper"
          style={{
            aspectRatio: '1/1.31629393',
          }}
        >
          <Image src={'/pngs/fish.png'} alt="fish" fill className="image" />
        </div>
        <div
          className="imageWrapper"
          style={{
            aspectRatio: '1/1.31629393',
          }}
        >
          <Image
            src={'/pngs/substance.png'}
            alt="substance"
            fill
            className="image"
          />
        </div>
      </div>
    </div>
  );
}
