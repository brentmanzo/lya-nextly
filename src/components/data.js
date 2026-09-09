import {
  UserGroupIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  WrenchScrewdriverIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-1.jpg";
import benefitTwoImg from "../../public/img/benefit-2.jpg";

const benefitOne = {
  title: "Our approach is simple",
  desc: "Understand the client's requirements, recommend practical solutions, and provide reliable service that supports the long-term performance of their facilities.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand customers",
      desc: "Tailor practical HVAC and air filtration solutions",
      icon: <UserGroupIcon />,
    },
    {
      title: "Maintenance and service",
      desc: "Maintain clean, comfortable, safe, and  productive environments",
      icon: <WrenchScrewdriverIcon />,
    },
    {
      title: "Commitment and quality",
      desc: "Deliver quality products and long-term value to every client",
      icon: <HandThumbUpIcon />,
    },
  ],
};

const benefitTwo = {
  title:
    "From air filters and dust collector filters, to paintbooth maintenance and AC preventive maintenance",
  desc: "LYA Dynamics aims to be a dependable partner for businesses that value air quality, equipment performance, and operational reliability.",
  image: benefitTwoImg,
};

const airFilterServices = {
  title: "Air Filtration",
  items: [
    "HVAC Air Filters",
    "Panel Filters",
    "Pleated Filters",
    "Bag Filters",
    "HEPA Filters",
    "Dust Collector Filters",
    "Paintbooth Filters",
    "Custom Filter Requirements",
  ],
};

const hvacServices = {
  title: "HVAC Services",
  items: [
    "AC Preventive Maintenance",
    "AC Cleaning & Servicing",
    "Filter Replacement",
    "HVAC System Support",
    "Installation Services",
    "Paintbooth Preventive Maintenance",
    "Filtration System Assessment",
  ],
};

export { benefitOne, benefitTwo, airFilterServices, hvacServices };
