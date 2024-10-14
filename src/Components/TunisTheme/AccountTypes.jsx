
// const AccountTypes = () => {
//     return (
//         // <section className="container mx-auto py-20">
//         //     <p className="text-base lg:text-2xl font-medium">
//         //         Choose Your Plan
//         //     </p>
//         //     <h1 className="text-3xl lg:text-5xl font-bold mt-3">
//         //         Our Account Types 
//         //     </h1>
//         //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
//         //         <div className="flex flex-col gap-5 ">
//         //             <img src="https://happywishy.co.ke/wp-content/uploads/2021/09/netflixs-30-gift-card.png" alt="basic subscription" />
//         //             <p className="text-2xl font-semibold">Basic Subscription</p>
//         //             {/* <div className="flex items-center gap-2">
//         //                 <img src="/assets/italy.svg" alt="itersfgjds" />
//         //                 <p className="text-gray-500">
//         //                     Italian teacher
//         //                 </p>
//         //             </div> */}

//         //         </div>
//         //         <div className="flex flex-col gap-5 ">
//         //             <img src="https://happywishy.co.ke/wp-content/uploads/2021/09/netflixs-30-gift-card.png" alt="standard subscription" />
//         //             <p className="text-2xl font-semibold">Standard Subscription</p>
//         //             {/* <div className="flex items-center gap-2">
//         //                 <img src="/assets/spain.svg" alt="itersfgjds" />
//         //                 <p className="text-gray-500">
//         //                     Spanish teacher
//         //                 </p>
//         //             </div> */}

//         //         </div>
//         //         <div className="flex flex-col gap-5 ">
//         //             <img src="https://happywishy.co.ke/wp-content/uploads/2021/09/netflixs-30-gift-card.png" alt="premuim subscription" />
//         //             <p className="text-2xl font-semibold">Premium Subscription</p>
//         //             {/* <div className="flex items-center gap-2">
//         //                 <img src="/assets/uk.svg" alt="itersfgjds" />
//         //                 <p className="text-gray-500">
//         //                     English teacher
//         //                 </p>
//         //             </div> */}

