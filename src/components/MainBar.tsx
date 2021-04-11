import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import Link from "next/link";

import NavMenu from "./NavMenu";

const MainBar = () => {
  const [navMenuUI, setNavMenuUI] = useState(false);
  const [searchFormUI, setSearchFormUI] = useState(false);

  return (
    <>
      <div className="bg-accent">
        <div className="xl:container xl:mx-auto xl:px-4 flex items-center justify-between">
          <button
            onClick={() => setNavMenuUI(!navMenuUI)}
            className="py-5 px-4 text-secondary-darkest border-r border-secondary-darkest leading-none"
          >
            <FontAwesomeIcon fixedWidth icon="bars" size="2x" />
          </button>

          <Link href="/">
            <a className="leading-none flex">
              <Image
                src="/images/Logo__img@2x.png"
                alt=""
                width={72}
                height={72}
              />
            </a>
          </Link>

          <button
            onClick={() => setSearchFormUI(!searchFormUI)}
            className="p-5 text-secondary-darkest border-l border-secondary-darkest leading-none"
          >
            <FontAwesomeIcon icon="search" size="2x" />
          </button>
        </div>
      </div>
      {navMenuUI && (
        // TODO: Add sliding animation
        <NavMenu
          closeHandler={(): void => {
            setNavMenuUI(false);
          }}
        />
      )}
    </>
  );
};

export default MainBar;
