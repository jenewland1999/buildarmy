import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import Link from "next/link";

type AppProps = {
  closeHandler: MouseEventHandler<HTMLElement>;
};

const NavMenu = ({ closeHandler }: AppProps) => (
  <div className="fixed inset-0 grid grid-cols-[auto,72px]">
    <div className="bg-secondary-dark">
      {/* // ! The image component is dumb and adds additional height to the image thus a wrapper div is needed */}
      <div className="h-[72px] w-[72px]">
        <Image src="/images/Logo__img@2x.png" alt="" height={72} width={72} />
      </div>
      <nav>
        <ul>
          <li className="p-5 transition hover:bg-secondary text-primary-lightest flex items-center justify-between">
            <span className="text-2xl">Products</span>
            <FontAwesomeIcon fixedWidth icon="chevron-down" />
          </li>
          <li className="p-5 transition hover:bg-secondary text-primary-lightest flex items-center justify-between">
            <span className="text-2xl">Ranges</span>
            <FontAwesomeIcon fixedWidth icon="chevron-down" />
          </li>
          <li className="p-5 transition hover:bg-secondary text-primary-lightest flex items-center justify-between">
            <span className="text-2xl">Support</span>
            <FontAwesomeIcon fixedWidth icon="chevron-down" />
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <button
        className="py-5 px-4 leading-none bg-secondary-dark text-primary-lightest"
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
      <div
        className="bg-black opacity-40 h-screen w-100 block" // TODO: Consider glass effect https://glassmorphism.com/
        onClick={closeHandler}
      ></div>
    </div>
  </div>
);

export default NavMenu;
