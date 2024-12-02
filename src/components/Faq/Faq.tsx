"use client";
import { Accordion, Container } from "@mantine/core";
import classes from "./FaqSimple.module.css";

const faqData = [
  {
    question: "How do I request a consultation with a lawyer?",
    answer:
      "To request a consultation, please visit our website, fill out the consultation request form, and provide details about your legal issue. Once submitted, we will connect you with a lawyer suited to your needs.",
  },
  {
    question: "What types of legal issues can I get help with?",
    answer:
      "Our network of lawyers can assist with a variety of legal issues, including family law, criminal law, business law, property disputes, and more. Let us know your specific needs, and we'll help find the right lawyer for you.",
  },
  {
    question: "How does the lawyer membership process work?",
    answer:
      "Lawyers join our platform through a vetting process to ensure expertise and reliability. Each lawyer creates a profile with their experience and specialties, allowing clients to find a suitable match for their legal needs.",
  },
  {
    question: "What is the typical response time for a consultation request?",
    answer:
      "Once your consultation request is submitted, our team or the lawyer will typically respond within 24-48 hours. Response times may vary depending on the complexity of the issue and lawyer availability.",
  },
  {
    question: "Are the consultations confidential and secure?",
    answer:
      "Yes, all consultations are confidential. We prioritize your privacy and ensure that all communications are secure, complying with legal standards for client confidentiality.",
  },
];

export default function FaqSection() {
  return (
    <section className="md:px-16 lg:px-24 max-w-[1440px  lg:mx-auto">
      {/* Heading Section */}

      <Container size={"sm"} className={`${classes.wrapper} !w-[100%] !px-0  `}>
        <Accordion variant="separated " className="">
          {faqData.map((faq, index) => (
            <Accordion.Item
              key={index}
              className={`${classes.item} !border-b-2 !border-b-[#f2f2f2] pb-4  `}
              value={faq.question}
            >
              <Accordion.Control className=" !text-[#1A3D16] !text-[18px] lg:!text-xl !font-bold ">
                {faq.question}
              </Accordion.Control>
              <Accordion.Panel>{faq.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
