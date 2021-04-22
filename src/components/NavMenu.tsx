import { HTMLAttributes, MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";

import Image from "next/image";
import Link from "next/link";

interface NavMenuProps extends HTMLAttributes<HTMLElement> {
  closeHandler: MouseEventHandler<HTMLElement>;
  isShowing: boolean;
}

const NavMenu = ({ closeHandler, isShowing }: NavMenuProps) => (
  <Transition show={isShowing}>
    <Transition.Child
      enter="transition-opacity ease-linear duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="bg-black bg-opacity-30 fixed inset-0"
      onClick={closeHandler}
    ></Transition.Child>

    <Transition.Child
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
      className="fixed z-10 inset-0 grid grid-cols-[auto,72px] grid-rows-[repeat(4,72px),auto] w-full max-w-md"
    >
      {/* <Image /> must be nested in <div> to apply styles */}
      <div className="bg-primary-lightest h-[72px]">
        <Image src="/images/Logo__img@2x.png" alt="" height={72} width={72} />
      </div>

      <nav className="bg-primary-lightest row-start-2 row-span-full">
        <ul>
          <li className="p-5 transition  text-secondary-darkest flex items-center justify-between">
            <span className="text-2xl">Products</span>
            <FontAwesomeIcon fixedWidth icon="chevron-down" />
          </li>
          <li className="p-5 transition text-secondary-darkest flex items-center justify-between">
            <span className="text-2xl">Ranges</span>
            <FontAwesomeIcon fixedWidth icon="chevron-down" />
          </li>
          <li className="p-5 transition  text-secondary-darkest flex items-center justify-between">
            <span className="text-2xl">Support</span>
            <FontAwesomeIcon fixedWidth icon="chevron-down" />
          </li>
        </ul>
      </nav>

      <button
        className="py-5 px-4 leading-none text-secondary-dark bg-primary-lightest"
        onClick={closeHandler}
      >
        <FontAwesomeIcon fixedWidth icon="times" size="2x" />
      </button>

      <Link href="/cart">
        <a className="py-5 px-4 inline-block leading-none bg-accent text-secondary-darkest">
          <FontAwesomeIcon
            fixedWidth
            icon="shopping-cart"
            size="2x"
            title="View shopping cart"
          />
        </a>
      </Link>

      <Link href="/account/dashboard">
        <a className="py-5 px-4 inline-block leading-none bg-accent text-secondary-darkest">
          <FontAwesomeIcon
            fixedWidth
            icon="user"
            size="2x"
            title="View account dashboard"
          />
        </a>
      </Link>
    </Transition.Child>
  </Transition>
);

export default NavMenu;
