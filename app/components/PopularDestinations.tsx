import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function PopularDestinations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">

          <p
            className="
            text-sm
            font-semibold
            tracking-[0.25em]
            uppercase
            text-blue-600
            mb-4
            "
          >
            Explore China
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-semibold
            tracking-tight
            text-gray-900
            "
          >
            Popular China Destinations
          </h2>

          <p
            className="
            mt-6
            text-lg
            leading-relaxed
            text-gray-600
            "
          >
            Discover China's most iconic cities with private tours,
            premium business transportation and personalized travel
            experiences designed by ETrip.
          </p>

        </div>



        {/* Cards */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >

          {destinations.map((destination) => (

            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="group"
            >

              <article
                className="
                overflow-hidden
                rounded-3xl
                border
                border-gray-100
                bg-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                "
              >

                {/* Image */}

                <div
                  className="
                  relative
                  h-72
                  overflow-hidden
                  "
                >

                  <img
                    src={destination.heroImage}
                    alt={`${destination.name} Private Tour`}
                    className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                    "
                  />



                  {/* Gradient */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                    "
                  />



                  {/* Badge */}

                  <div
                    className="
                    absolute
                    top-5
                    left-5
                    rounded-full
                    bg-white/90
                    backdrop-blur
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    tracking-wide
                    text-gray-900
                    "
                  >
                    Private Tour
                  </div>



                  {/* Arrow */}

                  <div
                    className="
                    absolute
                    bottom-5
                    right-5
                    w-11
                    h-11
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    text-lg
                    shadow-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    "
                  >
                    →
                  </div>

                </div>



                {/* Content */}

                <div className="p-7">

                  <h3
                    className="
                    text-2xl
                    font-semibold
                    text-gray-900
                    "
                  >
                    {destination.name}
                  </h3>


                  <p
                    className="
                    mt-2
                    text-sm
                    font-medium
                    text-blue-600
                    "
                  >
                    Private Tours • Business Travel
                  </p>


                  <p
                    className="
                    mt-1
                    text-sm
                    text-gray-400
                    "
                  >
                    {destination.region}
                  </p>



                  <p
                    className="
                    mt-5
                    text-gray-600
                    leading-relaxed
                    text-sm
                    min-h-[84px]
                    "
                  >
                    {destination.description}
                  </p>



                  <div
                    className="
                    mt-8
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-gray-300
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    group-hover:bg-black
                    group-hover:text-white
                    group-hover:border-black
                    "
                  >
                    View Details
                    <span className="ml-2">→</span>
                  </div>

                </div>

              </article>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}