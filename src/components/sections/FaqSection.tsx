import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FaqSection() {
  const data = [
    {
      question: "What is Lóvi?",
      answer: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...",
    },
    {
      question: "Is it safe & secure?",
      answer: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...",
    },
    {
      question: "Are you brand-affiliated?",
      answer: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...",
    },
    {
      question: "How are you science-backed  exactly?",
      answer: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...",
    },
  ];
  return (
    <section className="flex flex-col md:flex-row justify-between gap-8 md:gap-16">
      <div className="md:w-[40%] text-headerMobile font-bold md:font-normal md:text-header text-primary">
        <p>Frequently Asked Questions</p>
      </div>
      <div className="md:w-[60%]">
        <Accordion type="single" collapsible className="w-full">
          {data.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.question} </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;
