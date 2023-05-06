"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingSpinner } from "./components/loading-spinner";

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
      <div className="flex items-center justify-center pb-4 pt-14 md:flex-row md:justify-center">
        <h1 className="flex w-[40%] text-center text-3xl font-bold">
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
          className="flex h-12 w-[450px] rounded-lg border p-3"
        />
        <button className="ml-8 w-36 rounded-lg border bg-blue text-white">
          Search
        </button>
      </div>
    </main>
  );
}
