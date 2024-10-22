const contacts = [
  {
    icon: '/svgs/call.svg',
    title: 'Call Us',
    content: 'Mon-Sat from 8am - 6pm',
    contact: '08067706651 / 08110738274',
  },
  {
    icon: '/svgs/instagram.svg',
    title: 'Instagram',
    content: 'Follow us on Instagram',
    contact: '@goafarm',
    link: 'https://www.facebook.com/profile.php?id=100070145587994&mibextid=ZbWKwL',
  },
  {
    icon: '/svgs/facebook.svg',
    title: 'Facebook',
    content: 'You can reach us on Facebook',
    contact: 'G.O.A Farm',
    link: 'https://www.facebook.com/profile.php?id=100070145587994&mibextid=ZbWKwL',
  },
  {
    icon: '/svgs/youtube.svg',
    title: 'Youtube',
    content: 'Chech us out on Youtube',
    contact: 'G.O.A Fish Farm',
    link: 'https://youtube.com/@goafarm?si=eTXFqbqXhCju3P-S',
  },
];

export default function Contact() {
  return (
    <div
      data-aos="fade-up"
      id="contact-us"
      className="bg-white text-[#1C6657] pb-12 pt-16 px-[4.444444444vw] flex flex-col gap-12"
    >
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-3xl lg:text-4xl font-bold">Contact us</h3>
        <p className="text-base lg:text-xl font-semibold">
          Let Us Know How We Can Help.
        </p>
      </div>

      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(15.5em, 100%), 1fr))',
        }}
      >
        {contacts.map((contact) =>
          contact?.link ? (
            <a
              target="_blank"
              href={contact.link}
              className="border-[2px] border-[#D17738] rounded-[16px] flex flex-col gap-12 lg:gap-14 p-7"
              key={contact.title}
            >
              <div>
                <img
                  src={contact.icon}
                  alt="contact"
                  height={40}
                  className="hidden sm:block h-10"
                />
                <img
                  src={contact.icon}
                  alt="contact"
                  height={28}
                  className="sm:hidden h-9"
                />
              </div>

              <div className="grow flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[#1C6657] text-xl font-semibold">
                    {contact.title}
                  </h3>
                  <p>{contact.content}</p>
                </div>

                <p>{contact.contact}</p>
              </div>
            </a>
          ) : (
            <div
              className="border-[2px] border-[#D17738] rounded-[16px] flex flex-col gap-12 lg:gap-14 p-7"
              key={contact.title}
            >
              <div>
                <img
                  src={contact.icon}
                  alt="contact"
                  height={40}
                  className="hidden sm:block h-10"
                />
                <img
                  src={contact.icon}
                  alt="contact"
                  height={28}
                  className="sm:hidden h-9"
                />
              </div>

              <div className="grow flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[#1C6657] text-xl font-semibold">
                    {contact.title}
                  </h3>
                  <p>{contact.content}</p>
                </div>

                <p>{contact.contact}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
