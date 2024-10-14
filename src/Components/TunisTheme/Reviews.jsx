'use client';

import Image from "next/image";

import oussemaAvatar from "../../../public/assets/oussema.png";
import dhekraAvatar from "../../../public/assets/dhekra.png";
import samehAvatar from "../../../public/assets/sameh.jpg";
import faresAvatar from "../../../public/assets/fares.jpg";
import hichemAvatar from "../../../public/assets/hichem.png";

import { twMerge } from "tailwind-merge";
import { motion } from 'framer-motion';
import React from "react";

const reviews = [
    {
        text: "Votre partenaire malen borchani excelle en communication et en relationnel, la qualité, le traitement et le service sont toujours au point, ce qui fait que nous renouvelons nos abonnement toujours via votre service.",
        imageSrc: oussemaAvatar.src,
        name: "Oussema",
        username: "58 68x xxx",
    },
    {
        text: "Merciii infiniment pour votre professionnalisme et votre service parfait , je suis reconnaissante à votre accueil chaleureux et la réactivité ❤️ une expérience parfaite et un bon plan à recommander vivement ❤️❤️ netflix And chill 🎥",
        imageSrc: dhekraAvatar.src,
        name: "Dhekra",
        username: "28 65x xxx",
    }, 
    {
        text: "Merci pour le merveilleux service. Je n'ai aucun problème avec les services. Merci beaucoup.",
        imageSrc: samehAvatar.src,
        name: "Sameh",
        username: "56 26x xxx",
    },
    {
        text: "Mon avis : excellent service , toujours à l’écoute du client , prise en charge immédiate des réclamations, un grand merci à Malek et Akrem",
        imageSrc: faresAvatar.src,
        name: "Fares",
        username: "98 60x xxx",
    },
    {
        text: "Bonjour Akrem&Malek, Vous êtes simplement les Meilleurs fournisseurs de Netflix avec qui je me suis abonné. Je recommande vivement et les yeux fermés. Bonne continuation Cordialement Hichem",
        imageSrc: hichemAvatar.src,
        name: "Hichem",
        username: "53 53x xxx",
    },
    {
        text: "Votre partenaire malen borchani excelle en communication et en relationnel, la qualité, le traitement et le service sont toujours au point, ce qui fait que nous renouvelons nos abonnement toujours via votre service.",
        imageSrc: oussemaAvatar.src,
        name: "Oussema",
        username: "58 68x xxx",
    },
    {
        text: "Merciii infiniment pour votre professionnalisme et votre service parfait , je suis reconnaissante à votre accueil chaleureux et la réactivité ❤️ une expérience parfaite et un bon plan à recommander vivement ❤️❤️ netflix And chill 🎥",
        imageSrc: dhekraAvatar.src,
        name: "Dhekra",
        username: "28 65x xxx",
    }, 
    {
        text: "Merci pour le merveilleux service. Je n'ai aucun problème avec les services. Merci beaucoup.",
        imageSrc: samehAvatar.src,
        name: "Sameh",
        username: "56 26x xxx",
    },
    {
        text: "Mon avis : excellent service , toujours à l’écoute du client , prise en charge immédiate des réclamations, un grand merci à Malek et Akrem",
        imageSrc: faresAvatar.src,
        name: "Fares",
        username: "98 60x xxx",
    },
    {
        text: "Bonjour Akrem&Malek, Vous êtes simplement les Meilleurs fournisseurs de Netflix avec qui je me suis abonné. Je recommande vivement et les yeux fermés. Bonne continuation Cordialement Hichem",
        imageSrc: hichemAvatar.src,
        name: "Hichem",
        username: "53 53x xxx",
    },
];

const firstColumn = reviews.slice(0, 3);
const secondColumn = reviews.slice(3, 6);
const thirdColumn = reviews.slice(6, 9);

const ReviewsColumn = (props) => {
    return (
        <div className={props.className}>
            <motion.div animate={{
                translateY: '-50%',
            }}
            transition={{ 
                duration: props.duration || 10,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
            }}
             className="flex flex-col gap-6">
                {[...new Array(2)].fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {props.reviews.map(({ text, imageSrc, name, username }) => (
                            <div className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-md w-full">
                                <div>{text}</div>
                                <div className="flex items-center gap-2 mt-5">
                                    <div>
                                        <Image
                                            src={imageSrc}
                                            width={40}
                                            height={40}
                                            alt={name}
                                            className="w-10 h-10 rounded-full" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-meduim tracking-tight leading-5">{name}</div>
                                        <div className="leading-5 tracking-tight">{username}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

const Reviews = () => {
    return (
        <section class="bg-white overflow-hidden">
            <div class="container flex flex-col items-center px-4 mx-auto mb-6">
                <p className="text-[#E50914] lg:text-2xl font-medium">
                    Ce Que Disent Nos Clients
                </p>
                <h1 className="text-3xl lg:text-5xl font-bold mt-3">
                    Avis Clients
                </h1>
                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)] max-h-[738px] overflow-hidden">
                    <ReviewsColumn reviews={firstColumn} duration={15} />
                    <ReviewsColumn reviews={secondColumn} className="hidden md:block" duration={19} />
                    <ReviewsColumn reviews={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    )
};

export default Reviews