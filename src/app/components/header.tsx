import Link from "next/link";
import { Dropdown } from "./dropdown";

export function Header() {
  return (
    <header className="flex items-center justify-start p-8 md:px-96 md:py-16">
      <Link href={"/"}>
        <h3 className="text-2xl font-bold">
          swar<span className="text-blue">o</span>n
        </h3>
      </Link>
      <span className="hidden items-center gap-2 sm:flex">
        <h3 className="ml-4 text-high_gray md:ml-24">Learning paths</h3>
        <Dropdown />
      </span>
      <Link className="ml-4 mr-auto text-high_gray md:ml-24" href={"/about"}>
        <h3>About</h3>
      </Link>{" "}
      {/* <Link className=" mr-auto text-high_gray md:ml-24" href={"/team"}>
        <h3>our team</h3>
      </Link> */}
      <Link href="/#email">
        <button className="rounded-full bg-blue px-8 py-2 font-semibold text-white duration-200 hover:bg-light_blue">
          Join
        </button>
      </Link>
    </header>
  );
}
