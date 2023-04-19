import { Inter } from "next/font/google";
import Image from "next/image";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <section className="grid grid-cols-2 py-14 px-20 border border-black">
        <div className="flex flex-col">
          <div>
            <h1 className="text-6xl/tight font-bold">Learn IT for free</h1>
            <h2 className="text-5xl font-bold ">with swaron</h2>
          </div>
          <span className="py-6">
            Swaron IO is a platform to learn for free. We believe that knowledge
            must be accessible to everyone.
          </span>
        </div>
        <div className="flex justify-end pl-4 items-center">
          aqui ficara uma imagem
        </div>
      </section>
    </main>
  );
}
