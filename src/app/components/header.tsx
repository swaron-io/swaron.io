import Link from "next/link";
import { Dropdown } from "./dropdown";

export function Header() {
  return (
    <header className="flex items-center justify-start py-16">
      <h3 className="text-2xl font-bold">
        swar<span className="text-blue">o</span>n
      </h3>
      {/*Must be a dropdown */}
      <span className="flex items-center gap-2">
        <h3 className="ml-24 text-high_gray">Learning paths</h3>
        <Dropdown />
      </span>
      <Link className="ml-24 mr-auto text-high_gray" href={"/about"}>
        <h3>About</h3>
      </Link>
      <Link href="/">
        <button className="rounded-full bg-blue px-8 py-2 font-semibold text-white duration-200 hover:bg-light_blue">
          Login
        </button>
      </Link>
    </header>
  );
}
