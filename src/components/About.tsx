import Image from 'next/image';

import AnimatedSection from '@/components/AnimatedSection';

import { CONTRACT } from '@/constant/contract';

export default function About() {
  return (
    <AnimatedSection id='about' className='shadow-2xl py-16'>
      <div className='flex flex-col items-center justify-center mx-5 lg:mx-20 gap-5'>
        <p className='text-4xl lg:text-5xl font-extrabold text-center  text-zinc-900 '>
          Introducing
          {` ${CONTRACT.name} ($${CONTRACT.symbol})`}
        </p>
        <div className='hero flex flex-col-reverse justify-between lg:flex-row items-center mx-5 lg:mx-10'>
          <div className='main-head  text-zinc-900 w-full lg:w-1/2 flex flex-col '>
            <div className='flex flex-col lg:flex-row items-center justify-center '>
              <p className='about-context about-text text-zinc-600 mx-2 md:mx-12 md:text-xl lg:text-2xl mt-5  flex flex-col text-center'>
                <span>{CONTRACT.description}</span>
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/3 aspect-square rounded-full mt-8 relative'>
            <Image
              fill
              className='imglogo'
              src={CONTRACT.logo2}
              alt='Animated etf logo'
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
