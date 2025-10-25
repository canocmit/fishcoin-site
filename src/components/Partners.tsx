import Image from 'next/image';
import Link from 'next/link';
import { PiHandshakeThin } from 'react-icons/pi';

import AnimatedSection from '@/components/AnimatedSection';

import { CONTRACT } from '@/constant/contract';

export default function Partners() {
  return (
    <AnimatedSection id='partners' className='py-12'>
      <div className='container mx-auto text-center'>
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
