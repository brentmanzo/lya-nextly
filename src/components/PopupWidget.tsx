"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { ContactForm } from "./ContactForm";

export function PopupWidget() {
  return (
    <div>
      <Disclosure as="div">
        {({ open }) => (
          <>
            <DisclosureButton className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary shadow-lg transition duration-300 ease focus:bg-brand-dark focus:outline-none hover:bg-brand-dark">
              <span className="sr-only">Open Contact form Widget</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute h-6 w-6 text-white"
                as="div"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </Transition>
            </DisclosureButton>

            <Transition
              className="fixed bottom-[100px] left-0 right-0 top-0 z-50 sm:left-auto sm:right-5 sm:top-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
              as="div"
            >
              <DisclosurePanel className="flex h-full min-h-[250px] w-full flex-col overflow-hidden rounded-md border border-gray-300 bg-white shadow-2xl dark:border-gray-800 sm:h-[600px] sm:max-h-[calc(100vh-120px)] sm:w-[350px]">
                <div className="flex h-32 flex-col items-center justify-center bg-brand-primary p-5">
                  <h3 className="text-lg text-white">How can we help?</h3>
                  <p className="text-white opacity-50">
                    We usually respond in a few hours
                  </p>
                </div>
                <div className="h-full flex-grow overflow-auto bg-gray-50 p-6">
                  <ContactForm />
                </div>
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
