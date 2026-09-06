import React from "react";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export const Cta = () => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-brand-primary px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
      <div className="flex-grow text-center lg:text-left">
        <h2 className="text-2xl font-medium lg:text-3xl">
          Better air starts with the right solution
        </h2>
        <p className="mt-2 font-light text-white lg:text-xl">
          Connect with us today
        </p>
      </div>
      <div className="w-full rounded-md bg-white p-6 text-brand-dark lg:max-w-md">
        <ContactForm />
      </div>
    </div>
  );
};
