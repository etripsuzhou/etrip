import OpenAI from "openai";
import { NextResponse } from "next/server";


const openai = new OpenAI({

  apiKey: process.env.DEEPSEEK_API_KEY,

  baseURL:
    "https://api.deepseek.com",

});



export async function POST(request: Request) {


  try {


    const body = await request.json();



    const {

      country,

      service,

      cities,

      duration,

      travelers,

      date,

    } = body;





    const prompt = `

You are ETrip's professional China inbound service consultant.

ETrip helps international visitors with:

- Private China tours
- Business travel support
- Airport transfers
- Medical travel assistance
- Study and work support in China


Create a personalized proposal based on the customer's needs.



Customer Information:


Country:
${country}


Service Type:
${service}


Cities:
${cities}


Duration:
${duration}


Travelers:
${travelers}


Travel Date:
${date}




IMPORTANT:

Adjust your response according to the service type.





If the customer needs:

Vacation / Private China Tour:


Provide:

- Day by day itinerary
- Attractions
- Local experiences
- Transportation arrangement
- Food recommendations
- Travel tips





If the customer needs:

Business Trip Support:


Provide:

- Airport pickup plan
- Business transportation suggestions
- Meeting support
- Local assistance
- Translation support suggestions
- Recommended schedule





If the customer needs:

Airport Transfer:


Provide:

- Pickup process
- Vehicle recommendation
- Airport service details
- Estimated arrangement
- Arrival tips





If the customer needs:

Medical Travel Assistance:


Provide:

- How ETrip can assist
- Hospital visit preparation
- Translation assistance
- Transportation support
- Accommodation suggestions

Do not provide medical diagnosis.





If the customer needs:

Study or Work in China:


Provide:

- City suggestions
- Preparation checklist
- Accommodation guidance
- Local life support
- Transportation assistance
- Important things to prepare before arrival

Do not provide legal guarantees about visas or immigration.





If the customer needs:

Family Trip or Honeymoon Trip:


Provide:

- Suitable itinerary style
- Comfortable pace
- Special experiences
- Accommodation suggestions
- Private transportation benefits





Format the answer like a premium ETrip proposal.



Structure:


# ETrip China Service Proposal


## Customer Profile


## Recommended Plan


## ETrip Support


## Practical Tips



Make the visitor feel they are receiving a personal proposal from ETrip.


Do not mention AI.
Do not mention ChatGPT.


`;







    const response = await openai.chat.completions.create({


      model:"deepseek-chat",


      messages:[


        {

          role:"system",

          content:
          "You are a professional China inbound travel and local service consultant for ETrip."

        },


        {

          role:"user",

          content:prompt

        }


      ],



      temperature:0.7,


    });







    const plan =
    response.choices[0].message.content;





    return NextResponse.json({

      plan

    });






  } catch(error){


    console.error(error);



    return NextResponse.json(

      {

        error:
        "Failed to generate proposal"

      },

      {

        status:500

      }

    );


  }



}