import { HTMLAttributes, MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavMenuProps extends HTMLAttributes<HTMLElement> {
  closeHandler: MouseEventHandler<HTMLElement>;
  isOpen: boolean;
}

const variants = {
  open: {
    x: 0,
  },
  closed: { x: "-100vw" },
};

const NavMenu = ({ closeHandler, isOpen, ...props }: NavMenuProps) => (
  <motion.div
    animate={isOpen ? "open" : "closed"}
    transition={{
      bounce: 0,
    }}
    variants={variants}
    className={props.className}
  >
    {/* // ! The image component is dumb and adds additional height to the image thus a wrapper div is needed */}
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
    <Link href="">
      <a className="py-5 px-4 inline-block leading-none bg-accent text-secondary-darkest">
        <FontAwesomeIcon fixedWidth icon="shopping-cart" size="2x" />
      </a>
    </Link>
    <Link href="">
      <a className="py-5 px-4 inline-block leading-none bg-accent text-secondary-darkest">
        <FontAwesomeIcon fixedWidth icon="user" size="2x" />
      </a>
    </Link>
    <motion.div
      variants={{ closed: { opacity: 0 }, open: { opacity: 0.4 } }}
      className="bg-black transition-opacity row-start-4 row-span-full"
      onClick={closeHandler}
    ></motion.div>
  </motion.div>
);

export default NavMenu;
