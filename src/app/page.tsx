import { Inter } from "next/font/google";
import Image from "next/image";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} px-4 md:px-16 lg:px-40 2xl:px-72`}>
      <Header />
      <section className="flex justify-between py-14">
        <div className="flex justify-between flex-col">
          <div>
            <h1 
              className="bg-gradient-to-r from-blue to-#62CDFF hover:from-white_blue hover:to-blue text-6xl/tight font-bold bg-clip-text"
              style={{
                color: "transparent",
              }}
            >
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
        {/* <div className="md:flex hidden"> */}
          <div className=" pl-4 md:flex hidden">
            <Image
              alt="oi"
              width={400}
              height={400}
              src="https://cdn.discordapp.com/attachments/1015005616663691425/1098315332164255784/undraw_mathematics_-4-otb_1.png"
            />
          </div>
        {/* </div> */}
      </section>
    </main>
  );
}
