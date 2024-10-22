// import React from 'react'

// const CTAOne = () => {
//     return (
//             <section class="relative mb-8 lg:mt-[-150px] overflow-hidden">
//                 <div class="container mx-auto px-4">
//                     <div class="p-16 bg-[#E50914] rounded-md">
//                         <div class="flex flex-wrap items-center justify-between -m-6 lg:px-20 sm:px-0">
//                             <div class="w-full md:w-1/2 p-6">
//                                 <div class="md:max-w-full flex justify-center">
//                                     <h2 class="font-bold lg:text-3xl sm:text-3xl text-xl text-white text-center">Vous voulez créer votre compte vous-même ? Achetez nos cartes cadeaux Netflix et commencez à regarder en quelques minutes !
//                                     </h2>
//                                 </div>
//                             </div>
//                             <div class="w-full md:w-1/2 p-6">
//                                 <div class="flex flex-wrap justify-end -m-2">
//                                     {/* <div class="w-full xl:w-auto p-2">
//                                         <button class="py-3 px-4 block w-full text-xs tracking-px text-gray-900 font-bold bg-white hover:bg-gray-50 rounded-md">
//                                             <div class="flex items-center justify-center py-0.5">
//                                                 <p>Savoir Plus</p>
//                                             </div>
//                                         </button>
//                                     </div> */}
//                                     <div class="w-full xl:w-auto p-2">
//                                         <a href="#pricing">
//                                         <button class="relative group inline-block flex-shrink-0 w-full sm:w-auto py-4 px-3 sm:py-4 sm:px-5 lg:py-6 lg:px-6 text-lg sm:text-base lg:text-lg font-bold text-black hover:text-black bg-white rounded-md transition duration-300 overflow-hidden">
//                                             <div class="flex items-center justify-center py-0.5 ">
//                                                 <svg className="mr-2.5 rotate-90" width="19" height="18" viewbox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                     <path d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z" stroke="#E50914" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
//                                                 </svg>
//                                                 <p>Consultez Nos Offres</p>
//                                             </div>
//                                         </button>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//     )
// }

// export default CTAOneimport { useContext } from 'react';
import { useTranslation } from '@/app/i18n/client';
import I18NextContext from '@/Helper/I18NextContext';
import Image from 'next/image';
import giftCardsImage from '../../../../public/assets/gift-cards.png';
import { Button } from '@/Components/ui/button';
import { useContext } from 'react';
import Link from 'next/link';

const CTAOne = () => {
    //   const { i18Lang } = useContext(I18NextContext);
    //   const { t } = useTranslation(i18Lang, 'common');

    return (
        <section className="container mx-auto my-10 relative">
            <div className="relative bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-lg lg:h-[360px] sm:h-[550px] flex flex-col lg:flex-row justify-center lg:justify-between items-center">
                {/* Text and Button Section */}
                <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-10 lg:w-1/2 sm:text-center lg:text-left">
                    <h2 className="text-xl sm:text-4xl md:text-2xl lg:text-4xl font-bold ctaOne-heading">
                        Vous voulez créer votre compte vous-même ? Achetez nos cartes cadeaux Netflix et commencez à regarder en quelques minutes !
                    </h2>
                    <Link href="/product/carte-cadeau-netflix">
                        <Button className="relative inline-flex items-center justify-center rounded-md bg-[#E50914] text-white dark:bg-white px-8 py-4 font-bold text-md dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            Obtenez-la dès maintenant
                        </Button>
                    </Link>
                </div>

                {/* Image Section */}
                <div className="relative lg:w-1/2 flex justify-center lg:left-[100px] lg:justify-center z-1">
                    <Image
                        src={giftCardsImage}
                        alt="Gift cards"
                        className="img-fluid"
                        height={450}
                        width={450}
                    />
                </div>
            </div>
        </section>
    );
};

export default CTAOne;


