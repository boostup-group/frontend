import React from 'react'

const CTAOne = () => {
    return (
            <section class="relative mb-8 lg:mt-[-150px] overflow-hidden">
                <div class="container mx-auto px-4">
                    <div class="p-16 bg-[#E50914] rounded-md">
                        <div class="flex flex-wrap items-center justify-between -m-6 lg:px-20 sm:px-0">
                            <div class="w-full md:w-1/2 p-6">
                                <div class="md:max-w-full flex justify-center">
                                    <h2 class="font-bold lg:text-6xl sm:text-xl text-white">Ready to grow your online business?</h2>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 p-6">
                                <div class="flex flex-wrap justify-end -m-2">
                                    <div class="w-full xl:w-auto p-2">
                                        <button class="py-3 px-4 block w-full uppercase text-xs tracking-px text-gray-900 font-bold bg-white hover:bg-gray-50 rounded-md">
                                            <div class="flex items-center justify-center py-0.5">
                                                <p>Sign Up Now</p>
                                            </div>
                                        </button>
                                    </div>
                                    <div class="w-full xl:w-auto p-2">
                                        <button class="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-white hover:text-black bg-black rounded-md transition duration-300 overflow-hidden">
                                            <div class="flex items-center justify-center py-0.5">
                                                <svg class="mr-2.5" width="19" height="18" viewbox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z" stroke="#F9FAFB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                                <p>How it works</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default CTAOne