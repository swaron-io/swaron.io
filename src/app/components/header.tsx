import Link from "next/link";
import { Dropdown } from "./dropdown";

export function Header() {
  return (
    <header className="flex items-center justify-start py-16">
       <Link href={"/"}>
          <h3 className="text-2xl font-bold">
            swar<span className="text-blue">o</span>n
          </h3>
       </Link>
      {/*Must be a dropdown */}
      <span className="items-center gap-2 hidden sm:flex">
        <h3 className="md:ml-24 ml-4 text-high_gray">Learning paths</h3>
        <Dropdown />
      </span>
      <Link className="md:ml-24 ml-4 mr-auto text-high_gray" href={"/about"}>
        <h3>About</h3>
      </Link>
      <Link href="/">
        <button className="rounded-full bg-blue px-8 py-2 font-semibold text-white duration-200 hover:bg-light_blue">
          Join
        </button>
      </Link>
    </header>
  );
}
