import XPLPrice from "@/components/XPLPrice";
import AboutPage from './about/page';
import { CONTRACT } from '@/constant/contract';
import Hero from '@/components/Hero';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Partners from '@/components/Partners';
import About from '@/components/About';

// import Socials from '@/components/Socials';
// import Tokenomics from '@/components/Tokenomics';

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <XPLPrice />  {/* Hiện giá góc trái */}
        <Hero />
        <About />
        
        <Partners />
      </MaxWidthWrapper>
    </>
  );
}
