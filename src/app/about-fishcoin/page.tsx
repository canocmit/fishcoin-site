"use client";
import Image from "next/image";

export default function AboutFishcoinPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-10">
      {/* LOGO + TITLE */}
      <section className="text-center mb-10">
        <Image
          src="/favicon/Fishcoin.png"
          alt="Fishcoin Logo"
          width={100}
          height={100}
          className="mx-auto rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4 text-blue-700">
          About Fishcoin
        </h1>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Fishcoin – A new kind of reward point you truly own.
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-gray-700 leading-relaxed text-lg">
          Fishcoin is a digital token created as a model for applying blockchain
          technology to real-world reward systems. Instead of storing points on
          a company’s server, customers can hold, transfer, and redeem Fishcoin
          freely — using it for discounts or rewards in stores participating in
          the Fishcoin ecosystem.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          It’s a simpler, more transparent, and community-driven way to connect
          businesses and customers — blending the warmth of everyday life with
          the innovation of the blockchain world.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
          🌍 Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="p-4 bg-white rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Our Mission</h3>
            <p>
              To bring blockchain closer to everyday life by turning loyalty
              points into real, transferable digital assets.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Our Vision</h3>
            <p>
              A world where customers truly own their rewards, and every small
              business can connect to blockchain without complexity.
            </p>
          </div>
        </div>
      </section>

      {/* TOKEN UTILITY */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
          💎 Token Utility (FIS)
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Redeem discounts and products in partner stores.</li>
          <li>Transfer Fishcoin between users easily.</li>
          <li>Support local businesses through blockchain-based loyalty.</li>
          <li>Future: Use FIS for cross-store reward systems.</li>
        </ul>
      </section>

      {/* PARTNERS */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          🤝 Partners & Ecosystem
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://youtube.com/embed/jUmqGC1idLU"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-xl shadow hover:scale-105 transition"
          >
            <Image
              src="/logo.png"
              alt="Fishcoin Partner"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-2 font-medium text-gray-800">
              Fishcoin in Rabby Wallet
            </p>
          </a>

          <a
            href="https://plasmascan.to/token/0x2E7Fa0C70D63FFfa29c792f406C3a66C01918BA1?chainid=9745"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-xl shadow hover:scale-105 transition"
          >
            <Image
              src="/plasma.svg"
              alt="PlasmaChain"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-2 font-medium text-gray-800">Fishcoin Chain</p>
          </a>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
          🗓 Roadmap
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Q4 2025: Launch Fishcoin Store beta</li>
          <li>Q1 2026: Add Fishcoin Wallet & Mobile App</li>
          <li>Q2 2026: Expand to partner farms in Mekong Delta</li>
          <li>Q4 2026: Listing on major DEXs</li>
        </ul>
      </section>

      {/* TEAM */}
      <section className="max-w-4xl mx-auto mb-10 text-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          🧑‍💻 Team & Community
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
          <div className="p-4 bg-white rounded-xl shadow">
            <p className="font-bold">🐡 Cá Nóc Mít</p>
            <p>Blockchain Dev & Vision Designer</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <p className="font-bold">🐱 Mèo Mập</p>
            <p>Founder & Python Developer</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-600">
            Join our community:
            <a
              href="https://t.me/ranchufishfarm"
              target="_blank"
              className="text-blue-600 hover:underline mx-2"
            >
              Telegram
            </a>
            |
            <a
              href="https://twitter.com/ranchufishfarm"
              target="_blank"
              className="text-blue-600 hover:underline mx-2"
            >
              Twitter
            </a>
            |
            <a
              href="https://discord.gg/canocmit33"
              target="_blank"
              className="text-blue-600 hover:underline mx-2"
            >
              Discord
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-6 border-t">
        © 2025 Fishcoin 🐟 | Built with ❤️ in Hậu Giang
      </footer>
    </main>
  );
}
