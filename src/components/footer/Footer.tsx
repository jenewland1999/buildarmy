import Container from "@components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "./Newsletter";
import SocialMedia from "./SocialMedia";

const Footer = () => (
  <footer>
    <section className="bg-secondary text-primary-lightest py-8">
      <Container className="md:grid md:grid-cols-[1fr,auto,1fr]">
        <Newsletter />
        <hr className="bg-secondary-lightest border-none w-full h-px mt-6 mb-4 md:h-full md:w-px md:my-0 md:mx-4" />
        <SocialMedia />
      </Container>
    </section>
    <section className="bg-accent text-secondary-darkest px-4 py-8 text-center flex flex-wrap gap-4 items-center justify-center">
      <div className="text-center flex flex-wrap gap-4 items-center justify-center max-w-xl mx-auto">
        <p className=" text-xl leading-6 max-w-sm mx-auto order-1 sm:order-none">
          Minifigures have a new home. Check out our new dedicated store,{" "}
          <a
            href="https://brickwarlord.com"
            target="_blank"
            className="underline"
          >
            Brick Warlord
          </a>
          .
        </p>
        <div>
          <Image
            src="/images/brick-warlord-logo.png"
            alt=""
            layout="fixed"
            height={88}
            width={152}
          />
        </div>
      </div>
    </section>
    <section className="py-8">
      <Container>
        <div className="grid gap-4 gap-y-2 grid-cols-[72px,auto] justify-start mb-8">
          <div className="h-[72px] w-[72px] flex row-span-2">
            <Image
              src="/images/buildarmy-logo.jpg"
              alt=""
              height={72}
              width={72}
            />
          </div>
          <button className="flex items-center leading-none  text-secondary-darkest text-sm select-none align-middle whitespace-nowrap focus:outline-none focus:ring-2  focus:ring-secondary-darkest">
            <span className="inline-flex bg-accent-dark border-2 border-accent-dark p-1.5 rounded-l-md">
              <FontAwesomeIcon icon="flag" />
            </span>
            <span className="inline-flex bg-accent border-2 border-accent p-1.5 rounded-r-md">
              Change Region
            </span>
          </button>
          <button className="flex items-center leading-none  text-primary-lightest text-sm select-none align-middle whitespace-nowrap focus:outline-none focus:ring-2  focus:ring-accent">
            <span className="inline-flex bg-secondary-dark border-2 border-secondary-dark p-1.5 rounded-l-md">
              <FontAwesomeIcon icon="adjust" />
            </span>
            <span className="inline-flex bg-secondary border-2 border-secondary p-1.5 rounded-r-md">
              Change Theme
            </span>
          </button>
        </div>
        <ul className="flex space-x-4 mb-4">
          <li>
            <Link href="/about-us/legal/cookies">
              <a className="text-secondary underline hover:no-underline">
                Cookies
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about-us/legal/privacy">
              <a className="text-secondary underline hover:no-underline">
                Privacy Policy
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about-us/legal/terms">
              <a className="text-secondary underline hover:no-underline">
                Terms
              </a>
            </Link>
          </li>
        </ul>
        <p className=" text-secondary-darkest text-sm">
          © 2019-{new Date().getFullYear()} Buildarmy, All Rights Reserved.
          Buildarmy, the Buildarmy Logo, model designs and instructions are
          copyrights of Buildarmy Ltd. LEGO® is a trademark of the LEGO Group.
          The LEGO Group does not sponsor, authorise or endorse this website nor
          any of the customised/modified products or sets. Use of this site
          signifies your agreement to the terms of use.
        </p>
      </Container>
    </section>
  </footer>
);

export default Footer;
