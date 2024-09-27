'use client';

import React, { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductIdsContext from '@/Helper/ProductIdsContext';
import { HomePageAPI } from '@/Utils/AxiosUtils/API';

import request from '@/Utils/AxiosUtils';



import BrowserFaq from '../Faq';
import AccountTypes from './AccountTypes';
import CTAOne from './CTAs/CTAOne';
import QuickBuy from './CTAs/QuickBuy';
import HomeBanner from './HomeBanner';
import OurProcess from './OurProcess';
import Reviews from './Reviews';
import NewsLetter from '../ParisTheme/NewsLetter';

const TunisTheme = () => {
  const { setGetProductIds, isLoading: productLoader } = useContext(ProductIdsContext);
  const { data, isLoading, refetch } = useQuery(['paris'], () => request({ url: HomePageAPI, params: { slug: 'paris' } }), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (res) => res?.data,
  });
  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('skeleton-body');
    } else {
      document.body.classList.remove('skeleton-body');
    }

    if (data?.content?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.content?.products_ids))?.join(',') });
    }
  }, [isLoading]);
  if (!data?.content) return null;
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

      {data?.content?.news_letter?.status && <QuickBuy dataAPI={data?.content?.news_letter} />}

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