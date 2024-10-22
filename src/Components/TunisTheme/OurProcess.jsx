// import React from 'react'

// const OurProcess = () => {
//     return (
//         <div class="pb-32 bg-white overflow-hidden">
//             <div class="container px-4 mx-auto">
//                 <p className="text-base lg:text-2xl font-medium">
//                     Simple and Easy
//                 </p>
//                 <h1 className="text-3xl lg:text-5xl font-bold mt-3 mb-28">
//                     Our Process
//                 </h1>
//                 <div class="flex flex-wrap -m-8">
//                     <div class="w-full md:w-1/2 lg:w-1/4 p-8">
//                         <div class="flex flex-wrap items-center mb-7 -m-2">
//                             <div class="w-auto p-2">
//                                 <div class="relative w-14 h-14 text-2xl font-bold font-heading bg-[#fff5f1] rounded-full">
//                                     <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">1</span>
//                                 </div>
//                             </div>
//                             <div class="flex-1 p-2">
//                                 <div class="w-full h-px bg-gray-200"></div>
//                             </div>
//                         </div>
//                         <h3 class="text-xl font-semibold leading-normal md:max-w-xs">Sélectionner le produit</h3>
//                         <p class="mt-4 text-gray-700 text-m">Faites le meilleur choix parmi notre sélection de produits pour répondre à vos besoins.</p>
//                     </div>
//                     <div class="w-full md:w-1/2 lg:w-1/4 p-8">
//                         <div class="flex flex-wrap items-center mb-7 -m-2">
//                             <div class="w-auto p-2">
//                                 <div class="relative w-14 h-14 text-2xl font-heading font-bold bg-[#fff5f1] rounded-full">
//                                     <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">2</span>
//                                 </div>
//                             </div>
//                             <div class="flex-1 p-2">
//                                 <div class="w-full h-px bg-gray-200"></div>
//                             </div>
//                         </div>
//                         <h3 class="text-xl font-semibold leading-normal md:max-w-xs">Saisir les informations</h3>
//                         <p class="mt-4 text-gray-700 text-m">Veuillez remplir les champs requis avec votre nom, votre numéro de téléphone et votre adresse e-mail.</p>
//                     </div>
//                     <div class="w-full md:w-1/2 lg:w-1/4 p-8">
//                         <div class="flex flex-wrap items-center mb-7 -m-2">
//                             <div class="w-auto p-2">
//                                 <div class="relative w-14 h-14 text-2xl font-bold font-heading bg-[#fff5f1] rounded-full">
//                                     <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">3</span>
//                                 </div>
//                             </div>
//                             <div class="flex-1 p-2">
//                                 <div class="w-full h-px bg-gray-200"></div>
//                             </div>
//                         </div>
//                         <h3 class="text-xl font-semibold leading-normal md:max-w-xs">Choisir la méthode de paiement</h3>
//                         <p class="mt-4 text-gray-700 text-m">Payez facilement en ligne avec votre Carte Bancaire ou choisissez parmi D17, virement bancaire et cash.</p>
//                     </div>
//                     <div class="w-full md:w-1/2 lg:w-1/4 p-8">
//                         <div class="flex flex-wrap items-center mb-7 -m-2">
//                             <div class="w-auto p-2">
//                                 <div class="relative w-14 h-14 text-2xl font-bold font-heading bg-[#fff5f1] rounded-full">
//                                     <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">4</span>
//                                 </div>
//                             </div>
//                             <div class="flex-1 p-2">
//                                 <div class="w-full h-px bg-gray-200"></div>
//                             </div>
//                         </div>
//                         <h3 class="text-xl font-semibold leading-normal md:max-w-xs">Finaliser la commande</h3>
//                         <p class="mt-4 text-gray-700 text-m">Après paiement, votre compte sera activé sous 12 heures et notre agent vous contactera.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         // EXAMPLE 2
//         // <div class="relative pt-28 pb-24 bg-white overflow-hidden">
//         //     {/* <img class="absolute left-1/2 top-0 transform -translate-x-1/2" src="flaro-assets/images/how-it-works/gradient2.svg" alt=""> */}
//         //     <div class="relative z-10 container px-4 mx-auto">
//         //         <p class="mb-6 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">How Flaro works</p>
//         //         <h2 class="mb-20 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight">Make things easy for your business</h2>
//         //         <div class="flex flex-wrap -m-8">
//         //             <div class="w-full md:w-1/2 lg:w-1/4 p-8">
//         //                 <div class="text-center">
//         //                     <div class="relative z-10 bg-white w-12 h-12 mb-8 mx-auto border border-blueGray-200 rounded-full">
//         //                         <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         //                             <svg width="22" height="22" viewbox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//         //                                 <path d="M2.75 9.16658H19.25M6.41667 13.7499H7.33333M11 13.7499H11.9167M5.5 17.4166H16.5C18.0188 17.4166 19.25 16.1854 19.25 14.6666V7.33325C19.25 5.81447 18.0188 4.58325 16.5 4.58325H5.5C3.98122 4.58325 2.75 5.81447 2.75 7.33325V14.6666C2.75 16.1854 3.98122 17.4166 5.5 17.4166Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
//         //                             </svg>
//         //                         </div>
//         //                         <div class="hidden lg:block absolute left-12 top-1/2 transform -translate-y-1/2 w-96 h-px bg-gray-200"></div>
//         //                     </div>
//         //                     <div class="md:max-w-xs mx-auto">
//         //                         <h3 class="mb-4 font-heading text-xl font-bold font-heading leading-normal">Choose a Plan</h3>
//         //                         <p class="text-gray-600 font-medium leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit. Volutpat tempor con.</p>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //             <div class="w-full md:w-1/2 lg:w-1/4 p-8">
//         //                 <div class="text-center">
//         //                     <div class="relative z-10 bg-white w-12 h-12 mb-8 mx-auto border border-blueGray-200 rounded-full">
//         //                         <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         //                             <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         //                                 <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
//         //                             </svg>
//         //                         </div>
//         //                         <div class="hidden lg:block absolute left-12 top-1/2 transform -translate-y-1/2 w-96 h-px bg-gray-200"></div>
//         //                     </div>
//         //                     <div class="md:max-w-xs mx-auto">
//         //                         <h3 class="mb-4 font-heading text-xl font-bold font-heading leading-normal">Answer Basic Questions</h3>
//         //                         <p class="text-gray-600 font-medium leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit. Volutpat tempor con.</p>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //             <div class="w-full md:w-1/2 lg:w-1/4 p-8">
//         //                 <div class="text-center">
//         //                     <div class="relative z-10 bg-white w-12 h-12 mb-8 mx-auto border border-blueGray-200 rounded-full">
//         //                         <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         //                             <svg width="19" height="16" viewbox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//         //                                 <path d="M8.66717 2.54545V10.0455C8.66717 10.7841 8.52335 11.489 8.23571 12.1602C7.94807 12.8313 7.55922 13.4119 7.06916 13.902C6.5791 14.392 5.99849 14.7809 5.32733 15.0685C4.65616 15.3562 3.95126 15.5 3.21262 15.5H2.53081C2.34615 15.5 2.18635 15.4325 2.0514 15.2976C1.91646 15.1626 1.84899 15.0028 1.84899 14.8182V13.4545C1.84899 13.2699 1.91646 13.1101 2.0514 12.9751C2.18635 12.8402 2.34615 12.7727 2.53081 12.7727H3.21262C3.96547 12.7727 4.60822 12.5064 5.14089 11.9737C5.67356 11.4411 5.9399 10.7983 5.9399 10.0455V9.70455C5.9399 9.42046 5.84047 9.17898 5.6416 8.98011C5.44274 8.78125 5.20126 8.68182 4.91717 8.68182H2.53081C1.96262 8.68182 1.47967 8.48295 1.08194 8.08523C0.684215 7.6875 0.485352 7.20455 0.485352 6.63636V2.54545C0.485352 1.97727 0.684215 1.49432 1.08194 1.09659C1.47967 0.698864 1.96262 0.5 2.53081 0.5H6.62172C7.1899 0.5 7.67285 0.698864 8.07058 1.09659C8.46831 1.49432 8.66717 1.97727 8.66717 2.54545ZM18.2126 2.54545V10.0455C18.2126 10.7841 18.0688 11.489 17.7812 12.1602C17.4935 12.8313 17.1047 13.4119 16.6146 13.902C16.1246 14.392 15.5439 14.7809 14.8728 15.0685C14.2016 15.3562 13.4967 15.5 12.7581 15.5H12.0763C11.8916 15.5 11.7318 15.4325 11.5969 15.2976C11.4619 15.1626 11.3944 15.0028 11.3944 14.8182V13.4545C11.3944 13.2699 11.4619 13.1101 11.5969 12.9751C11.7318 12.8402 11.8916 12.7727 12.0763 12.7727H12.7581C13.5109 12.7727 14.1537 12.5064 14.6863 11.9737C15.219 11.4411 15.4854 10.7983 15.4854 10.0455V9.70455C15.4854 9.42046 15.3859 9.17898 15.1871 8.98011C14.9882 8.78125 14.7467 8.68182 14.4626 8.68182H12.0763C11.5081 8.68182 11.0251 8.48295 10.6274 8.08523C10.2297 7.6875 10.0308 7.20455 10.0308 6.63636V2.54545C10.0308 1.97727 10.2297 1.49432 10.6274 1.09659C11.0251 0.698864 11.5081 0.5 12.0763 0.5H16.1672C16.7354 0.5 17.2183 0.698864 17.616 1.09659C18.0138 1.49432 18.2126 1.97727 18.2126 2.54545Z" fill="#4F46E5"></path>
//         //                             </svg>
//         //                         </div>
//         //                         <div class="hidden lg:block absolute left-12 top-1/2 transform -translate-y-1/2 w-96 h-px bg-gray-200"></div>
//         //                     </div>
//         //                     <div class="md:max-w-xs mx-auto">
//         //                         <h3 class="mb-4 font-heading text-xl font-bold font-heading leading-normal">Get a Quotation</h3>
//         //                         <p class="text-gray-600 font-medium leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit. Volutpat tempor con.</p>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //             <div class="w-full md:w-1/2 lg:w-1/4 p-8">
//         //                 <div class="text-center">
//         //                     <div class="relative z-10 bg-indigo-600 w-12 h-12 mb-8 mx-auto border border-blueGray-200 rounded-full">
//         //                         <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         //                             <svg width="22" height="16" viewbox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//         //                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5734 0.93934C21.1591 1.52513 21.1591 2.47487 20.5734 3.06066L8.57336 15.0607C7.98757 15.6464 7.03782 15.6464 6.45204 15.0607L0.452035 9.06066C-0.133751 8.47487 -0.133751 7.52513 0.452035 6.93934C1.03782 6.35355 1.98757 6.35355 2.57336 6.93934L7.5127 11.8787L18.452 0.93934C19.0378 0.353553 19.9876 0.353553 20.5734 0.93934Z" fill="white"></path>
//         //                             </svg>
//         //                         </div>
//         //                     </div>
//         //                     <div class="md:max-w-xs mx-auto">
//         //                         <h3 class="mb-4 font-heading text-xl font-bold font-heading leading-normal">Get Covered</h3>
//         //                         <p class="text-gray-600 font-medium leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit. Volutpat tempor con.</p>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </div> 
//     )
// }

