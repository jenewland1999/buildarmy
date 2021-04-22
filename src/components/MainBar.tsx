import { useState } from "react";
import { useCycle } from "framer-motion";
import { Popover, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import Link from "next/link";

import NavMenu from "./NavMenu";

const productCategories = [
  {
    name: "WW2 Aircraft",
    description:
      "Assemble your aircraft and take to the sky for reconnaissance and airstrike missions.",
    href: "/shop/products?category=ww2-aircraft",
    icon: "/images/categories/icons/ww2-aircraft.png",
  },
  {
    name: "WW2 Micro",
    description: "Get out your binoculars! It's time to build your micro army!",
    href: "/shop/products?category=ww2-micro",
    icon: "/images/categories/icons/ww2-micro.png",
  },
  {
    name: "WW2 Artillery",
    description:
      "Turn your enemies to dust with long-range munition-firing weaponry.",
    href: "/shop/products?category=ww2-artillery",
    icon: "/images/categories/icons/ww2-artillery.png",
  },
  {
    name: "WW2 Tanks",
    description:
      "The ultimate vehicular-weapons from WW2. Blast your enemies into oblivion.",
    href: "/shop/products?category=ww2-tanks",
    icon: "/images/categories/icons/ww2-tanks.png",
  },
  {
    name: "WW2 Buildings and Diorama",
    description:
      "Construct your very own scenic war zones with various buildings and diorama.",
    href: "/shop/products?category=ww2-buildings-and-diorama",
    icon: "/images/categories/icons/ww2-buildings-and-diorama.png",
  },
  {
    name: "WW2 Weapons and Accessories",
    description:
      "Lock and load! Prepare your soldiers for battle with weapons and accessories.",
    href: "/shop/products?category=ww2-weapons-and-accessories",
    icon: "/images/categories/icons/ww2-weapons-and-accessories.png",
  },
  {
    name: "WW2 Land Vehicles",
    description:
      "From trucks to bikes, land transportation vehicles from the second world war.",
    href: "/shop/products?category=ww2-land-vehicles",
    icon: "/images/categories/icons/ww2-land-vehicles.png",
  },
  {
    name: "Modern Weapons and Accessories",
    description:
      "It's time for an upgrade! 21st Century weapons and accessories.",
    href: "/shop/products?category=modern-weapons-and-accessories",
    icon: "/images/categories/icons/modern-weapons-and-accessories.png",
  },
];

const MainBar = () => {
  const [isNavOpen, toggleNav] = useCycle(false, true);
  const [searchFormUI, setSearchFormUI] = useState(false);

  return (
    <>
      <div className="bg-accent relative">
        <div className="xl:container xl:mx-auto xl:px-4 flex items-center justify-between">
          <button
            onClick={() => toggleNav()}
            className="py-5 px-4 text-secondary-darkest border-r border-accent-darkest leading-none lg:hidden"
          >
            <FontAwesomeIcon fixedWidth icon="bars" size="2x" />
          </button>

          <Link href="/">
            <a className="inline-flex">
              <Image
                src="/images/Logo__img@2x.png"
                alt=""
                width={72}
                height={72}
              />
            </a>
          </Link>

          <ul className="hidden mx-2 lg:flex">
            <li>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="focus:outline-none p-6 px-8 inline-flex items-center text-secondary-darkest text-2xl  font-semibold leading-none">
                      Products{" "}
                      <FontAwesomeIcon
                        icon="chevron-down"
                        className="ml-2 text-sm"
                      />
                    </Popover.Button>
                    <Popover.Overlay
                      className={`${
                        open
                          ? "opacity-30 fixed inset-0 top-[112px]"
                          : "opacity-0"
                      } bg-black`}
                    />

                    <Transition show={open}>
                      <Transition.Child
                        enter="transition ease-in-out duration-100 transform"
                        enterFrom="-translate-y-full"
                        enterTo="translate-y-0"
                        leave="transition ease-in-out duration-100 transform"
                        leaveFrom="translate-y-0"
                        leaveTo="-translate-y-full"
                        className="absolute left-2/4 text-accent"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="16"
                          viewBox="0 0 24 16"
                          className="transform -translate-x-2/4 fill-current"
                        >
                          <path
                            d="M12,0,24,16H0Z"
                            transform="translate(24 16) rotate(180)"
                          />
                        </svg>
                      </Transition.Child>
                      <Transition.Child
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 w-screen max-w-4xl bg-primary-lightest mt-4 rounded-lg"
                        >
                          <ul className="grid grid-cols-2 gap-4 p-8">
                            {productCategories &&
                              productCategories.map((category, index) => (
                                <li key={index}>
                                  <Link href="">
                                    <a className="grid grid-cols-[auto,1fr] gap-4 items-center p-4 rounded-lg transition-colors hover:bg-primary">
                                      <div>
                                        <Image
                                          src={category.icon}
                                          alt=""
                                          height="48"
                                          width="48"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="text-base text-secondary-darkest font-semibold mb-2">
                                          {category.name}
                                        </h4>
                                        <p className="text-sm text-secondary-lightest ">
                                          {category.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                          <footer className="bg-primary-light rounded-b-lg px-10 py-3">
                            <ul className="flex space-x-8">
                              <li>
                                <Link href="#">
                                  <a className="text-secondary-darkest  font-semibold p-1.5 px-2 rounded-md inline-flex items-center transition-colors hover:bg-accent">
                                    <FontAwesomeIcon icon="chevron-circle-right" />
                                    <span className="ml-4">View All</span>
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="text-secondary-darkest  font-semibold p-1.5 px-2 rounded-md inline-flex items-center transition-colors hover:bg-accent">
                                    <FontAwesomeIcon icon="dollar-sign" />
                                    <span className="ml-4">Sale</span>
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="text-secondary-darkest  font-semibold p-1.5 px-2 rounded-md inline-flex items-center transition-colors hover:bg-accent">
                                    <FontAwesomeIcon icon="book" />
                                    <span className="ml-4">Instructions</span>
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </footer>
                        </Popover.Panel>
                      </Transition.Child>
                    </Transition>
                  </>
                )}
              </Popover>
            </li>
            <li className="inline-flex items-center p-6 px-8 text-secondary-darkest text-2xl  font-semibold leading-none">
              Ranges{" "}
              <FontAwesomeIcon icon="chevron-down" className="ml-2 text-sm" />
            </li>
            <li className="inline-flex items-center p-6 px-8 text-secondary-darkest text-2xl  font-semibold leading-none">
              Support{" "}
              <FontAwesomeIcon icon="chevron-down" className="ml-2 text-sm" />
            </li>
          </ul>

          <button
            onClick={() => setSearchFormUI(!searchFormUI)}
            className="p-5 text-secondary-darkest border-l border-accent-darkest inline-flex lg:border-none lg:ml-auto"
          >
            <FontAwesomeIcon icon="search" size="2x" />
          </button>
          <button className="p-5 text-secondary-darkest hidden lg:inline-flex">
            <FontAwesomeIcon icon="user" size="2x" />
          </button>
          <button className="p-5 text-secondary-darkest hidden lg:inline-flex">
            <FontAwesomeIcon icon="shopping-cart" size="2x" />
          </button>
        </div>

        {searchFormUI && (
          <form className="absolute top-0 h-full w-full bg-accent">
            <div className="lg:container lg:mx-auto lg:px-4 flex h-full">
              <label className="relative flex items-center w-full lg:max-w-screen-2xl text-accent">
                <span className="sr-only">
                  Search for a product or category...
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  className="hidden lg:block transform -rotate-90 -left-1 absolute fill-current"
                >
                  <path
                    d="M12,0,24,16H0Z"
                    transform="translate(24 16) rotate(180)"
                  />
                </svg>
                <input
                  type="text"
                  name=""
                  placeholder="Search for a product or category..."
                  className="block h-full w-full border-none text-secondary-darkest  text-3xl p-6 leading-none focus:ring-0 lg:text-base lg:p-4 lg:px-6 lg:h-auto"
                />
              </label>
              <button
                className="ml-auto py-5 px-4 leading-none text-secondary-dark bg-accent"
                onClick={() => setSearchFormUI(false)}
              >
                <FontAwesomeIcon fixedWidth icon="times" size="2x" />
              </button>
            </div>
          </form>
        )}
      </div>
      <NavMenu
        className="fixed inset-0 grid grid-cols-[auto,72px] grid-rows-[repeat(4,72px),auto] max-w-sm lg:hidden"
        isOpen={isNavOpen}
        closeHandler={(): void => toggleNav()}
      />
    </>
  );
};

export default MainBar;
