import Script from "next/script";


interface FAQ {

 question:string;

 answer:string;

}


export default function FaqSchema({
 faq,
}:{
 faq:FAQ[]
}) {


const schema = {

 "@context":
 "https://schema.org",


 "@type":
 "FAQPage",


 mainEntity:
 faq.map(item=>({


 "@type":
 "Question",


 name:
 item.question,


 acceptedAnswer:
 {

 "@type":
 "Answer",


 text:
 item.answer

 }


 }))

};



return (

<Script
id="faq-schema"
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:
JSON.stringify(schema)
}}
/>

);


}