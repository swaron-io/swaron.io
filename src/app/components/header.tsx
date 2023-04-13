import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-start px-20 py-16">
      <h3 className="text-2xl font-bold">
        swar<span className="text-blue">o</span>n
      </h3>
      {/*Must be a dropdown */}
      <span className="border border-dashed border-red flex gap-2">
        <h3 className="ml-24 text-high_gray">Learning paths</h3>{" "}
        <button>
          <ChevronDown />
        </button>
      </span>
      <Link className="mr-auto ml-24 text-high_gray" href={""}>
        <h3>About</h3>
      </Link>
      <Link href="/">
        <button className="bg-blue hover:bg-light_blue text-white font-semibold py-2 px-8 rounded-full">
          Login
        </button>
      </Link>
    </header>
  );
}
