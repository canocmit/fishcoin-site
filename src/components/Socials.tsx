import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa';

import AnimatedSection from '@/components/AnimatedSection';
import { CONTRACT } from '@/constant/contract';

export default function Socials() {
  return (
    <AnimatedSection id='socials'>
      <div className='flex flex-col-reverse items-center md:flex-row justify-between'>
        {/* Hình minh họa */}
        <div className='w-full md:w-1/2 mx-4 px-4 flex justify-center items-center'>
          <div className='w-80 md:w-96 lg:w-[500px] aspect-square mx-8 relative'>
            <Image fill src={CONTRACT.logo3} alt='Logo Fishcoin' />
          </div>
        </div>

        {/* Phần mạng xã hội */}
        <div className='w-full md:w-1/2 mx-4 px-4 text-center md:text-left'>
          <h2 className='text-3xl lg:text-5xl font-extrabold mb-6'>
            Theo dõi <span className='text-blue-500'>Fishcoin</span> trên mạng xã hội
          </h2>

          <div className='flex items-center justify-center md:justify-start gap-8'>
            <Link href={CONTRACT.telegram} target='_blank'>
              <FaTelegram className='size-16 lg:size-24 hover:scale-110 transition-transform text-sky-400' />
            </Link>

            <Link href={CONTRACT.twitter} target='_blank'>
              <FaTwitter className='size-16 lg:size-24 hover:scale-110 transition-transform text-blue-500' />
            </Link>

            <Link href={CONTRACT.discord} target='_blank'>
              <FaDiscord className='size-16 lg:size-24 hover:scale-110 transition-transform text-indigo-500' />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
