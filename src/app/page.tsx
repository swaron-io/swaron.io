import { Inter } from "next/font/google";
import Image from "next/image";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

const image =
  "https://cdn.discordapp.com/attachments/1015005616663691425/1098315332164255784/undraw_mathematics_-4-otb_1.png";

export default function Home() {
  return (
    <main className={`${inter.className}  px-96`}>
      <Header />
      <section className="grid grid-cols-2 py-14">
        <div className="flex flex-col">
          <div>
            <h1 className="from-green-400 to-blue-500 text-gradient-to-r text-6xl/tight font-bold">
              Learn IT for free
            </h1>
            <h2 className="text-5xl font-bold ">with swaron</h2>
          </div>
          <span className="max-w-[30rem] py-8 pb-20 text-gray text-2xl">
            SwaronIO is a platform to learn for free. We believe that knowledge
            must be accessible to everyone.
          </span>
          <form className="max-w-[30rem] items-center">
            <div className="relative items-center">
              <input
                type="email"
                id="email"
                className="text-gray-900 w-full rounded-[20px] bg-white_ice p-4 pl-4 text-sm"
                placeholder="E-mail address"
                required
              />
              <button
                type="submit"
                className="absolute top-1 font-bold right-1 items-center rounded-[20px] bg-blue px-4 py-3 text-sm text-white duration-200 hover:bg-light_blue focus:outline-none focus:ring-4"
              >
                Join our waitlist
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-end pl-4 ">
          <Image
            alt="oi"
            width={400}
            height={400}
            src="https://cdn.discordapp.com/attachments/1015005616663691425/1098315332164255784/undraw_mathematics_-4-otb_1.png"
          />
        </div>
      </section>
    </main>
  );
}
