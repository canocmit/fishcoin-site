"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  image: string;
  link: string;
}

export default function AboutPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/posts.txt")
      .then((res) => res.text())
      .then((text) => {
        const parsed = text
          .trim()
          .split("\n")
          .map((line, index) => {
            const [title, image, link] = line.split("|");
            return { id: index + 1, title, image, link };
          });
        setPosts(parsed);
      })
      .catch((err) => console.error("Lỗi đọc file posts.txt:", err));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-6">
      

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">Chưa có bài đăng nào.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition p-4"
            >
              <div className="relative w-full aspect-video mb-3">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {post.title}
              </h3>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
