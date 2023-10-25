import React from "react";
import ParticlesBackground from "@/components/Particles/particlesBackground";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <ParticlesBackground />
      <div className="w-ful h-screen flex flex-col justify-center items-center gap-4">
        <Image src={"/icons/404.png"} width={250} height={250} alt="Where" />
        <h1 className="text-8xl font-mono font-bold">404</h1>
        <p className="text-2xl font-medium">Mau Kemana Kamu Dek!</p>
      </div>
    </>
  );
};

export default NotFound;