//         //         </div>
//         //     </div>
//         // </section>
//         // <section class="pt-24 pb-28 bg-blueGray-50 overflow-hidden">
//         //     <div class="container px-4 mx-auto">
//         //         <h2 class="mb-24 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight md:max-w-xl mx-auto">Choose a plan that suits you. Grow business fast.</h2>
//         //         <div class="mb-24 md:max-w-6xl mx-auto">
//         //             <div class="flex flex-wrap -m-4">
//         //                 <div class="w-full md:w-1/3 p-4">
//         //                     <div class="flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-4xl backdrop-blur-sm">
//         //                         <div>
//         //                             <span class="mb-9 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug">Basic</span>
//         //                             <h3 class="mb-1 text-4xl text-gray-900 font-bold leading-none">Free</h3>
//         //                             <p class="mb-6 text-sm text-gray-600 font-medium leading-relaxed">No credit card required</p>
//         //                             <p class="mb-9 text-gray-600 font-medium leading-relaxed">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Egestas lacus, blan dit pellentesque.</p>
//         //                         </div>
//         //                         <button class="py-4 px-9 w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200" type="button">Buy Now Now</button>
//         //                     </div>
//         //                 </div>
//         //                 <div class="w-full md:w-1/3 p-4">
//         //                     <div class="relative flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-4xl shadow-9xl backdrop-blur-sm">
//         //                         <img class="absolute -top-11 -right-8" src="flaro-assets/images/pricing/popular.png" alt=""/>
//         //                             <img class="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="flaro-assets/images/pricing/gradient3.svg" alt=""/>
//         //                                 <div class="relative z-10">
//         //                                     <span class="mb-9 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug">Standard</span>
//         //                                     <h3 class="mb-1 text-4xl text-gray-900 font-bold leading-none">$19/mo</h3>
//         //                                     <p class="mb-6 text-sm text-gray-600 font-medium leading-relaxed">Billed Annually</p>
//         //                                     <p class="mb-9 text-gray-600 font-medium leading-relaxed">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Egestas lacus, blan dit pellentesque.</p>
//         //                                     <button class="py-4 px-10 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Buy Now Now</button>
//         //                                 </div>
//         //                             </div>
//         //                     </div>
//         //                     <div class="w-full md:w-1/3 p-4">
//         //                         <div class="flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-4xl backdrop-blur-sm">
//         //                             <div>
//         //                                 <span class="mb-9 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug">Pro</span>
//         //                                 <h3 class="mb-1 text-4xl text-gray-900 font-bold leading-none">$49/mo</h3>
//         //                                 <p class="mb-6 text-sm text-gray-600 font-medium leading-relaxed">Billed Annually</p>
//         //                                 <p class="mb-9 text-gray-600 font-medium leading-relaxed">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Egestas lacus, blan dit pellentesque.</p>
//         //                             </div>
//         //                             <button class="py-4 px-9 w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200" type="button">Buy Now Now</button>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //             <p class="mb-4 text-sm text-gray-500 text-center font-medium leading-relaxed">Trusted by secure payment service</p>
//         //             <div class="flex flex-wrap justify-center">
//         //                 <div class="w-auto">
//         //                     <a href="#">
//         //                         <img src="flaro-assets/logos/brands/stripe.svg" alt=""/>
//         //                     </a>
//         //                 </div>
//         //                 <div class="w-auto">
//         //                     <a href="#">
//         //                         <img src="flaro-assets/logos/brands/amex.svg" alt=""/>
//         //                     </a>
//         //                 </div>
//         //                 <div class="w-auto">
//         //                     <a href="#">
//         //                         <img src="flaro-assets/logos/brands/mastercard.svg" alt=""/>
//         //                     </a>
//         //                 </div>
//         //                 <div class="w-auto">
//         //                     <img src="flaro-assets/logos/brands/paypal.svg" alt=""/>
//         //                 </div>
//         //                 <div class="w-auto">
//         //                     <a href="#">
//         //                         <img src="flaro-assets/logos/brands/visa.svg" alt=""/>
//         //                     </a>
//         //                 </div>
//         //                 <div class="w-auto">
//         //                     <a href="#">
//         //                         <img src="flaro-assets/logos/brands/apple-pay.svg" alt=""/>
//         //                     </a>
//         //                 </div>
//         //             </div>
//         //         </div>
//         // </section>
//     );
// }

// export default AccountTypes

"use client"

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle2, Save } from "lucide-react";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const PricingHeader = ({ title, subtitle }) => (
    <div className="container flex flex-col items-center px-4 mx-auto mb-4">
        <p className="text-[#E50914] lg:text-2xl font-medium ">
            {subtitle}
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold mt-3">
            {title}
        </h1>
        <br />
    </div>
);

const PricingSwitch = ({ onSwitch }) => (
    <Tabs defaultValue="0" className="w-full flex justify-center mx-auto" onValueChange={onSwitch}>
        <TabsList className="py-4 px-2">
            <TabsTrigger value="0" className="text-base">
                3 Mois
            </TabsTrigger>
            <TabsTrigger value="1" className="text-base">
                6 Mois
            </TabsTrigger>
            <TabsTrigger value="2" className="text-base">
                12 Mois
            </TabsTrigger>
        </TabsList>
    </Tabs>
);

