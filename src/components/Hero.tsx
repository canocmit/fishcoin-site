"use client";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";

import AnimatedSection from "@/components/AnimatedSection";
import { CONTRACT } from "@/constant/contract";

export const WALLETS = [
  {
    name: "MetaMask",
    icon: "/images/wallets/metamask.png",
    link: "https://metamask.io/download/",
  },  
  {
    name: "Rabby Wallet",
    icon: "/images/wallets/rabby.png",
    link: "https://rabby.io/",
  },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(CONTRACT.ca);
      } else {
        // fallback solution for browsers that don't support Clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = CONTRACT.ca;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Clipboard copy failed", err);
      alert("Trình duyệt chặn copy, vui lòng copy thủ công!");
    }
  };

  return (
    <AnimatedSection className="flex flex-wrap justify-center items-center relative text-white text-center py-10 bg-cover bg-center">
      {/* LOGO */}
      <div className="w-80 md:w-96 lg:w-1/2 aspect-square relative">
        <Image
          fill
          className="imglogo"
          src={CONTRACT.logo1}
          alt="Animated etf logo"
        />
      </div>

      {/* CONTENT */}
      <div className="text-white w-full m-0 md:m-10 lg:m-0 md:w-1/3 lg:w-1/2 flex flex-col justify-center items-center gap-10">
        {/* TITLE */}
        <h1 className="text-3xl text-center lg:text-5xl font-extrabold break-words lg:px-4 mt-6 lg:mt-0 text-zinc-900">
          Welcome to <br />
          <div className="typewriter-oneline">
            <span className="text-center text-4xl lg:text-7xl text-transparent glow-text bg-text-gradient-1 bg-clip-text">
              {CONTRACT.name}
            </span>
          </div>
        </h1>
        <a
          href="https://zalo.me/g/orafbe559"  // Liên kết tới nhóm Fishcoin
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center">
            {/* QR Group Image */}
            <Image
              src="/images/fishcoinzalo.jpeg" // Đường dẫn tới mã QR
              alt=""
              width={150}
              height={150}
              className="rounded-xl shadow-lg"
            />
            <span className="text-blue-600 font-semibold text-sm mt-2">Fishcoin Group</span>
          </div>
        </a>
        {/* CONTRACT COPY */}
        <div className="flex justify-center items-center gap-x-3 mx-auto w-full mt-4">
          <p className="text-zinc-900">CA:</p>
          <div className="text-white border border-blue-500 rounded-lg w-1/2 md:w-1/2">
            <input
              type="text"
              className="py-3 px-4 block rounded-lg text-sm w-full md:w-full placeholder:text-white focus:border-blue-500 focus:ring-blue-500 bg-gray-900 border-gray-700"
              value={CONTRACT.ca}
              title={CONTRACT.ca}
              disabled
            />
          </div>

          {/* COPY BUTTON INLINE */}
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              copied
                ? "bg-green-600 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {copied ? (
              <>
                <FiCheck className="text-lg" /> Copied!
              </>
            ) : (
              <>
                <FiCopy className="text-lg" /> Copy
              </>
            )}
          </button>
        </div>

        {/* SUPPORTED WALLETS */}
        <div className="mt-4">
          <p className="text-center text-sm text-zinc-500">
            FIS wallet support:
          </p>
          <div className="mt-2 flex justify-center gap-4 flex-wrap">
            {WALLETS.map((wallet) => (
              <Link key={wallet.name} href={wallet.link} target="_blank">
                <div className="w-16 h-16 md:w-20 md:h-20 cursor-pointer border rounded-lg flex items-center justify-center p-1 hover:shadow-lg transition-all">
                  <Image
                    src={wallet.icon}
                    alt={wallet.name}
                    width={64}
                    height={64}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
