import Image from 'next/image';

export default function About() {
  return (
    <div
      data-aos="fade-up"
      id="about-us"
      className="flex items-center justify-between gap-12 lg:gap-20 bg-white text-[#1C6657] px-[4.444444444vw] border-b-[2px] border-b-[#1C6657] py-20 flex-col"
    >
      <div className="shrink-0 flex flex-col gap-5 sm:gap-7 relative">
        <img
          src="/pngs/about.png"
          alt="about"
          className="w-[90%] max-w-[500px] lg:w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-70"
        />
        <h3 className="text-3xl sm:text-4xl font-bold text-center">
          About G.O.A FARM
        </h3>
        <p className="text-base sm:text-lg flex flex-col gap-6 relative z-20">
          <p>
            Welcome to G.O.A Farm – your trusted source for high-quality catfish
            products, specially designed to provide a healthy protein
            alternative to the university community. Our farm is dedicated to
            the processing, marketing, sales, and distribution of premium
            catfish products, including Fish Powder, Fish Fillets, and Smoked
            Fish.
          </p>
          <p>
            Since establishing our presence at Obafemi Awolowo University, we
            have proudly served over 12,000 students within just four years. Our
            mission is to expand our reach to 500,000 students across Nigeria’s
            federal universities, polytechnics, colleges of education, and state
            universities in the next five years. By targeting these
            institutions, we aim to address the critical issue of malnutrition
            among students by offering nutritious, competitively priced catfish
            products.
          </p>
          <p>
            Operating in a market valued at ₦2.6 billion, we have identified a
            ₦100 million Serviceable Available Market and a ₦35 million
            Serviceable Obtainable Market, with a profit margin of 30%. Our
            distribution network currently spans Osun and Lagos states, and our
            NAFDAC-certified products are available for export and partnership
            opportunities.
          </p>
          <p>
            At G.O.A Farm, we have created a dynamic distribution system that
            includes hostel-to-hostel delivery, sales agents, and local market
            outlets. Since 2021, our nutritious products, rich in Omega-3 fatty
            acids, Vitamin C, and selenium, have been well-received by students.
            Join us as we continue our journey to revolutionize the way students
            access healthy, affordable protein options across Nigeria’s higher
            education institutions.
          </p>
        </p>
      </div>

      <div className="w-full lg:w-[55%] flex gap-5">
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
