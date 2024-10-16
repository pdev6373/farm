const contacts = [
  {
    icon: '/pngs/smoked-fish.png',
    title: 'Smoked Fish',
    content: 'Have the Best of our Smoked Fish',
  },
  {
    icon: '/pngs/dried-fish.png',
    title: 'Dried Fish',
    content: 'Enjoy our Dried and well Preserved Fish',
  },
  {
    icon: '/pngs/live-fish.png',
    title: 'Live Fish for Your Farm',
    content: 'Juvenile, Fingerlings and Broodstock',
  },
  {
    icon: '/pngs/cat-fish.png',
    title: 'Live Table Size Fish',
    content: 'Point and Kill ',
  },
];

export default function Products() {
  return (
    <div
      id="products"
      className="bg-white text-[#1C6657] pb-12 pt-16 px-[4.444444444vw] flex flex-col gap-8 md:gap-12"
    >
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold">Our Fish Products</h3>
        <p className="text-base: sm:text-xl font-semibold max-w-[640px] mx-auto">
          Explore our wide range of fresh, delicious fish, all farmed with the
          highest standards of care.
        </p>
      </div>

      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(14em, 100%), 1fr))',
        }}
      >
        {contacts.map((contact) => (
          <div className="border-[2px] border-[#D17738] rounded-[16px] flex flex-col overflow-hidden">
            <img src={contact.icon} alt="contact" className="w-full" />

            <div className="flex flex-col gap-1 sm:gap-1.5 bg-[#1C6657] text-center text-white grow pb-4 pt-3">
              <h3 className="text-xl font-semibold">{contact.title}</h3>
              <p className="text-sm">{contact.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
