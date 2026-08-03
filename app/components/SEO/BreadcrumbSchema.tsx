export default function BreadcrumbSchema({
  city,
}: {
  city: string;
}) {


const schema = {

"@context": "https://schema.org",

"@type": "BreadcrumbList",

"itemListElement": [

{
"@type": "ListItem",
"position": 1,
"name": "Home",
"item": "https://etrip.com"
},

{
"@type": "ListItem",
"position": 2,
"name": "China Destinations",
"item": "https://etrip.com/destinations"
},

{
"@type": "ListItem",
"position": 3,
"name": `${city} Private Tour`,
"item": `https://etrip.com/destinations/${city.toLowerCase()}`
}

]

};


return (

<script

id="breadcrumb-schema"

type="application/ld+json"

dangerouslySetInnerHTML={{

__html: JSON.stringify(schema)

}}

/>

);

}