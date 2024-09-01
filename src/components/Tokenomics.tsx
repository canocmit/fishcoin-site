import { PiCoinsThin } from 'react-icons/pi';

import AnimatedSection from '@/components/AnimatedSection';

import { CONTRACT } from '@/constant/contract';

export default function Tokenomics() {
  return (
    <AnimatedSection id='tokenomics' className=' text-zinc-900 py-16'>
      <div className='container mx-auto text-center'>
        <div className='flex flex-col-reverse md:flex-row md:items-center justify-start mx-4 md:mx-6 lg:mx-8'>
          <h2 className='text-5xl lg:text-7xl font-extrabold mb-8 text-zinc-900 '>
            Tokenomics
          </h2>
          <PiCoinsThin className='size-32 md:size-42 lg:size-64 px-5 fill-zinc-900' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 m-10 align-middle '>
          <div className='p-6 border-4 border-zinc-900 rounded-lg shadow-2xl'>
            <h2 className='text-3xl font-bold mb-4 text-zinc-900'>
              Total Supply
            </h2>
            <p className='pt-5'>
              {CONTRACT.totalSupply.toLocaleString()} ${CONTRACT.symbol}
            </p>
          </div>

          <div className='p-6 border-4 border-zinc-900 rounded-lg shadow-md'>
            <h2 className='text-3xl font-bold mb-4 text-zinc-900'>Tax</h2>
            <p className='pt-5'>{CONTRACT.taxPercentage}%</p>
          </div>

          {CONTRACT.ownershipRenounced && (
            <div className='p-6 border-4 border-zinc-900 rounded-lg shadow-md'>
              <h2 className='text-3xl font-bold mb-4 text-zinc-900'>
                Contract ownership is{' '}
                <span className='text-transparent bg-text-gradient-1 bg-clip-text font-extrabold'>
                  renounced
                </span>
              </h2>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
