'use client';

import Image from "next/image";

import avatar from "../../../public/assets/avatar.jpg";
import { twMerge } from "tailwind-merge";
import { motion } from 'framer-motion';
import React from "react";

const reviews = [
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint maxime ipsa laudantium libero id illum temporibus dolorum rem? Odit in voluptate ipsum pariatur suscipit repellat, deleniti ratione aspernatur accusantium.",
        imageSrc: avatar.src,
        name: "John Doe",
        username: "@johndoe",
    },
    {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti molestiae vero dolorem blanditiis consequuntur id, iure est ut. Eius modi reiciendis quidem non nulla commodi, fugiat in quibusdam dolorum.",
        imageSrc: avatar.src,
        name: "Man Deep",
        username: "@mandeep",
    }, {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint maxime ipsa laudantium libero id illum temporibus dolorum rem? Odit in voluptate ipsum pariatur suscipit repellat, deleniti ratione aspernatur accusantium.",
        imageSrc: avatar.src,
        name: "John Doe",
        username: "@johndoe",
    },
    {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti molestiae vero dolorem blanditiis consequuntur id, iure est ut. Eius modi reiciendis quidem non nulla commodi, fugiat in quibusdam dolorum.",
        imageSrc: avatar.src,
        name: "Man Deep",
        username: "@mandeep",
    }, {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint maxime ipsa laudantium libero id illum temporibus dolorum rem? Odit in voluptate ipsum pariatur suscipit repellat, deleniti ratione aspernatur accusantium.",
        imageSrc: avatar.src,
        name: "John Doe",
        username: "@johndoe",
    },
    {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti molestiae vero dolorem blanditiis consequuntur id, iure est ut. Eius modi reiciendis quidem non nulla commodi, fugiat in quibusdam dolorum.",
        imageSrc: avatar.src,
        name: "Man Deep",
        username: "@mandeep",
    }, {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint maxime ipsa laudantium libero id illum temporibus dolorum rem? Odit in voluptate ipsum pariatur suscipit repellat, deleniti ratione aspernatur accusantium.",
        imageSrc: avatar.src,
        name: "John Doe",
        username: "@johndoe",
    },
    {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti molestiae vero dolorem blanditiis consequuntur id, iure est ut. Eius modi reiciendis quidem non nulla commodi, fugiat in quibusdam dolorum.",
        imageSrc: avatar.src,
        name: "Man Deep",
        username: "@mandeep",
    }, {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint maxime ipsa laudantium libero id illum temporibus dolorum rem? Odit in voluptate ipsum pariatur suscipit repellat, deleniti ratione aspernatur accusantium.",
        imageSrc: avatar.src,
        name: "John Doe",
        username: "@johndoe",
    },
    {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti molestiae vero dolorem blanditiis consequuntur id, iure est ut. Eius modi reiciendis quidem non nulla commodi, fugiat in quibusdam dolorum.",
        imageSrc: avatar.src,
        name: "Man Deep",
        username: "@mandeep",
    }
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
                <p className="text-base lg:text-2xl font-medium">
                    What Our Clients Say
                </p>
                <h1 className="text-3xl lg:text-5xl font-bold mt-3">
                    Reviews
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