const PricingCard = ({ pricingPeriod, title, weeklyPrice, monthlyPrice, yearlyPrice, description, features, actionLabel, popular, exclusive, save}) => (
    <Card
        className={cn(`w-96 flex flex-col justify-between py-6 px-4 ${popular ? "border-rose-400" : "border-zinc-700"} sm:mx-0`, {
            "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
                exclusive,
        })}>
        <div>
            <CardHeader className="pb-10 pt-6">
                {pricingPeriod === 'yearly' && yearlyPrice && monthlyPrice ? (
                    <div className="flex justify-between">
                        <CardTitle className="text-zinc-700 dark:text-zinc-300 text-xl">{title}</CardTitle>
                        <div
                            className={cn("px-3 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white", {
                                "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ": popular,
                            })}>
                            Économisez DT {save}
                        </div>
                    </div>
                ) : (
                    <CardTitle className="text-zinc-700 dark:text-zinc-300 text-xl">{title}</CardTitle>
                )}
                <div className="flex gap-1">
                    <h3 className="text-4xl font-bold">
                        {pricingPeriod === 'yearly' && yearlyPrice ? "DT " + yearlyPrice
                            : pricingPeriod === 'monthly' && monthlyPrice ? "DT " + monthlyPrice
                                : pricingPeriod === 'weekly' && weeklyPrice ? "DT " + weeklyPrice
                                    : "Custom"}
                    </h3>
                    <span className="flex flex-col justify-end text-sm mb-1">
                        {pricingPeriod === 'yearly' ? "/ 12 Mois"
                            : pricingPeriod === 'monthly' ? "/ 6 Mois"
                                : pricingPeriod === 'weekly' ? "/ 3 Mois"
                                    : null}
                    </span>
                </div>
                <CardDescription className="pt-2 h-16">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                {features.map((feature) => (
                    <CheckItem key={feature} text={feature} />
                ))}
            </CardContent>
        </div>
        <CardFooter className="mt-4">
            <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-[#E50914] text-white dark:bg-white px-8 py-4 font-bold  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                {actionLabel}
            </Button>
        </CardFooter>
    </Card>
);


// Check item component for features list
const CheckItem = ({ text }) => (
    <div className="flex gap-2">
        <CheckCircle2 size={18} className="my-auto text-green-400" />
        <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
    </div>
);

export default function AccountTypes() {
    const [pricingPeriod, setPricingPeriod] = useState("weekly");
    const togglePricingPeriod = (value) => {
        if (value === "0") setPricingPeriod("weekly");
        else if (value === "1") setPricingPeriod("monthly");
        else if (value === "2") setPricingPeriod("yearly");
    };

    const plans = [
        {
            title: "Abonnement Netflix Essentiel",
            weeklyPrice: 65,
            monthlyPrice: 109,
            yearlyPrice: 189,
            save: 70,
            description: "Parfait si vous regardez seul(e)",
            features: ["1 seul appareil", "Résolution 4K (Ultra HD)", "TV, ordinateur, smartphone, tablette"],
            actionLabel: "S'abonner",
        },
        {
            title: "Abonnement Netflix Standard",
            weeklyPrice: 119,
            monthlyPrice: 219,
            yearlyPrice: 399,
            save: 80,
            description: "Parfait pour deux personnes vivant sous le même toit",
            features: ["2 appareils en même temps", "Résolution 1080p (Full HD)", "TV, ordinateur, smartphone, tablette"],
            actionLabel: "S'abonner",
            popular: true,
        },
        {
            title: "Abonnement Netflix Premium",
            weeklyPrice: 165,
            monthlyPrice: 299,
            yearlyPrice: 539,
            save: 120,
            description: "Parfait pour les familles qui ont plusieurs appareils",
            features: ["4 appareils en même temps", "Résolution 4K (Ultra HD)", "TV, ordinateur, smartphone, tablette"],
            actionLabel: "S'abonner",
            exclusive: true,
        },
    ];

    return (
        <div className="py-8" id="pricing">
            <PricingHeader title="Nos Offres" subtitle="Choisissez Le Type De Compte Qui Vous Convient Le Mieux" />
            <PricingSwitch onSwitch={togglePricingPeriod} />
            <section className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8 mt-8">
                {plans.map((plan) => {
                    return <PricingCard key={plan.title} {...plan} pricingPeriod={pricingPeriod} />;
                })}
            </section>
        </div>
    );
}