'use client';

import React, { useContext, useEffect } from 'react';

import BrowserFaq from '../Faq';
import AccountTypes from './AccountTypes';
import CTAOne from './CTAs/CTAOne';
import QuickBuy from './CTAs/QuickBuy';
import HomeBanner from './HomeBanner';
import OurProcess from './OurProcess';
import Reviews from './Reviews';
import { HomePageAPI } from '@/Utils/AxiosUtils/API';
import { useQuery } from '@tanstack/react-query';



import ProductIdsContext from '@/Helper/ProductIdsContext';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import request from '@/Utils/AxiosUtils';

const TunisTheme = () => {

  // const { data, isLoading, refetch } = useQuery(['madrid'], () => request({ url: HomePageAPI, params: { slug: 'madrid' } }), {
  //   enabled: false,
  //   refetchOnWindowFocus: false,
  //   select: (res) => res?.data,
  // });
  // // useEffect(() => {
  // //   refetch();
  // // }, []);

  // useEffect(() => {
  //   document.documentElement.style.setProperty('--theme-color', '#ff0000');
  //   refetch();
  //   return () => {
  //     document.documentElement.style.removeProperty('--theme-color');
  //   };
  // }, []);


  // const { themeOption } = useContext(ThemeOptionContext);
  // const { setGetProductIds, isLoading: productLoader } = useContext(ProductIdsContext);
  // const { data, isLoading, refetch } = useQuery(['tokyo'], () => request({ url: HomePageAPI, params: { slug: 'tokyo' } }), { enabled: false, refetchOnWindowFocus: false, select: (res) => res?.data });
  // useEffect(() => {
  //   const headerTops = document.getElementsByClassName('header-top');

  //   // document.documentElement.style.setProperty('--theme-color', '#E50914');
  //   let timer = setTimeout(() => {
  //     for (const headerTop of headerTops) {
  //       headerTop.classList.add('bg-dark');
  //     }
  //   }, 0);

  //   refetch();

  //   return () => {
  //     document.documentElement.style.removeProperty('--theme-color');
  //     for (const headerTop of headerTops) {
  //       headerTop.classList.remove('bg-dark');
  //     }
  //     clearTimeout(timer);
  //   };
  // }, []);

  // useEffect(() => {
  //   // setThemeColor(themeOption?.general?.primary_color ?? "#E50914" )
  //   if (isLoading) {
  //     document.body.classList.add('skeleton-body');
  //   } else {
  //     document.body.classList.remove('skeleton-body');
  //   }
  // }, [isLoading]);

  return (
    <>
      <HomeBanner />
      {/* {data?.content?.news_letter?.status && <NewsLetter dataAPI={data?.content?.news_letter} />} */}
      {/* {data?.content?.news_letter?.status && <QuickBuy dataAPI={data?.content?.news_letter} />} */}

      <CTAOne />

      <AccountTypes />
      {/* <QuickBuy /> */}
      <OurProcess />
      <Reviews />
      <BrowserFaq />

      <QuickBuy />

      {/* 
      {data?.content?.categories_icon_list?.status && <CategoryMenu dataAPI={data?.content?.categories_icon_list} />}

      {data?.content?.coupons?.status && <OfferBanner dataAPI={data?.content?.coupons} height={138} width={1585} classes={{ fluidClass: 'sale-banner' }}/>}

      {data?.content?.featured_banners?.status && data?.content?.featured_banners?.banners?.length > 0 && <FeatureBanner bannersData={data?.content?.featured_banners?.banners} />}

      <ProductCard dataAPI={data?.content} />

      {data?.content?.full_width_banner?.status && <OfferBanner dataAPI={data?.content?.full_width_banner} height={343} width={1524} />}

      {data?.content?.slider_products?.status && <TopSelling dataAPI={data?.content?.slider_products} classes={{ colClass: { sm: 6, xl: 4, xxl: 3 } }} />}

      {data?.content?.news_letter?.status && <NewsLetter dataAPI={data?.content?.news_letter} />}
      {themeOption?.general?.sticky_cart_enable && themeOption?.general?.cart_style !== 'cart_sidebar' && <StickyCart />} */}
    </>
  );
};

export default TunisTheme;