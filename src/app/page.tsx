import { Inter } from "next/font/google";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="h-screen flex justify-center items-center flex-col">
        <h3 className="text-2xl font-bold">
          swar<span className="text-blue">o</span>n.io
        </h3>
        <h1 className="text-lg font-bold text-high_gray">coming soon.</h1>
      </div>
    </main>
  );
}
