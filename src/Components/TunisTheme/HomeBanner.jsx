// import { useContext } from 'react';
// import { useTranslation } from '@/app/i18n/client';
// import I18NextContext from '@/Helper/I18NextContext';

// import Btn from '@/Elements/Buttons/Btn';
// import { RiArrowRightLine } from 'react-icons/ri';
// import Image from 'next/image';

// import heroImage from '../../../public/assets/hero.png';

// const HomeBanner = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');
//   return (
//     <section className="container mx-auto my-10 ">
//       <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-lg">
//         <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
//           <div className="flex flex-col gap-5 lg:gap-10">
//             <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
//             Lorem ipsum dolor <br className="lg:flex hidden" /> sit amet consectetur <br className="lg:flex hidden" /> adipiscing elit vitae.
//             </p>
//             <p className="text-sm sm:text-base lg:text-lg text-gray-500">
//               Learn at your own pace, with lifetime <br className="lg:flex hidden" /> access on mobile and desktop
//             </p>
//             {/* <button className="btn btn-sm lg:btn-lg bg-[#524fd5] text-white rounded-full border-none w-36 lg:w-44 capitalize">Get Started</button> */}
//             <Btn className='sub-btn btn-animation btn btn-2xl text-white rounded-md border-none w-44 capitalize'>
//               {/* <span className='d-sm-block d-none'>{t('Subscribe')}</span> */}
//               <span>Get Started</span>
//               <RiArrowRightLine />
//             </Btn>
//           </div>
//           {/* <img src={image} alt="Hero Image" /> */}
//           <Image src={heroImage} alt='hero image' className='img-fluid image-1'/>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeBanner;


"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { FlipWords } from "../ui/flip-words";

import netflix from "../../../public/assets/netflix.png";
import Btn from "@/Elements/Buttons/Btn";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import { Button } from "../ui/button";


export function HomeBanner() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    (<div className="flex flex-col overflow-hidden">
      <div className="container flex flex-col items-center px-4 mx-auto relative md:top-20">

        <h1 className="text-3xl lg:text-8xl font-bold mt-4">
          Netflix en Tunisie, <br /> activez en un clic.
        </h1>
        <p
          className="text-base lg:text-2xl font-medium mt-2 text-center">
          Faites le meilleur choix parmi notre sélection de produits pour répondre à vos besoins.
        </p>
        <Link href="#pricing" passHref>
          <Button className="mt-4 relative inline-flex w-full items-center justify-center rounded-md px-8 bg-[#E50914] py-4 text-white">
            <span className="mr-4 font-bold">Profitez Maintenant</span>
            <svg width="8" height="11" viewbox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.82994 5.04001L2.58994 0.80001C2.49698 0.706281 2.38638 0.631887 2.26452 0.581118C2.14266 0.530349 2.01195 0.504211 1.87994 0.504211C1.74793 0.504211 1.61723 0.530349 1.49537 0.581118C1.37351 0.631887 1.26291 0.706281 1.16994 0.80001C0.983692 0.987372 0.87915 1.24082 0.87915 1.50501C0.87915 1.7692 0.983692 2.02265 1.16994 2.21001L4.70994 5.75001L1.16994 9.29001C0.983692 9.47737 0.87915 9.73082 0.87915 9.99501C0.87915 10.2592 0.983692 10.5126 1.16994 10.7C1.26338 10.7927 1.3742 10.866 1.49604 10.9158C1.61787 10.9655 1.74834 10.9908 1.87994 10.99C2.01155 10.9908 2.14201 10.9655 2.26385 10.9158C2.38569 10.866 2.4965 10.7927 2.58994 10.7L6.82994 6.46001C6.92367 6.36705 6.99806 6.25645 7.04883 6.13459C7.0996 6.01273 7.12574 5.88202 7.12574 5.75001C7.12574 5.618 7.0996 5.48729 7.04883 5.36543C6.99806 5.24357 6.92367 5.13297 6.82994 5.04001Z" fill="currentColor"></path>
            </svg>
          </Button>
        </Link>
      </div>
      <ContainerScroll
      >
        <Image
          src={netflix}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full"
          draggable={false} />
      </ContainerScroll>
    </div>)
  );
}

export default HomeBanner;