// export default OurProcess


import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";

export function OurProcess() {
  const data = [
    {
      title: "Etape 1",
      content: (
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Sélectionner le produit</h1>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Faites le meilleur choix parmi notre sélection de produits pour répondre à vos besoins.
          </p>
          <div className="w-full h-full">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            {/* <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" /> */}
          </div>
        </div>
      ),
    },
    {
      title: "Etape 2",
      content: (
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Saisir vos informations personnelles</h1>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Veuillez remplir les champs requis avec votre nom, votre numéro de téléphone et votre adresse e-mail.
          </p>
          <div className="w-full h-full">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            {/* <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" /> */}
          </div>
        </div>
      ),
    },
    {
      title: "Etape 3",
      content: (
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Choisir la méthode de paiement</h1>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Payez facilement en ligne avec votre Carte Bancaire ou choisissez parmi D17, virement bancaire et cash.
          </p>
          <div className="w-full h-full">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            {/* <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" /> */}
          </div>
        </div>
      ),
    },,
    {
      title: "Etape 4",
      content: (
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Finaliser la commande</h1>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Après paiement, votre compte sera activé sous 12 heures et notre agent vous contactera.
          </p>
          <div className="w-full h-full">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            {/* <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" /> */}
          </div>
        </div>
      ),
    },
  ];
  return (
    (<section className="w-full z-0 relative">
      <Timeline data={data} />
    </section>)
  );
}

export default OurProcess