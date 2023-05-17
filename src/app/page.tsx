"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

const featuredCards = [
  {
    id: 1,
    title: "Vector Databases",
    author: "José Thomaz",
    date: "Apr 13",
    image: {
      url: "https://cdn.discordapp.com/attachments/1100525079013634168/1104841483800039494/Rectangle_5.png",
      alt: "Vector database",
    },
    tags: ["databases", "vectors", "ai"],
  },
  {
    id: 2,
    title: "Introduction to Scala",
    author: "Pedro Gonçalves",
    date: "Apr 13",
    image: {
      url: "https://cdn.discordapp.com/attachments/1100525079013634168/1104841483531587665/Rectangle_6.png",
      alt: "Article image",
    },
    tags: ["scala", "functional"],
  },
  {
    id: 3,
    title: "SolidJS in depth",
    author: "Maurício Vieira",
    date: "Apr 13",
    image: {
      url: "https://cdn.discordapp.com/attachments/1100525079013634168/1104841649907052584/Rectangle_7.png",
      alt: "Article image",
    },
    tags: ["solidjs", "typescript", "functional"],
  },
];

export default function Home() {
  return (
    <main className={`${inter.className} mx-auto w-[95%] max-w-[1140px]`}>
      <ToastContainer />{" "}
      <div className="flex items-center justify-center pb-8 md:flex-row md:justify-center">
        <h1 className="flex w-[100%] text-center text-5xl font-bold md:w-[60%]">
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
      <div className="m-auto mt-16 max-w-[800px]">
        <h3 className="py-4 text-2xl font-bold">Featured</h3>
        <div className="m-auto flex flex-col flex-wrap items-center justify-between sm:flex-row">
          {featuredCards.map((card) => (
            <div className="mt-8 w-72 cursor-pointer items-start rounded-md bg-white shadow-interaction transition duration-500 hover:shadow-2xl sm:w-60">
              <div className="m-auto flex h-40 w-40 justify-center py-3">
                <Image
                  src={card.image.url}
                  width={160}
                  height={160}
                  alt={card.image.alt}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <div className="mb-6 mt-4 flex justify-between text-sm">
                  <p className="text-sm">{card.author}</p>
                  <p>{card.date}</p>
                </div>
                <div className="flex justify-between text-[14px] text-lighter_blue">
                  {card.tags.map((tag) => (
                    <div>
                      <a href="#" className="hover:text-blue">
                        {`#${tag}`}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
