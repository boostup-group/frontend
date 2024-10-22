'use client';
import React, { useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import ThankYouModal from './thank-you-modal';

const ThankYouPage = () => {
    // State for controlling modal visibility
    const [modal, setModal] = useState(true); // Initially true to show the modal on load

    return (
        <>
            <ThankYouModal
                modal={modal} // Use the state variable here
                setModal={setModal} // Pass the state setter function to toggle modal
                classes={{
                    modalClass: 'theme-modal view-modal address-modal modal-lg',
                    modalHeaderClass: 'p-0',
                }}
            >
                <div className="right-sidebar-box">
                    <section className="py-24 relative">
                        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                            <div className="w-full flex-col justify-center items-center lg:gap-14 gap-10 inline-flex">
                                <CiCircleCheck className="text-7xl text-[#E50914]" />
                                <div className="w-full flex-col justify-center items-center gap-5 flex">
                                    <div className="w-full flex-col justify-center items-center gap-6 flex">
                                        <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                                            <h2 className="text-center text-gray-800 text-3xl font-bold font-manrope leading-normal">
                                                Merci pour votre commande !
                                            </h2>
                                            <p className="text-center text-gray-500 text-lg font-normal leading-relaxed">
                                                Pour recevoir votre produit, veuillez nous envoyer un message via WhatsApp au{' '}
                                                <a href="https://wa.me/+21654993969" target="_blank" className="font-bold">
                                                    54993969
                                                </a>
                                                <br />
                                                Nous attendons votre message !
                                            </p>
                                        </div>

                                        <div className="w-full justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                                            <button className="px-4 py-2 bg-[#E50914] rounded-md shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                                <a href="https://wa.me/+21654993969" target="_blank">
                                                    <span className="px-1.5 text-white text-md font-meduium leading-6 whitespace-nowrap flex justify-center items-center gap-2">
                                                        <FaWhatsapp className="text-2xl" />
                                                        WhatsApp
                                                    </span>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </ThankYouModal>
        </>
    );
};

export default ThankYouPage;
