import React from "react";
import ParticlesBackground from "@/components/Particles/particlesBackground";

const Loading = () => {
  return (
    <>
      <ParticlesBackground />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="p-10 rounded-lg bg-neutral text-center shadow-lg m-4">
          <span className="loading loading-infinity loading-lg"></span>
          <h1 className="text-4xl font-bold italic">Harap Menunggu</h1>
          <p className="Dinas Komunikasi dan Informatika Kota Tasikmalaya"></p>
        </div>
      </div>
    </>
  );
};

export default Loading;
