import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className="section-eyebrow">{props.preTitle}</div>
      )}

      {props.title && <h2 className="section-heading">{props.title}</h2>}

      {props.children && (
        <div className="section-description">{props.children}</div>
      )}
    </Container>
  );
};
