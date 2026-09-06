"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  botcheck?: boolean;
}

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className = "" }: Readonly<ContactFormProps>) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ContactFormData>({ mode: "onTouched" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const { submit: onSubmit } = useWeb3Forms<ContactFormData>({
    access_key: web3FormsAccessKey,
    settings: {
      from_name: "Lya Dynamics Contact Form",
      subject: `${userName} sent a message from Lya Dynamics Contact Form`,
    },
    onSuccess: (successMessage) => {
      setIsSuccess(true);
      setMessage(successMessage);
      reset();
    },
    onError: (errorMessage) => {
      setIsSuccess(false);
      setMessage(errorMessage);
    },
  });

  return (
    <div className={className}>
      {!isSubmitSuccessful && (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <input type="checkbox" className="hidden" {...register("botcheck")} />

          <div className="mb-4">
            <label htmlFor="full_name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              placeholder="Juan Dela Cruz"
              {...register("name", {
                required: "Full name is required",
                maxLength: 80,
              })}
              className={`form-input ${errors.name ? "form-input-error" : ""}`}
            />
            {errors.name && (
              <div className="form-error">{errors.name.message as string}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@company.com"
              {...register("email", {
                required: "Enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
              className={`form-input ${errors.email ? "form-input-error" : ""}`}
            />
            {errors.email && (
              <div className="form-error">{errors.email.message as string}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              rows={4}
              id="message"
              placeholder="Your Message"
              {...register("message", { required: "Enter your Message" })}
              className={`form-input h-28 ${errors.message ? "form-input-error" : ""}`}
              required
            />
            {errors.message && (
              <div className="form-error">
                {errors.message.message as string}
              </div>
            )}
          </div>

          <div className="mb-3">
            <button type="submit" className="btn-submit">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      )}

      {isSubmitSuccessful && (
        <div className="py-8 text-center">
          <h3
            className={`text-xl ${isSuccess ? "text-brand-primary" : "text-red-400"}`}
          >
            {isSuccess
              ? "Thanks for contacting us! We'll get back to you soon."
              : "Oops, Something went wrong!"}
          </h3>
          {/* FOR DEBUGGING */}
          {/* <p className="mt-4 text-gray-700">{message}</p> */}
          <button
            className="mt-6 text-brand-primary focus:outline-none"
            onClick={() => reset()}
          >
            Go back
          </button>
        </div>
      )}
    </div>
  );
}
