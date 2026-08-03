import Planner from "./Planner";


export default function Hero() {


  return (

    <section
      className="
      py-20
      px-6
      bg-white
      "
    >


      <div
        className="
        max-w-5xl
        mx-auto
        text-center
        "
      >



        <h1
          className="
          text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          text-black
          "
        >

          Making China Easy.

        </h1>




        <p
          className="
          mt-6
          text-xl
          text-gray-600
          max-w-3xl
          mx-auto
          leading-relaxed
          "
        >

          Your trusted partner for travel,
          business, medical and local services
          across China.

        </p>





        <div
          className="
          mt-10
          max-w-3xl
          mx-auto
          text-left
          "
        >

          <Planner />

        </div>




      </div>


    </section>

  );

}