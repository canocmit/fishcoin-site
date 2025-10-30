"use client";
import { useEffect, useState } from "react";

export default function XPLPrice() {
  const [priceUsd, setPriceUsd] = useState<number | null>(null);

  async function fetchPrice() {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=plasma&vs_currencies=usd"
      );
      const data = await res.json();
      if (data && data.plasma && data.plasma.usd) {
        setPriceUsd(data.plasma.usd);
      }
    } catch (err) {
      console.error("Error fetching XPL price:", err);
    }
  }

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 30000);  // mỗi 30 giây
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center p-4 bg-white rounded-xl shadow-md inline-block">
      {priceUsd !== null ? (
        <>
          <p className="text-gray-800 font-semibold">XPL Price</p>
          <p className="text-2xl font-bold text-blue-600">${priceUsd.toFixed(4)}</p>
        </>
      ) : (
        <p className="text-gray-500">Loading XPL price...</p>
      )}
    </div>
  );
}
