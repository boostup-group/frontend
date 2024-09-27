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

export function HomeBanner() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {/* Netflix Tunisie <br /> */}
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Netflix en Tunisie, activez en un clic.
              </span>
            </h1>
          </>
        }>
        <Image
          src={netflix}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>)
  );
}

export default HomeBanner;
