"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import ParticlesBackground from "@/components/Particles/particlesBackground";
export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <main className="px-5 md:px-10">
        <div className="w-full h-screen flex justify-center items-center gap-7 flex-col md:flex-col lg:flex-row">
          {/* <Image
            src={"next.svg"}
            alt=""
            className=" bg-white p-10 rounded-lg"
            width={500}
            height={500}
          /> */}
          <div className="p-10 bg-white rounded-lg">
            <h1 className="text-black text-4xl font-sans font-bold italic">
              HAITASIK-AI
            </h1>
          </div>
          <div className="shadow-sm grid gap-4">
            <h1 className="font-extrabold text-4xl lg:text-6xl">
              Selamat Datang Di <span className="text-primary">HaiTasik</span>
            </h1>
            <h2 className="text-3xl lg:text-7xl italic text-secondary">
              <Typewriter
                options={{
                  strings: [
                    "Ai Generate",
                    "Open Data",
                    "Pemerintahan",
                    "Prasarana Publik",
                    "Layanan Publik",
                    "Selayang Pandang",
                    "Tanyakan Kepada Saya!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="text-lg text-gray-400">
              Dari Tasikmalaya Untuk Indonesia
            </p>
            <Link
              href="/chat"
              className="btn btn-outline btn-primary normal-case text-xl italic hover:shadow-primary hover:shadow-md"
            >
              Getstarted
            </Link>
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}
