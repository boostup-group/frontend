'use client';
import { useContext, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'reactstrap';
import Breadcrumb from '../Common/Breadcrumb';
import { useQuery } from '@tanstack/react-query';
import request from '@/Utils/AxiosUtils';
import { FaqAPI } from '@/Utils/AxiosUtils/API';
import Loader from '@/Layout/Loader';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import emptyImage from '../../../public/assets/svg/no-product.svg';
import NoDataFound from '../Common/NoDataFound';

const BrowserFaq = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const { data, isLoading } = useQuery([FaqAPI], () => request({ url: FaqAPI, params: { status: 1 } }), {
    enabled: true,
    refetchOnWindowFocus: false,
    select: (data) => data?.data?.data,
  });

  // console.log('faqs', data);
  // if (isLoading) return <Loader />;
  return (
    <>
      {/* <Breadcrumb title={`Faq's`} subNavigation={[{ name: `Faq's` }]} /> */}
      {data?.length > 0 ? (
        <section className='faq-box-contain section-b-space mb-8'>
          <div className="container flex flex-col items-center px-4 mx-auto mb-16">
            <p className="text-[#E50914] lg:text-2xl font-medium">
              {t('faqDescription')}
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mt-3">
              {t('FrequentlyAskedQuestions')}
            </h1>
          </div>
          <Container className='flex justify-center'>
            {/* <Col xl={5}>
                <div className='faq-contain'>
                  <h2>{t('FrequentlyAskedQuestions')}</h2>
                  <p>{t('faqDescription')}</p>
                </div>
              </Col> */}
            <Col className='lg:px-[65px] md:px-4'>
              <div className='faq-accordion'>
                <Accordion open={open} toggle={toggle}>
                  {data?.map((faq, i) => (
                    <AccordionItem>
                      <AccordionHeader targetId={i + 1}>
                        {faq?.title}
                        <RiArrowDownSLine />
                      </AccordionHeader>
                      <AccordionBody accordionId={i + 1}>
                        {faq?.description?.includes('●') ? (
                          <p>
                            <ul className="flex flex-col">
                              {faq?.description
                                .split('\n') // Split by newlines first to handle paragraphs correctly
                                .filter(item => item.trim() !== '')
                                .map((item, index) => (
                                  <li key={index} className={item.trim().startsWith('●') ? 'ml-8' : ''}>
                                    {item.trim().startsWith('●') ? item.trim() : item.trim()} {/* If it starts with ●, keep it */}
                                  </li>
                                ))}
                            </ul>
                          </p>
                        ) : (
                          <p>{faq?.description}</p>
                        )}
                      </AccordionBody>

                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Col>
          </Container>
        </section>
      ) : (
        <NoDataFound
          data={{
            customClass: 'no-data-added',
            imageUrl: emptyImage,
            title: 'No FAQ Found',
            description: 'I regret to inform you that the FAQ is currently unavailable.',
            height: 300,
            width: 300,
          }}
        />
      )}
    </>
  );
};

export default BrowserFaq;
