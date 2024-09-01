import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

import AnimatedSection from '@/components/AnimatedSection';
import CopyButton from '@/components/CopyButton';

import { CONTRACT } from '@/constant/contract';

export default function Hero() {
  return (
    <AnimatedSection className='flex flex-wrap justify-center items-center relative text-white text-center py-10 bg-cover bg-center'>
      <div className='w-80 md:w-96 lg:w-1/2 aspect-square relative'>
        <Image
          fill
          className='imglogo'
          src={CONTRACT.logo1}
          alt='Animated etf logo'
        />
      </div>
      <div className='text-white w-full m-0 md:m-10 lg:m-0 md:w-1/3 lg:w-1/2 flex flex-col justify-center items-center gap-10'>
        <h1 className='text-3xl text-center lg:text-5xl font-extrabold break-words lg:px-4 mt-6 lg:mt-0 text-zinc-900'>
          Welcome to <br />
          <div className='typewriter-oneline'>
            <span className='text-center text-4xl lg:text-7xl text-transparent glow-text bg-text-gradient-1 bg-clip-text'>
              {CONTRACT.name}
            </span>
          </div>
        </h1>
        <Link
          href={`https://pancakeswap.finance/swap?outputCurrency=${CONTRACT.ca}`}
          target='_blank'
          className='w-full md:w-1/2 lg:w-1/2'
        >
          <button
            type='button'
            className='text-zinc-900 flex justify-center gap-x-2 items-center  w-full border-black hover:bg-black hover:text-white border focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-full text-lg px-5 py-2.5 me-2 mb-2 '
          >
            BUY
            <FiExternalLink className='size-6' />
          </button>
        </Link>
        <div className='flex justify-center items-center gap-x-3 mx-auto w-full'>
          <p className='text-zinc-900'>CA: </p>
          <div className=' text-white border border-blue-500 rounded-lg w-1/2 md:w-1/2'>
            <input
              type='text'
              className='py-3 px-4 block rounded-lg text-sm w-full md:w-full placeholder:text-white focus:border-blue-500 focus:ring-blue-500 bg-gray-900 border-gray-700'
              value={`${CONTRACT.ca}`}
              title={`${CONTRACT.ca}`}
              disabled
            />
          </div>
          <CopyButton value={`${process.env.NEXT_PUBLIC_CA}`} />
        </div>
        <Link href='#' target='_blank'>
          <p className='text-xl lg:text-2xl text-zinc-900 underline'>AUDIT</p>
        </Link>
      </div>
    </AnimatedSection>
  );
}
