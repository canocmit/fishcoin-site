"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  video: string;
}

export default function SanPhamPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [introVideo, setIntroVideo] = useState<string>("");

  // 📥 Lấy danh sách sản phẩm
  useEffect(() => {
    fetch("/videos.txt")
      .then((res) => res.text())
      .then((text) => {
        const parsed = text
          .trim()
          .split("\n")
          .map((line, index) => {
            const [name, image, video, price] = line.split("|");
            return { id: index + 1, name, image, price, video };
          });
        setProducts(parsed);
      })
      .catch((err) => console.error("Lỗi đọc file videos.txt:", err));
  }, []);

  // 📥 Lấy video giới thiệu chính từ intro.txt
  useEffect(() => {
    fetch("/intro.txt")
      .then((res) => res.text())
      .then((text) => {
        const link = text.trim();
        if (link) setIntroVideo(link);
      })
      .catch((err) => console.error("Lỗi đọc file intro.txt:", err));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-6 relative">
      {/* 🎬 Video giới thiệu chính */}
      <div className="flex justify-center mb-6 mt-4 relative">
        {introVideo ? (
          <iframe
            className="w-[90vw] sm:w-[640px] h-[360px] rounded-2xl shadow-lg"
            src={`${introVideo}?autoplay=1&mute=1`}
            title="Video giới thiệu Fishcoin"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="text-gray-400 text-center">
            Đang tải video giới thiệu...
          </div>
        )}
      </div>

      {/* 🐟 Danh sách cá */}
      <h2 className="text-2xl font-bold text-center mb-6">
        Fishcoin Product
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((fish) => (
          <div
            key={fish.id}
            onClick={() => setSelectedVideo(fish.video)}
            className="cursor-pointer bg-white p-4 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition"
          >
            <div className="relative w-full aspect-square mb-3">
              <Image
                src={fish.image}
                alt={fish.name}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {fish.name}
            </h3>
            <p className="text-center text-blue-600 font-bold">{fish.price}</p>
          </div>
        ))}
      </div>

      {/* 🎥 Popup Video sản phẩm */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-black rounded-2xl p-4 shadow-2xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200"
            >
              ✕
            </button>
            <iframe
              className="w-[90vw] sm:w-[640px] h-[360px] rounded-xl"
              src={`${selectedVideo}?autoplay=1`}
              title="Video sản phẩm"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
}
