'use client';
import React, { useContext } from 'react';
import { Col } from 'reactstrap';
import Link from 'next/link';
import RatioImage from '@/Utils/RatioImage';
import BlogImageDetails from './BlogImageDetails';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import { placeHolderImage } from '../../../Data/CommonPath';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import { useSearchParams } from 'next/navigation';

const BlogCardDetails = ({ Blog }) => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const searchParams = useSearchParams();
  const querySidebar = searchParams?.get('sidebar');
  const styleObj = {
    no_sidebar: { colClass: { xxl: 12, xl: 12, lg: 12 } },
    left_sidebar: { class: 'order-lg-2', colClass: { xxl: 9, xl: 8, lg: 7 } },
    right_sidebar: { colClass: { xxl: 9, xl: 8, lg: 7 } },
  };
  console.log(Blog)
  return (
    <Col {...styleObj[querySidebar ?? themeOption?.blog?.blog_sidebar_type]?.colClass} className={`ratio_50 ${styleObj[querySidebar ?? themeOption?.blog?.blog_sidebar_type]?.class}`}>
      <h2 className='mb-4 text-4xl font-bold'>
        {Blog?.title}
      </h2>

      <div className='tags-sec mb-4'>
        <h5>{t('Tags')}:</h5>
        <ul className='contain-list'>
          {Blog?.tags?.map((tag, i) => (
            <li key={i}>
              <Link href={{ pathname: `/${i18Lang}`, query: { tag: tag?.slug } }}>{tag?.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='blog-detail-image rounded-3 mb-4'>

        {Blog?.blog_thumbnail?.original_url ? <RatioImage src={Blog?.blog_thumbnail?.original_url ? Blog?.blog_thumbnail?.original_url : placeHolderImage} className='bg-img' alt='' /> : null}
        <BlogImageDetails Blog={Blog} />
      </div>

      <div className='blog-detail-contain'>
        <p dangerouslySetInnerHTML={{ __html: Blog?.content }} />
      </div>

    </Col>
  );
};

export default BlogCardDetails;
