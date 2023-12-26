import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const policies=[
  {
    name:"Cancellation Policy",
    description:"Free cancellation till 23 Jun 2021, 12:00 PM. Cancellation of booking post this date will be charged 100% of the booking amount. In case of no show, no refund will be provided. Cancellation of Bookings done for black out dates,weekend,long-weekends,wedding dates,festivals,new year etc will be Non-Refundable & Non Adjustable X"
  },
  {
    name:"Check-in Policy",
    description:"Check-in time for this property is 12:00 PM. Early check-in is subject to availability and is not guaranteed. Check-in time for this property is 12:00 PM. Early check-in is subject to availability and is not guaranteed."
  },
  {
    name:"Check-out Policy",
    description:"Check-out time for this property is 11:00 AM. Late check-out is subject to availability and is not guaranteed. Check-out time for this property is 11:00 AM. Late check-out is subject to availability and is not guaranteed."
  },
  {
    name:"Child Policy",
    description:"Child below 5 years complimentary without extra bed and child above 5 years will be charged extra. Child below 5 years complimentary without extra bed and child above 5 years will be charged extra."
  },
  {
    name:"Pet Policy",
    description:"Pets are not allowed Pets are not allowed"
  },
  // {
  //   name:"House Rules",
  //   description:"Guests can check in using any local or outstation ID proof (PAN card not accepted). Guests can check in using any local or outstation ID proof (PAN card not accepted)."
  // },
  // {
  //   name:"Valid ID Proof",
  //   description:"This hotel doesn't allow check in using local IDs This hotel doesn't allow check in using local IDs"
  // },
  // {
  //   name:"Security Deposit",
  //   description:"A refundable deposit of ₹ 0 is to be paid at the time of check in per room per night. A refundable deposit of ₹ 0 is to be paid at the time of check in per room per night."
  // },
]
const PoliciesAccordium=()=> {
  return (
    <Accordion type="single" collapsible className="w-full">
      {
        policies.map((item, index) => {
          return (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.name}</AccordionTrigger>
              <AccordionContent>
                {item.description}
              </AccordionContent>
            </AccordionItem>
          )
        })
      }
      {/* <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  )
}
export default PoliciesAccordium