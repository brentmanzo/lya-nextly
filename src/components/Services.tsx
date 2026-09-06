import React from "react";
import { Container } from "@/components/Container";

interface ServicesProps {
  title: string;
  items: string[];
}

export default function VerticalColumnList({
  title,
  items,
}: Readonly<ServicesProps>) {
  return (
    <Container>
      <div className="w-full mt-4 text-center">
        <h3 className="section-heading max-w-full">{title}</h3>
      </div>
      <div className="p-6">
        {/* Container: Breaks children into 2 columns on small screens and 3 on medium+ */}
        <ul className="columns-1 md:columns-3 md:gap-6">
          {items.map((item, index) => (
            <li
              key={index}
              className="break-inside-avoid p-3 text-center text-brand-dark dark:border-brand-primary/40 dark:bg-trueGray-800 dark:text-gray-200"
            >
              <p className="mt-1 text-gray-500 dark:text-gray-400"> {item}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
