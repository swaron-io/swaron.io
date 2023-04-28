import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <main className={`${inter.className} mx-auto w-[95%] max-w-[1140px]`}>
      {" "}
      <div className="flex flex-col lg:flex-row">
        <h1 className="pb-4 text-3xl font-bold">our team</h1>
      </div>
      <div className="flex w-full gap-4">
        <div>foto dos nerdssssssssssss</div>
        <div>description dos nerds</div>
      </div>
    </main>
  );
}
