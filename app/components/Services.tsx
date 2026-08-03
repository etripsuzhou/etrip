const services = [
  {
    title: "China Private Tours",
    description:
      "Explore China with a private driver, local guide and personalized itinerary.",
    icon: "✈️",
  },
  {
    title: "Business Travel",
    description:
      "Professional transportation and local support for business visitors.",
    icon: "💼",
  },
  {
    title: "Airport Transfer",
    description:
      "Reliable airport pickup and drop-off service across China.",
    icon: "🚘",
  },
  {
    title: "Medical Support",
    description:
      "Local assistance for overseas visitors seeking medical services.",
    icon: "🏥",
  },
];


export default function Services() {
  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-6xl mx-auto">


        <h2 className="
          text-4xl
          font-bold
          text-gray-900
          mb-4
        ">
          Our Services
        </h2>


        <p className="
          text-center
          text-gray-500
          mb-12
        ">
          Everything you need for an easy journey in China.
        </p>



        <div className="
          grid
          md:grid-cols-4
          gap-6
        ">


          {services.map((item)=>(
            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-gray-200
                p-6
                bg-white
                hover:shadow-lg
                transition
              "
            >


              <div className="
                text-4xl
                mb-5
              ">
                {item.icon}
              </div>



              <h3 className="
                text-xl
                font-semibold
                text-gray-900
                mb-3
              ">
                {item.title}
              </h3>



              <p className="
                text-gray-500
                text-sm
                leading-6
              ">
                {item.description}
              </p>


            </div>
          ))}


        </div>


      </div>

    </section>
  );
}