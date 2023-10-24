"use client";
import React from "react";
import NavbarChat from "@/components/Chat/navbarChat";
import Asside from "@/components/Chat/asside";
import FooterChat from "@/components/Chat/footerChat";
import Typewriter from "typewriter-effect";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night">
      <body>
        <NavbarChat />
        <div className="flex flex-row w-full">
          <div className="w-96 hidden md:block">
            <Asside />
          </div>
          <div>{children}</div>
          {/* <div>
            <h1 className="text-4xl font-bold mt-5">
              <Typewriter
                options={{
                  strings: ["Diskominfo", "Kota Tasikmalaya"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div> */}
        </div>
        <FooterChat />
      </body>
    </html>
  );
}