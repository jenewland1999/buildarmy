import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FlagIcon, MoonIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import baLogo from "@images/buildarmy-logo.jpg";
import brickWarlord from "@images/brick-warlord-logo.png";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer>
      <section className="bg-secondary">
        <div className="max-w-screen-xl mx-auto px-4 py-8 md:grid md:grid-cols-[1fr,auto,1fr] md:py-12 xl:py-16">
          <div className="xl:max-w-lg px-1.5 text-white">
            <h3 className=" mb-2 font-display font-bold">
              Subscribe to the Buildarmy Newsletter
            </h3>
            <p className="mb-4 xl:mb-8">
              Be the first to hear about brand new sets, promotions, and events
              taking place within the Buildarmy community.
            </p>
            <form className="text-secondary-darkest">
              <label className="flex flex-col space-y-2 sm:flex-row">
                <span className="sr-only">Email Address</span>
                <input
                  className="bg-primary-lightest flex-grow border-none rounded-md px-4 py-2.5 text-xl placeholder-primary-darkest sm:rounded-tr-none sm:rounded-br-none "
                  type="email"
                  placeholder="Your email address"
                />
                <button
                  className="bg-accent flex items-center justify-center border-none rounded-md px-4 py-2.5 text-xl text-center sm:rounded-tl-none sm:rounded-bl-none"
                  type="submit"
                >
                  <span className="sm:sr-only">Subscribe</span>
                  <PaperAirplaneIcon
                    className="hidden sm:block h-6 w-6 transform rotate-45"
                    aria-hidden="true"
                  />
                </button>
              </label>
            </form>
          </div>
          <span className="bg-secondary-light block h-px w-full my-4 md:h-full md:w-px md:mx-6 xl:mx-32"></span>
          <div className="xl:max-w-lg flex flex-col col-start-3 px-1.5 text-white">
            <h3 className="mb-2 font-display font-bold">Follow us</h3>
            <p className="mb-4 xl:mb-8">
              Be sure to follow us on our various social media channels for
              competitions and new product info.
            </p>
            <ul className="flex mt-auto space-x-4 text-secondary-darkest">
              <li>
                <a
                  className="bg-accent block px-2 py-3 rounded-md leading-none"
                  href="https://www.facebook.com/Buildarmybricks"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the Buildarmy Facebook Page..."
                >
                  <FontAwesomeIcon
                    className="text-2xl mx-px"
                    icon={faFacebookF}
                    fixedWidth
                  />
                </a>
              </li>
              <li>
                <a
                  className="bg-accent block px-2 py-3 rounded-md leading-none"
                  href="https://instagram.com/buildarmy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the Buildarmy Instagram feed..."
                >
                  <FontAwesomeIcon
                    className="text-2xl mx-px"
                    icon={faInstagram}
                    fixedWidth
                  />
                </a>
              </li>
              <li>
                <a
                  className="bg-accent block px-2 py-3 rounded-md leading-none"
                  href="https://twitter.com/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the Buildarmy Twitter profile..."
                >
                  <FontAwesomeIcon
                    className="text-2xl mx-px"
                    icon={faTwitter}
                    fixedWidth
                  />
                </a>
              </li>
              <li>
                <a
                  className="bg-accent block px-2 py-3 rounded-md leading-none"
                  href="https://youtube.com/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the Buildarmy YouTube channel..."
                >
                  <FontAwesomeIcon
                    className="text-2xl mx-px"
                    icon={faYoutube}
                    fixedWidth
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-accent py-8">
        <div className="max-w-screen-xl mx-auto px-4 md:grid md:grid-cols-2 md:items-center">
          <p className="max-w-prose mx-auto mb-6 text-xl text-center md:mx-0 md:mb-0 md:text-left">
            <strong>Want to check out our minifigures?</strong>
            <br />
            Visit the Brick Warlord store by clicking the logo.
          </p>
          <Link href="https://brickwarlord.com/">
            <a
              className="max-w-[10rem] block mx-auto"
              aria-label="Go to BrickWarlord website..."
            >
              <Image src={brickWarlord} alt="" placeholder="blur" />
            </a>
          </Link>
          {/* <Image src={brickWarlord} alt="" />
            <h4 className="">Minifigures have a new home!</h4>
            <p className="">
              Our minifigures now have their own dedicated store -{" "}
              <a href="#" className="">
                Brick Warlord
              </a>
              .
            </p>
            <Image src={minifigures} alt="" /> */}
        </div>
      </section>
      <section className="bg-primary-lightest">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="space-y-8 py-8 sm:grid sm:grid-cols-2 sm:gap-4 sm:gap-y-8 sm:space-y-0 md:grid-cols-3 md:gap-y-0 md:py-16">
            <ul className="space-y-4">
              <li className="font-display font-bold border-l-2 border-accent -ml-2 pl-2">
                About Us
              </li>
              <li>
                <Link href="#">History</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Gallery</Link>
              </li>
              <li>
                <Link href="#">Reward System</Link>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="font-display font-bold border-l-2 border-accent -ml-2 pl-2">
                Support
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Payment Methods</Link>
              </li>
              <li>
                <Link href="#">Shipping Information</Link>
              </li>
              <li>
                <Link href="#">Returns</Link>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="font-display font-bold border-l-2 border-accent -ml-2 pl-2">
                Account
              </li>
              <li>
                <Link href="#">Login</Link>
              </li>
              <li>
                <Link href="#">Register</Link>
              </li>
              <li>
                <Link href="#">Order History</Link>
              </li>
              <li>
                <Link href="#">Newsletter Subscription</Link>
              </li>
            </ul>
          </div>
          <div className="border-t border-primary-darkest pt-8 pb-12 lg:flex lg:items-center">
            <div className="flex space-x-2 mr-8 mb-8 lg:mb-0">
              <Image
                className="rounded-md"
                src={baLogo}
                alt=""
                height="72"
                width="72"
              />
              <div className="space-y-2">
                <button className="bg-accent-dark flex items-center rounded-md">
                  <FlagIcon className="block h-4 w-4 m-2" aria-hidden="true" />
                  <span className="bg-accent block rounded-md rounded-l-none py-1 pl-1.5 pr-3">
                    Change Region
                  </span>
                </button>
                <button className="bg-secondary-dark flex items-center rounded-md text-primary-lightest">
                  <MoonIcon className="block h-4 w-4 m-2" aria-hidden="true" />
                  <span className="bg-secondary block rounded-md rounded-l-none py-1 pl-1.5 pr-3 text-primary-lightest">
                    Change Theme
                  </span>
                </button>
              </div>
            </div>
            <div className="flex-1">
              <ul className="mb-6 text-sm md:mb-0">
                <li className="inline-block mr-8 mb-5">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="inline-block mr-8 mb-5">
                  <a href="#">Cookies</a>
                </li>
                <li className="inline-block mr-8 mb-5">
                  <a href="#">Terms of Use</a>
                </li>
                <li className="inline-block mr-8 mb-5">
                  <a href="#">Accessibility</a>
                </li>
                <li className="inline-block mr-8 mb-5">
                  <a href="#">Cookie Settings</a>
                </li>
              </ul>
              <p className="text-sm">
                © 2021 Buildarmy Ltd. All Rights Reserved. Buildarmy, the
                Buildarmy Logo, model designs and instructions are copyrights of
                Buildarmy Ltd. LEGO® is a trademark of the LEGO Group. The LEGO
                Group does not sponsor, authorise or endorse this website nor
                any of the customised/modified products or sets. Use of this
                site signifies your agreement to the Terms of Use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
