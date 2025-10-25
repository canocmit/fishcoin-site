'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaTelegram } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';

import { CONTRACT } from '@/constant/contract';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='sticky inset-x-0 top-0 z-[100] h-14 w-full bg-white/95 md:bg-white/75 backdrop-blur-lg'>
      <MaxWidthWrapper>
        <div className='flex w-full h-14 justify-between md:justify-center items-center space-x-4'>
          <Link
            href='/'
            className='font-semibold bg-text-gradient-1 bg-clip-text text-transparent flex-1'
          >
            {CONTRACT.name}
          </Link>

          <div className='md:hidden'>
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FiX className='size-6' />
              ) : (
                <FiMenu className='size-6' />
              )}
            </button>
          </div>

          <Link href="/store" className="text-blue-600 font-semibold hover:underline">
            Store
          </Link>
          <Link href='#tokenomics' className='hidden md:block flex-1'>
            Tokenomics
          </Link>
          <Link href='#partners' className='hidden md:block flex-1'>
            Partners
          </Link>
          <Link href='#socials' className='hidden md:block flex-1'>
            Socials
          </Link>
          <Link
            href={CONTRACT.telegram}
            target='_blank'
            className='hidden md:block flex-1'
          >
            <button
              type='button'
              className='w-full border border-black rounded-full p-2 focus:outline-none focus:ring-4 focus:ring-white text-sm md:hover:-translate-y-0.5'
            >
              <div className='flex items-center justify-center gap-x-2'>
                <FaTelegram className='size-6' /> Telegram
              </div>
            </button>
          </Link>
        </div>
        {isOpen && (
          <div className='md:hidden'>
            <div className='absolute inset-x-0 flex flex-col space-y-2 bg-white/95 backdrop-blur-lg text-xs px-4 pb-4'>
              <Link href='#about'>About</Link>
              <Link href='#tokenomics'>Tokenomics</Link>
              <Link href='#partners'>Partners</Link>
              <Link href='#socials'>Socials</Link>
              <Link href={CONTRACT.telegram} target='_blank'>
                <button
                  type='button'
                  className='border border-black rounded-full p-1 focus:outline-none focus:ring-4 focus:ring-white text-sm'
                >
                  <div className='flex items-center justify-center gap-x-1'>
                    <FaTelegram className='size-4' /> Telegram
                  </div>
                </button>
              </Link>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </nav>
  );
}
