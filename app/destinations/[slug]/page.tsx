import { destinations } from "@/data/destinations";
import { notFound } from "next/navigation";
import FaqSchema from "@/app/components/SEO/FaqSchema";
import TouristTripSchema from "@/app/components/SEO/TouristTripSchema";
import BreadcrumbSchema from "@/app/components/SEO/BreadcrumbSchema";


export function generateStaticParams() {
  return destinations.map((item) => ({
    slug: item.slug,
  }));
}



export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const destination = destinations.find(
    item => item.slug === slug
  );


  if (!destination) {
    return {};
  }


  return {

  title:
    `${destination.name} Private Tour | ETrip`,


  description:
    destination.description,


  openGraph: {

    title:
      `${destination.name} Private Tour | ETrip`,


    description:
      destination.description,


    images: [

      {
        url:
          "/images/og/suzhou-og.jpg",

        width:
          1200,

        height:
          630,

        alt:
          `${destination.name} Private Tour`,
      }

    ],

  },


  twitter: {

    card:
      "summary_large_image",


    title:
      `${destination.name} Private Tour | ETrip`,


    description:
      destination.description,


    images: [
      "/images/og/suzhou-og.jpg"
    ],

  },

};

}




export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug:string }>
}) {


  const { slug } = await params;


  const destination = destinations.find(
    item => item.slug === slug
  );


  if(!destination){
    notFound();
  }



return (
<main>

<FaqSchema faq={destination.faq}/>


<TouristTripSchema

name={`${destination.name} Private Tour`}

description={destination.description}

destination={destination.name}

/>


<BreadcrumbSchema

city={destination.name}

/>



{/* HERO */}

<section
className="
relative
min-h-[75vh]
flex
items-center
"
>


<img
src={destination.heroImage}
alt={destination.name}
className="
absolute
inset-0
w-full
h-full
object-cover
"
/>


<div
className="
absolute
inset-0
bg-black/35
"
/>



<div
className="
relative
max-w-7xl
mx-auto
px-6
text-white
"
>
<p
className="
text-sm
text-white/80
mb-6
"
>
Home / China / {destination.name}
</p>

<p
className="
uppercase
tracking-[0.3em]
text-sm
mb-5
"
>
Explore China
</p>



<h1
className="
text-5xl
md:text-6xl
font-semibold
max-w-4xl
"
>

{destination.name} Private Tour

</h1>



<p
className="
mt-6
text-xl
max-w-3xl
text-white/90
"
>

{destination.description}

</p>



<button
className="
mt-8
bg-white
text-black
px-9
py-4
rounded-full
font-medium
"
>
Plan Your Trip
</button>



</div>


</section>








{/* INTRO */}

<section
className="
py-24
max-w-5xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-semibold
text-gray-900
"
>
Discover {destination.name}
</h2>



<p
className="
mt-6
text-lg
text-gray-600
leading-relaxed
"
>

{destination.introduction}

</p>


</section>









{/* WHY VISIT */}

<section
className="
py-20
bg-gray-50
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-semibold
text-gray-900
"
>
Why Visit {destination.name}?
</h2>



<div
className="
grid
md:grid-cols-4
gap-6
mt-12
"
>


{
destination.highlights.map(item=>(


<div
key={item}
className="
bg-white
rounded-3xl
p-7
text-gray-900
shadow-sm
"
>

{item}

</div>


))
}


</div>


</div>


</section>









{/* EXPERIENCES */}

<section
className="
py-24
max-w-7xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-semibold
text-gray-900
"
>
Popular Experiences
</h2>



<div
className="
grid
md:grid-cols-2
gap-8
mt-12
"
>


{
destination.experiences.map(item=>(


<div
key={item.name}
className="
border
border-gray-100
rounded-3xl
p-8
text-gray-900
hover:shadow-lg
transition
"
>


<h3
className="
text-2xl
font-semibold
"
>

{item.name}

</h3>



<p
className="
mt-4
text-gray-600
"
>

{item.description}

</p>


</div>


))
}


</div>


</section>









{/* ETRIP SERVICES */}

<section
className="
py-24
bg-gray-50
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-semibold
text-gray-900
"
>

Travel With ETrip

</h2>



<p
className="
mt-5
text-gray-600
"
>

More than sightseeing. We provide complete China travel support.

</p>




<div
className="
grid
md:grid-cols-4
gap-6
mt-12
"
>


{
destination.services.map(item=>(


<div
key={item}
className="
bg-white
rounded-3xl
p-7
text-gray-900
"
>

{item}

</div>


))
}



</div>


</div>


</section>









{/* TIPS */}

<section
className="
py-20
max-w-5xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-semibold
text-gray-900
"
>
Travel Tips
</h2>


<p
className="
mt-6
text-lg
text-gray-600
"
>

{destination.travelTips}

</p>


</section>








{/* FAQ */}

<section
className="
py-24
bg-gray-50
"
>


<div
className="
max-w-5xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-semibold
text-gray-900
"
>
Frequently Asked Questions
</h2>




<div
className="
mt-10
space-y-6
"
>


{
destination.faq.map(item=>(


<div
key={item.question}
className="
bg-white
rounded-2xl
p-7
"
>


<h3
className="
text-xl
font-semibold
text-gray-900
"
>

{item.question}

</h3>



<p
className="
mt-3
text-gray-600
"
>

{item.answer}

</p>


</div>


))
}


</div>


</div>


</section>









{/* CTA */}

<section
className="
py-24
bg-black
text-center
text-white
"
>


<h2
className="
text-4xl
font-semibold
"
>
Ready to Explore China?
</h2>



<p
className="
mt-5
text-white/70
"
>
Let ETrip create your private China journey.
</p>



<button
className="
mt-8
bg-white
text-black
px-10
py-4
rounded-full
"
>
Contact ETrip
</button>


</section>





</main>

);


}