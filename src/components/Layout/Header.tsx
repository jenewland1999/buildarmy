import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

import Container from "@components/Layout/Container";
import classNames from "@utils/classNames";

import baLogo from "@images/buildarmy-logo.jpg";
import baLogoTransparent from "@images/Logo__img@2x.png";
import {
  callsToAction,
  discover,
  help,
  productCategories,
  recentPosts,
} from "src/data";
import { sortBy } from "lodash";

interface Props {}

const Header = (props: Props) => {
  return (
    <Popover
      as="header"
      className="sticky top-0 z-50 py-1.5 lg:py-3 bg-primary-lightest shadow-md"
    >
      {({ open }) => (
        <>
          <Container>
            <div className="flex lg:grid grid-cols-3 items-center -mx-4 lg:mx-0">
              <Link href="/">
                <a className="bg-primary-lightest inline-flex items-center justify-center rounded-md h-12 w-12 lg:h-12 lg:w-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                  <span className="sr-only">Buildarmy</span>
                  <Image src={baLogoTransparent} alt="" />
                </a>
              </Link>
              <div className="order-first flex items-center lg:hidden">
                <Popover.Button
                  className={classNames(
                    open ? "text-secondary-darkest" : "text-secondary-lightest",
                    "group bg-primary-lightest m-2 inline-flex items-center rounded-md font-semibold hover:text-secondary-darkest hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  )}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="p-1 h-8 w-8" aria-hidden="true" />
                </Popover.Button>
              </div>

              <Popover.Group
                as="nav"
                className="hidden justify-self-center lg:flex lg:space-x-12"
              >
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-secondary-darkest"
                            : "text-secondary-lightest",
                          "group bg-primary-lightest inline-flex items-center my-3 rounded-md font-semibold hover:text-secondary-darkest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                        )}
                      >
                        <span>Shop</span>
                        <ChevronDownIcon
                          className={classNames(
                            open
                              ? "text-secondary-lightest"
                              : "text-primary-darkest",
                            "h-5 w-5 ml-2 group-hover:text-secondary-lightest"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={React.Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Overlay className="fixed inset-0 mt-6 top-12 bg-secondary bg-opacity-75 transition-opacity" />
                      </Transition>

                      <Transition
                        show={open}
                        as={React.Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute z-10 top-full mt-6 mx-3 left-1/2 -translate-x-1/2 w-screen max-w-screen-md">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid grid-cols-2 gap-8 bg-primary-lightest p-8">
                              {productCategories.map((item, idx) => (
                                <Link key={idx} href={item.href}>
                                  <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-accent-lightest hover:bg-opacity-30">
                                    <Image
                                      src={item.icon}
                                      alt=""
                                      height={24}
                                      width={24}
                                    />
                                    <div className="ml-4 flex-1">
                                      <p className="mb-1 font-semibold">
                                        {item.name}
                                      </p>
                                      <p className="text-sm text-secondary-lightest">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              ))}
                            </div>
                            <div className="px-8 py-5 bg-primary flex space-x-10">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <Link href={item.href}>
                                    <a className="-m-3 p-3 flex items-center rounded-md font-semibold hover:bg-primary-darkest hover:bg-opacity-30">
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-secondary-lightest"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3">{item.name}</span>
                                    </a>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-secondary-darkest"
                            : "text-secondary-lightest",
                          "group bg-primary-lightest inline-flex items-center my-3 rounded-md font-semibold hover:text-secondary-darkest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                        )}
                      >
                        <span>Discover</span>
                        <ChevronDownIcon
                          className={classNames(
                            open
                              ? "text-secondary-lightest"
                              : "text-primary-darkest",
                            "h-5 w-5 ml-2 group-hover:text-secondary-lightest"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={React.Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Overlay className="fixed inset-0 mt-6 top-12 bg-secondary bg-opacity-75 transition-opacity" />
                      </Transition>

                      <Transition
                        show={open}
                        as={React.Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute z-10 top-full mt-6 mx-3 left-1/2 -translate-x-1/2 w-screen max-w-md">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-8 bg-primary-lightest p-8">
                              {discover.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-accent-lightest hover:bg-opacity-30"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-accent"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="flex items-center font-bold">
                                      {item.href.includes("http") ? (
                                        <>
                                          <span>{item.name}</span>
                                          <ExternalLinkIcon className="text-secondary-lightest ml-2 h-5 w-5" />
                                        </>
                                      ) : (
                                        item.name
                                      )}
                                    </p>
                                    <p className="mt-1 text-sm text-secondary-lightest">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-primary rounded-b">
                              <div>
                                <h3 className="text-sm tracking-wide font-display font-medium text-secondary-lightest uppercase">
                                  Recent Posts
                                </h3>
                                <ul className="mt-4 space-y-4">
                                  {recentPosts.map((post) => (
                                    <li key={post.id} className="truncate">
                                      <a
                                        href={post.href}
                                        className="hover:underline"
                                      >
                                        {post.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-5 text-sm">
                                <a href="#" className="group">
                                  {" "}
                                  View all posts{" "}
                                  <span
                                    className="inline-block transition-transform group-hover:translate-x-2"
                                    aria-hidden="true"
                                  >
                                    &rarr;
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-secondary-darkest"
                            : "text-secondary-lightest",
                          "group bg-primary-lightest inline-flex items-center my-3 rounded-md font-semibold hover:text-secondary-darkest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                        )}
                      >
                        <span>Help</span>
                        <ChevronDownIcon
                          className={classNames(
                            open
                              ? "text-secondary-lightest"
                              : "text-primary-darkest",
                            "h-5 w-5 ml-2 group-hover:text-secondary-lightest"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={React.Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Overlay className="fixed inset-0 mt-6 top-12 bg-secondary bg-opacity-75 transition-opacity" />
                      </Transition>

                      <Transition
                        show={open}
                        as={React.Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute z-10 top-full mt-6 mx-3 left-1/2 -translate-x-1/2 w-screen max-w-md">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-8 bg-primary-lightest p-8">
                              {help.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-accent-lightest hover:bg-opacity-30"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-accent"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="flex items-center font-bold">
                                      {item.href.includes("http") ? (
                                        <>
                                          <span>{item.name}</span>
                                          <ExternalLinkIcon className="text-secondary-lightest ml-2 h-5 w-5" />
                                        </>
                                      ) : (
                                        item.name
                                      )}
                                    </p>
                                    <p className="mt-1 text-sm text-secondary-lightest">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <Popover.Group className="flex ml-auto items-center lg:justify-end lg:flex lg:space-x-12">
                <Popover className="relative flex items-center">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-secondary-darkest"
                            : "text-secondary-lightest",
                          "group bg-primary-lightest m-2 lg:m-0 inline-flex items-center rounded-md font-semibold hover:text-secondary-darkest hover:bg-primary lg:hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                        )}
                      >
                        <span className="sr-only">Site Search</span>
                        <SearchIcon
                          className="p-1 h-8 w-8"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </>
                  )}
                </Popover>

                <Popover className="relative flex items-center">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-secondary-darkest"
                            : "text-secondary-lightest",
                          "group bg-primary-lightest m-2 lg:m-0 inline-flex items-center rounded-md font-semibold hover:text-secondary-darkest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                        )}
                      >
                        <span className="sr-only">My Account</span>
                        <UserIcon className="p-1 h-8 w-8" aria-hidden="true" />
                      </Popover.Button>
                    </>
                  )}
                </Popover>

                <Popover className="relative flex items-center">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-secondary-darkest"
                            : "text-secondary-lightest",
                          "group bg-primary-lightest m-2 lg:m-0 inline-flex items-center rounded-md font-semibold hover:text-secondary-darkest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                        )}
                      >
                        <span className="sr-only">Shopping Cart</span>
                        <ShoppingCartIcon
                          className="p-1 h-8 w-8"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </div>
          </Container>

          <Transition
            as={React.Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 bg-secondary bg-opacity-75 transition-opacity lg:hidden" />
          </Transition>

          <Transition
            show={open}
            as={React.Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 h-screen p-2 transition transform origin-top-left lg:hidden"
            >
              <div className="h-full overflow-y-auto rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-primary-lightest divide-y-2 divide-gray-50 w-full max-w-md">
                <div className="py-4 px-5 flex items-center justify-between">
                  <div className="h-12 w-12">
                    <Image
                      className="rounded-md"
                      src={baLogo}
                      alt="Buildarmy"
                    />
                  </div>
                  <span className="text-lg font-semibold">Menu</span>
                  <div className="-mr-2">
                    <Popover.Button
                      className={classNames(
                        open
                          ? "text-secondary-darkest"
                          : "text-secondary-lightest",
                        "group bg-primary-lightest m-2 inline-flex items-center rounded-md font-semibold hover:text-secondary-darkest hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                      )}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="p-1 h-8 w-8" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6 px-5 ">
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {productCategories.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-start rounded-md hover:bg-accent-lightest hover:bg-opacity-30"
                        >
                          <Image
                            src={item.icon}
                            alt=""
                            height={32}
                            width={32}
                          />
                          <div className="ml-3 flex-1">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-secondary">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center justify-between rounded-md font-semibold hover:bg-accent-lightest hover:bg-opacity-30"
                        >
                          <span>{item.name}</span>
                          <item.icon
                            className="h-6 w-6 text-secondary-lightest"
                            aria-hidden="true"
                          />
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {sortBy([...discover, ...help], "name").map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-semibold hover:text-secondary"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Header;
