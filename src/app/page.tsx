"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingSpinner } from "./components/loading-spinner";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [email, setEmail] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    if (!email) return toast.error("Please enter your email");

    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    };

    try {
      const result = await fetch(
        "https://swaron-landing-api.onrender.com/register",
        config
      );
      if (result.status === 409) {
        toast.error("Email already registered ⚠️");
      } else {
        toast("Email sent! Welcome to swaron.io 🎉");
      }
    } catch (error) {
      toast.error("Something went wrong, try again later 😢");
    }
    setIsLoading(false);
  };

  return (
    <main className={`${inter.className} mx-auto w-[95%] max-w-[1140px]`}>
      <ToastContainer />{" "}
      <section className="flex flex-col items-center justify-center py-14 md:flex-row md:justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <h1
              className="bg-gradient-to-r from-blue to-green_shrek bg-clip-text text-6xl/tight font-bold hover:from-white_blue hover:to-blue"
              style={{
                color: "transparent",
              }}
            >
              Learn IT for free
            </h1>
            <h2 className="text-5xl font-bold ">with swaron</h2>
          </div>
          <span className="max-w-[30rem] py-8 pb-20 text-2xl text-gray">
            SwaronIO is a platform to learn for free. We believe that knowledge
            must be accessible to everyone.
          </span>
          <form className="max-w-[30rem] items-center" onSubmit={sendEmail}>
            <div className="relative items-center">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-gray-900 w-full rounded-[20px] bg-white_ice p-4 pl-4 text-sm"
                placeholder="E-mail address"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 items-center rounded-[20px] bg-blue px-4 py-3 text-sm font-bold text-white duration-200 hover:bg-light_blue focus:outline-none focus:ring-4"
              >
                {isLoading ? <LoadingSpinner /> : "Join our waitlist"}
              </button>
            </div>
          </form>
        </div>
        <div className="hidden pl-4 md:block">
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
