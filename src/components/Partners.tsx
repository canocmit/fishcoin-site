import Image from 'next/image';
import Link from 'next/link';
import { PiHandshakeThin } from 'react-icons/pi';

import AnimatedSection from '@/components/AnimatedSection';

import { CONTRACT } from '@/constant/contract';

export default function Partners() {
  return (
    <AnimatedSection id='partners' className='py-16'>
      <div className='container mx-auto text-center'>
        <div className='flex flex-col-reverse md:flex-row md:items-center justify-start mx-4 md:mx-6 lg:mx-8'>
          <h2 className='text-5xl lg:text-7xl font-extrabold mb-8 text-zinc-900 '>
            Partners
          </h2>
          <PiHandshakeThin className='size-32 md:size-42 lg:size-64 px-5 fill-zinc-900' />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 m-10 align-middle'>
          {CONTRACT.partners.map((partner, index) => {
            return (
              <Link key={index} href={partner.url} target='_blank'>
                <div className='flex items-center w-full'>
                  <div className='flex flex-col justify-center items-center border-4 rounded-lg p-10 transform hover:scale-110 transition duration-200 w-full'>
                    <div className='flex justify-center items-center'>
                      <div className='w-32 relative aspect-square'>
                        <Image fill src={partner.imgUrl} alt='Partner Logo' />
                      </div>
                    </div>
                    <div className='flex justify-center items-center'>
                      <p className='text-3xl text-zinc-900'>{partner.name}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
