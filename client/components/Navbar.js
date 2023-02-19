import { Fragment, useContext } from "react";
import logo from "public/images/logo2.PNG";
import Image from "next/image";
import { Popover, Transition, Menu } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { AuthContext } from "@/store/auth";
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const resources = [
  {
    name: "Home",
    href: "/",
    icon: ChartBarIcon,
  },
  {
    name: "About",
    href: "/#about",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Events",
    href: "/events",
    icon: ShieldCheckIcon,
  },
  {
    name: "Features",
    href: "/#features",
    icon: Squares2X2Icon,
  },
  {
    name: "Howto",
    href: "/#howto",
    icon: ArrowPathIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { isAuthenticated,authState } = useContext(AuthContext);
  return (
    <Popover className="relative bg-white z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">EcoSnap</span>
              <Image className="h-10 w-auto sm:h-14" src={logo} alt="" />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link
              href="/"
              className="text-base font-medium text-gray-800 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-base font-medium text-gray-800 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/#features"
              className="text-base font-medium text-gray-800 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/events"
              className="text-base font-medium text-gray-800 hover:text-gray-900"
            >
              Events
            </Link>

            <Link
              href="/#howto"
              className="text-base font-medium text-gray-800 hover:text-gray-900"
            >
              How To
            </Link>
            {
              isAuthenticated() ? ( <Link
                href="/dashboard"
                className="text-base font-medium text-gray-800 hover:text-gray-900"
              >
                Dashboard
              </Link>): <span></span>
            }
          </Popover.Group>
          {!isAuthenticated() ? (
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link
                href="/auth/signin"
                className="whitespace-nowrap text-base font-medium text-gray-800 hover:text-gray-900"
              >
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-indigo-600 px-4 py-2 text-base  text-white shadow-sm hover:bg-indigo-700"
                style={{ backgroundColor: "#565add" }}
              >
                Sign up
              </Link>
            </div>
          ) : (
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="rounded-full bg-gray-200 p-1 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixxid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80  "
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          )}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image className="h-10 w-auto" src={logo} alt="Eco Snap" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                  {
                    isAuthenticated() ? (<Link
                      href='/dashboard'
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <ChartBarIcon
                        className="h-6 w-6 flex-shrink-0 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Dashboard
                      </span>
                    </Link>) : <></>
                  }
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <Link
                  href="/auth/signup"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing contributor?{" "}
                  <Link
                    href="/auth/signin"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
