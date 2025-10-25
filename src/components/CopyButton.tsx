'use client';

import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

export default function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!value) return;

    // Kiểm tra Clipboard API có hỗ trợ không
    if (navigator.clipboard && window.isSecureContext) {
      // Nếu có, sử dụng API hiện đại
      await navigator.clipboard.writeText(value);
    } else {
      // Fallback cho các trường hợp khác (CSP chặn hoặc trình duyệt cũ)
      const textArea = document.createElement('textarea');
      textArea.value = value;
      textArea.style.position = 'fixed'; // Giấu textarea ra ngoài màn hình
      textArea.style.top = '-1000px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }

    // Sau khi copy thành công, cập nhật trạng thái
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset sau 2s
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        copied
          ? 'bg-green-600 text-white'
          : 'bg-blue-500 text-white hover:bg-blue-600'
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
  );
}
