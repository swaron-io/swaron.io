"use client";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";

export function Dropdown() {
  return (
    <Menu as="div" className="mt-2">
      <Menu.Button>
        <ChevronDown />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="divide-gray-100 ring-black fixed mt-2 w-56 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              <button
                disabled={true}
                className={`group flex w-full cursor-not-allowed items-center rounded-md px-2 py-2 text-sm hover:bg-neutral_gray`}
              >
                Databases
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                disabled={true}
                className={`group flex w-full cursor-not-allowed items-center rounded-md px-2 py-2 text-sm hover:bg-neutral_gray`}
              >
                Web development
              </button>
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              <button
                disabled={true}
                className={`group flex w-full cursor-not-allowed items-center rounded-md px-2 py-2 text-sm hover:bg-neutral_gray`}
              >
                Computer science
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                disabled={true}
                className={`group flex w-full cursor-not-allowed items-center rounded-md px-2 py-2 text-sm hover:bg-neutral_gray`}
              >
                Algorithms
              </button>
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              <button
                disabled={true}
                className={`group flex w-full cursor-not-allowed items-center rounded-md px-2 py-2 text-sm hover:bg-neutral_gray`}
              >
                Programming languages
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
