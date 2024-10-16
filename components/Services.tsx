import Image from 'next/image';

export default function Services() {
  return (
    <div
      id="services"
      className="bg-[#1C6657] text-white px-[4.444444444vw] flex flex-col gap-16 md:gap-20 pb-14 pt-16 md:pt-24"
    >
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold">
          Our Fish Farming Services
        </h3>
        <p className="text-base sm:text-xl font-semibold max-w-[650px] mx-auto">
          At GOA FARM, we provide expert services to help you succeed in the
          fish farming industry
        </p>
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex lg:items-center justify-between gap-8 md:gap-12 flex-col lg:flex-row">
          <div
            className="imageWrapper lg:w-[40%]"
            style={{
              aspectRatio: '1.298544276/1',
            }}
          >
            <Image
              src={'/pngs/consultation.png'}
              alt="consultation"
              fill
              className="image"
            />
          </div>

          <div className="sm:border-white sm:border-l-[2px] sm:border-b-[2px] sm:rounded-bl-[16px] sm:p-14 lg:w-[50%] shrink-0 flex flex-col gap-4 sm:gap-6">
            <h3 className="text-3xl sm:text-4xl font-bold">
              Fish Farm Consultation
            </h3>
            <p className="text-base sm:text-xl sm:leading-[40px]">
              Benefit from our industry expertise with tailored consultation
              services. Whether you're just starting or looking to improve your
              existing operations, our consultants offer strategic advice,
              operational insights, and best practices to enhance your farm’s
              efficiency and productivity.
            </p>
          </div>
        </div>

        <div className="flex lg:items-center justify-between gap-8 md:gap-12 flex-col-reverse lg:flex-row">
          <div className="sm:border-white sm:border-r-[2px] sm:border-b-[2px] sm:rounded-br-[16px] sm:p-14 lg:w-[50%] shrink-0 flex flex-col gap-4 sm:gap-6">
            <h3 className="text-3xl sm:text-4xl font-bold">
              Fish Farm Construction
            </h3>
            <p className="text-base sm:text-xl sm:leading-[40px]">
              Build your dream fish farm with our comprehensive construction
              services. From planning and design to execution, we manage every
              aspect of creating a state-of-the-art facility. Our experienced
              team ensures that your farm is equipped with the latest technology
              and meets all regulatory standards.
            </p>
          </div>

          <div
            className="imageWrapper w-[40%]"
            style={{
              aspectRatio: '1.298544276/1',
            }}
          >
            <Image
              src={'/pngs/construction.png'}
              alt="construction"
              fill
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
