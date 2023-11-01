"use client";
import React from "react";
import NavbarChat from "@/components/Chat/navbarChat";
import Asside from "@/components/Chat/asside";
import FooterChat from "@/components/Chat/footerChat";

export default function ChatLayout({
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
          <div className="flex-1">{children}</div>
        </div>
        <FooterChat />
      </body>
    </html>
  );
}
