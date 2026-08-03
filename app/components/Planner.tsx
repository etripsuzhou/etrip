"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";


export default function Planner() {

  const [country,setCountry] = useState("");

  const [service,setService] =
  useState("");

  const [cities,setCities] =
  useState("");

  const [duration,setDuration] =
  useState("");

  const [travelers,setTravelers] =
  useState("");

  const [date,setDate] =
  useState("");

  const [plan,setPlan] =
  useState("");

  const [loading,setLoading] =
  useState(false);



  async function generatePlan(){

    setLoading(true);
    setPlan("");

    try{

      const response =
      await fetch(
        "/api/plan",
        {
          method:"POST",

          headers:{
            "Content-Type":"application/json",
          },

          body:JSON.stringify({

            country,
            service,
            cities,
            duration,
            travelers,
            date,

          }),

        }
      );


      const data =
      await response.json();


      setPlan(data.plan);


    }catch(error){

      setPlan(
        "Sorry, we could not create your travel plan. Please try again."
      );

    }


    setLoading(false);

  }





  function whatsappLink(){


    const message =

`
Hello ETrip Team,

I would like to request a customized China travel proposal.

I created this request through the ETrip AI Planner.

Travel details:

Country:
${country || "Not provided"}

Service:
${service || "Not provided"}

Cities:
${cities || "Not provided"}

Duration:
${duration || "Not provided"}

Travelers:
${travelers || "Not provided"}

Travel Date:
${date || "Not decided"}

Please help me customize this journey.
`;


    return (

      "https://wa.me/8618962727824?text="
      +
      encodeURIComponent(message)

    );

  }





return (

<div

className="
bg-white
border
border-gray-100
rounded-3xl
p-8
shadow-lg
"

>



<h2

className="
text-3xl
font-bold
text-center
text-gray-900
"

>

✨ AI China Planner

</h2>



<p

className="
mt-3
text-center
text-gray-700
"

>

Tell us your needs.
We create your China journey.

</p>




<div

className="
mt-8
space-y-5
"

>



<div>

<label

className="
block
text-sm
font-medium
text-gray-800
mb-2
"

>

Where are you from?

</label>


<input

value={country}

onChange={
e=>setCountry(e.target.value)
}

placeholder="Example: United States"

className="
w-full
p-4
rounded-xl
border
border-gray-200
bg-gray-50
text-gray-900
focus:outline-none
focus:ring-2
focus:ring-black
"

/>

</div>




<div>

<label

className="
block
text-sm
font-medium
text-gray-800
mb-2
"

>

What service do you need?

</label>


<select

value={service}

onChange={
e=>setService(e.target.value)
}

className="
w-full
p-4
rounded-xl
border
border-gray-200
bg-gray-50
text-gray-900
"

>


<option value="">
Select a service
</option>

<option>
Private China Tour
</option>

<option>
Business Travel Support
</option>

<option>
Airport Transfer
</option>

<option>
Medical Support
</option>

<option>
Study in China
</option>

<option>
Work in China
</option>

<option>
Other Local Services
</option>


</select>

</div>




<div>

<label

className="
block
text-sm
font-medium
text-gray-800
mb-2
"

>

Cities you want to visit

</label>


<input

value={cities}

onChange={
e=>setCities(e.target.value)
}

placeholder="Example: Beijing, Shanghai, Suzhou"

className="
w-full
p-4
rounded-xl
border
border-gray-200
bg-gray-50
text-gray-900
"

/>

</div>

      <div>

      <label

      className="
      block
      text-sm
      font-medium
      text-gray-800
      mb-2
      "

      >

      How long will you stay?

      </label>


      <select

      value={duration}

      onChange={
        e=>setDuration(e.target.value)
      }

      className="
      w-full
      p-4
      rounded-xl
      border
      border-gray-200
      bg-gray-50
      text-gray-900
      "

      >

      <option value="">
      Select duration
      </option>

      <option>
      3 Days
      </option>

      <option>
      5 Days
      </option>

      <option>
      7 Days
      </option>

      <option>
      10+ Days
      </option>


      </select>

      </div>




      <div>

      <label

      className="
      block
      text-sm
      font-medium
      text-gray-800
      mb-2
      "

      >

      Number of travelers

      </label>



      <select

      value={travelers}

      onChange={
        e=>setTravelers(e.target.value)
      }


      className="
      w-full
      p-4
      rounded-xl
      border
      border-gray-200
      bg-gray-50
      text-gray-900
      "

      >


      <option value="">
      Select travelers
      </option>


      <option>
      1 Person
      </option>


      <option>
      2 People
      </option>


      <option>
      3-5 People
      </option>


      <option>
      Family Group
      </option>


      </select>


      </div>





      <div>


      <label

      className="
      block
      text-sm
      font-medium
      text-gray-800
      mb-2
      "

      >

      Travel date (optional)

      </label>



      <input


      value={date}

      onChange={
        e=>setDate(e.target.value)
      }


      placeholder="Example: May 2026"


      className="
      w-full
      p-4
      rounded-xl
      border
      border-gray-200
      bg-gray-50
      text-gray-900
      "

      />


      </div>


      </div>






      <button

      onClick={generatePlan}


      className="
      mt-8
      w-full
      bg-black
      text-white
      py-4
      rounded-full
      font-medium
      hover:bg-gray-800
      transition
      "

      >

      {
        loading
        ?
        "Creating your China journey..."
        :
        "Generate My Plan"
      }


      </button>






      {
      plan &&


      <div

      className="
      mt-10
      rounded-3xl
      bg-white
      border
      border-gray-100
      p-8
      shadow-sm
      "

      >



      <div

      className="
      mb-8
      pb-6
      border-b
      border-gray-200
      "

      >

      <h3

      className="
      text-3xl
      font-bold
      text-gray-900
      "

      >

      Your China Journey

      </h3>


      <p

      className="
      mt-3
      text-gray-700
      "

      >

      Customized China experience prepared by ETrip

      </p>


      </div>






      <ReactMarkdown

      components={{


      h1:({children})=>(

      <h1

      className="
      text-3xl
      font-bold
      text-gray-900
      mb-6
      "

      >

      {children}

      </h1>

      ),



      h2:({children})=>(

      <h2

      className="
      text-xl
      font-bold
      text-gray-900
      mt-8
      mb-4
      "

      >

      {children}

      </h2>

      ),



      h3:({children})=>(

      <h3

      className="
      text-lg
      font-semibold
      text-gray-900
      mt-6
      mb-3
      "

      >

      {children}

      </h3>

      ),



      p:({children})=>(

      <p

      className="
      text-gray-800
      leading-8
      mb-4
      "

      >

      {children}

      </p>

      ),



      strong:({children})=>(

      <strong

      className="
      font-bold
      text-gray-900
      "

      >

      {children}

      </strong>

      ),



      li:({children})=>(

      <li

      className="
      ml-6
      list-disc
      text-gray-800
      leading-7
      mb-2
      "

      >

      {children}

      </li>

      ),



      ul:({children})=>(

      <ul

      className="
      my-4
      "

      >

      {children}

      </ul>

      ),



      hr:()=>(
      
      <hr

      className="
      my-8
      border-gray-200
      "

      />

      )



      }}

      >


      {plan}


      </ReactMarkdown>






      <a

      href={whatsappLink()}

      target="_blank"


      className="

      mt-8
      block
      text-center
      border
      border-black
      text-gray-900
      py-4
      rounded-full
      font-medium
      hover:bg-black
      hover:text-white
      transition

      "

      >

      Get Your Customized Quote

      </a>



      </div>


      }



</div>


);


}