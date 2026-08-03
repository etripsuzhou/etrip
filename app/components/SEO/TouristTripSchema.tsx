import Script from "next/script";


interface TouristTripProps {

  name: string;

  description: string;

  destination: string;

}



export default function TouristTripSchema({

  name,

  description,

  destination,

}: TouristTripProps) {



const schema = {


"@context":
"https://schema.org",


"@type":
"TouristTrip",



"name":
name,



"description":
description,



"touristType":
[
"Private Travelers",
"Business Travelers",
"International Visitors"
],



"itinerary": {


"@type":
"ItemList",


"name":
`${destination} Travel Experience`,


"itemListElement":

[

{

"@type":
"TouristAttraction",

"name":
destination

}

]


},



"provider":

{

"@type":
"TravelAgency",

"name":
"ETrip",


"description":
"Private China tours, business transportation and local travel support."

}


};



return (

<Script

id="tourist-trip-schema"

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:
JSON.stringify(schema)

}}

/>

);

}