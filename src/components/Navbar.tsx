"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
// import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { label: "Company", href: "#company" },
    { label: "Services", href: "#services" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-100 bg-brand-dark backdrop-blur-2xl dark:border-trueGray-800 dark:bg-trueGray-900/95">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:px-12">
        {/* Logo  */}
        <Link href="/" className="hidden lg:block">
          <span className="brand-link text-white">
            {/* <span>
              <Image
                src="/img/logo.svg"
                width="32"
                alt="N"
                height="32"
                className="w-8"
              />
            </span> */}
            <span>LYA Dynamics</span>
          </span>
        </Link>

        {/* get started  */}
        {/* <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <Link href="/" className="btn-primary md:ml-5">
              Get Started
            </Link>
          </div>
        </div> */}

        <Disclosure
          as="div"
          className="flex flex-col justify-between w-full lg:hidden"
        >
          {({ open }) => (
            <>
              <div className="flex justify-between w-full ">
                <Link href="/" className="block lg:hidden">
                  <span className="brand-link text-white">
                    <span>LYA Dynamics</span>
                  </span>
                </Link>
                <DisclosureButton
                  aria-label="Toggle Menu"
                  className="navbar-toggle px-2 py-1 text-gray-500 rounded-md lg:hidden focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </DisclosureButton>
              </div>

              <Transition
                show={open}
                as="div"
                enter="transition-all duration-300 ease-out"
                enterFrom="opacity-0 max-h-0"
                enterTo="opacity-100 max-h-96"
                leave="transition-all duration-150 ease-in"
                leaveFrom="opacity-100 max-h-96"
                leaveTo="opacity-0 max-h-0"
                className="overflow-hidden lg:hidden"
              >
                <DisclosurePanel
                  as="div"
                  className="flex flex-wrap w-full my-5"
                >
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="nav-link -ml-4 dark:focus:bg-gray-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </DisclosurePanel>
              </Transition>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="nav-link inline-block text-lg font-normal text-white no-underline dark:text-gray-200 dark:focus:bg-gray-800"
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
