import Image from 'next/image';

const services = [
  {
    title: 'Our Products',
    service: [
      'Smoked Fish',
      'Dried Fish',
      'Live Fish (For Your Farm)',
      'Live Fish (Point and Kill',
    ],
  },
  {
    title: 'Our Services',
    service: ['Fish Farm Consultation', 'Fish Farm Construction'],
  },
  {
    title: 'Contact Us',
    service: ['Call Us', 'Facebook', 'Instagram', 'Youtube'],
  },
];

export default function Footer() {
  return (
    <footer>
      <div
        data-aos="fade-up"
        className="self-end bg-white flex justify-between px-[4.444444444vw] py-10 border-t-[2px] border-t-[#1C6657] gap-6 lg:gap-[5vw] flex-wrap flex-col sm:flex-row"
      >
        <h3 className="text-[#1C6657] text-xl font-semibold">G.O.A Farm</h3>

        <div className="flex justify-between gap-6 lg:gap-[5vw] grow flex-wrap flex-col sm:flex-row">
          <div className="flex grow justify-between gap-[4.444444444vw] flex-col sm:flex-row">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col gap-2.5">
                <h3 className="text-[#1C6657] sm:text-base lg:text-xl font-semibold">
                  {service.title}
                </h3>

                <div className="flex flex-col gap-3">
                  {service.service.map((service) => (
                    <p className="text-sm text-[#1C6657]" key={service}>
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#1C6657] sm:text-base lg:text-xl font-semibold">
              Join our Newsletter
            </p>

            <div className="flex items-center bg-[#1C6657] rounded-[32px] p-0.5 overflow-hidden w-full max-w-[400px]">
              <input
                placeholder="Email Address"
                className="bg-inherit px-4 text-white placeholder:text-[#FFFFFFB2] text-sm border-none outline-none grow w-full max-w-full"
              />
              <button className="bg-[#D17738] py-1 px-5 text-black text-sm rounded-[32px] min-h-[36px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="flex items-center gap-2 bg-[#1C6657] py-3 px-[4.444444444vw]"
      >
        <Image
          src={'/svgs/copyright.svg'}
          alt="copyright"
          width={30}
          height={30}
        />
        <p className="text-sm text-white">2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
