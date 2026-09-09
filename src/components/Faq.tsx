"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure as="div">
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 transition-all duration-300 ease-in-out rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-brand-primary/10 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180" : ""
                      } w-5 h-5 text-brand-primary transition-transform duration-300 ease-in-out`}
                    />
                  </DisclosureButton>
                  <Transition
                    show={open}
                    as="div"
                    enter="transition-all duration-150 ease-out"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all duration-150 ease-in"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-2"
                    className="overflow-hidden"
                  >
                    <DisclosurePanel
                      static
                      className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300"
                    >
                      {item.answer}
                    </DisclosurePanel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Do you provide installation services?",
    answer:
      "Yes. LYA Dynamics provides installation and replacement services for commercial and industrial applications.",
  },
  {
    question: "Can you recommend the right filter for our facility?",
    answer:
      "Yes. We can assess your requirements and recommend a suitable filtration solution based on your HVAC system, application, operating environment, and filtration requirements.",
  },
  {
    question: "Do you offer preventive maintenance for AC and paint booths?",
    answer:
      "Yes. We offer AC preventive maintenance and paint booth PMS to help maintain equipment performance, cleanliness, and reliability.",
  },
  {
    question: "How can we request a quotation?",
    answer:
      "Simply contact us through our phone, email, or inquiry form. Provide your requirements, and our team will assist you with the appropriate solution and quotation.",
  },
];
