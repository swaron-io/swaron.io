import { Inter } from "next/font/google";
import Image from "next/image";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <div className="grid grid-cols-2 h-[750px]">
        <div className="flex justify-end pr-4 items-center">
          aqui ficara uma imagem
        </div>
        <div className="flex justify-start pl-4 items-center">
          aqui ficara o texto
        </div>
      </div>
    </main>
  );
}
