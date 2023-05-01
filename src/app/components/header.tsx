import Link from "next/link";
import { Dropdown } from "./dropdown";

export function Header() {
  return (
    <header className="mx-auto flex w-[95%] max-w-[1140px] items-center py-16">
      <div className="flex w-[95%] justify-between">
        <Link href={"/"}>
          <h3 className="mt-[2px] items-center text-2xl font-bold">
            swar<span className="text-blue">o</span>n
          </h3>
        </Link>
        <span className="hidden items-center gap-2 sm:flex">
          <h3 className="ml-4 text-high_gray md:ml-24">Learning paths</h3>
          <Dropdown />
        </span>
        <Link
          className="ml-4 mr-auto flex items-center text-high_gray md:ml-24"
          href={"/team"}
        >
          <h3>Our team</h3>
        </Link>
        <Link
          className="ml-4 mr-auto flex items-center text-high_gray md:ml-[-200px]"
          href={"/about"}
        >
          <h3>About</h3>
        </Link>{" "}
        <Link href="/#email">
          <button className="rounded-full bg-blue px-8 py-2 font-semibold text-white duration-200 hover:bg-light_blue">
            Join
          </button>
        </Link>
      </div>
    </header>
  );
}
