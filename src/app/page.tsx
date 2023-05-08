"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} mx-auto w-[95%] max-w-[1140px]`}>
      <ToastContainer />{" "}
      <div className="flex items-center justify-center pb-4 pt-14 md:flex-row md:justify-center">
        <h1 className="flex w-[60%] text-center text-5xl font-bold">
          Find out the best content to make your life easy
        </h1>
      </div>
      <p className="flex justify-center">
        We help you to find the fundamental knowledge to grow your career as a
        developer
      </p>
      <div className="flex justify-center rounded-lg pt-12">
        <input
          placeholder="What would you like to learn?"
          className="flex w-[450px] rounded-lg border-2 border-mid_gray p-3"
        />
        <button className="ml-8 w-36 rounded-lg border  bg-blue text-lg font-bold text-white hover:bg-light_blue">
          Search
        </button>
      </div>
      <div className="m-auto mt-16 w-[800px]">
        <h3 className="py-4 text-2xl font-bold">Featured</h3>
        <div className="m-auto flex justify-between">
          {/* Card */}
          <div className="mt-8 w-60 items-start rounded-md shadow-interaction bg-white cursor-pointer">
            <div className="m-auto flex h-40 w-40 justify-center py-3">
              <Image
                //Remove this src and add your own image
                src="https://cdn.discordapp.com/attachments/1100525079013634168/1104841483800039494/Rectangle_5.png"
                width={160}
                height={160}
                alt={"article image"}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Vector Databases</h3>
              <div className="mt-4 flex justify-between text-sm mb-6">
                <p className="text-sm">José Thomaz</p>
                <p>Apr 13</p>
              </div>
              <div className="text-[14px] flex justify-between text-lighter_blue">
                <a href="#" className="hover:text-blue">#databases</a>
                <a href="#" className="hover:text-blue">#vectors</a>
                <a href="#" className="hover:text-blue">#ai</a>
              </div>
            </div>
          </div>

          <div className="mt-8 w-60 items-start rounded-md shadow-interaction bg-white cursor-pointer">
            <div className="m-auto flex h-40 w-40 justify-center py-3">
              <Image
                //Remove this src and add your own image
                src="https://cdn.discordapp.com/attachments/1100525079013634168/1104841483531587665/Rectangle_6.png"
                width={160}
                height={160}
                alt={"article image"}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Introduction to Scala</h3>
              <div className="mt-4 flex justify-between text-sm mb-6">
                <p className="text-sm">Pedro Gonçalves</p>
                <p>Apr 14</p>
              </div>
              <div className="text-[14px] flex justify-between text-lighter_blue">
                <a href="#" className="hover:text-blue">#databases</a>
                <a href="#" className="hover:text-blue">#vectors</a>
                <a href="#" className="hover:text-blue">#ai</a>
              </div>
            </div>
          </div>

          <div className="mt-8 w-60 items-start rounded-md shadow-interaction bg-white cursor-pointer">
            <div className="m-auto flex h-40 w-40 justify-center py-3">
              <Image
                //Remove this src and add your own image
                src="https://cdn.discordapp.com/attachments/1100525079013634168/1104841649907052584/Rectangle_7.png"
                width={160}
                height={160}
                alt={"article image"}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">SolidJS in depth</h3>
              <div className="mt-4 flex justify-between text-sm mb-6">
                <p className="text-sm">Mauricio Vieira</p>
                <p>Apr 15</p>
              </div>
              <div className="text-[14px] flex justify-between text-lighter_blue">
                <a href="#" className="hover:text-blue">#databases</a>
                <a href="#" className="hover:text-blue">#vectors</a>
                <a href="#" className="hover:text-blue">#ai</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
