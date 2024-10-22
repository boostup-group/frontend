import React, { useContext } from 'react';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import { Col } from 'reactstrap';
import { FlipWords } from '@/Components/ui/flip-words';

const TopbarSlider = ({ customClass }) => {
  const { themeOption } = useContext(ThemeOptionContext);
  return (
    <>
      <Col lg={9} xxl={6} className='d-lg-block lg:text-sm sm:text-xs py-1.5 d-none'>
        <div className='header-offer'>
          <div className='notification-slider no-arrow'>
            {themeOption?.header?.top_bar_content.length > 0 &&
              themeOption?.header?.top_bar_content?.map((elem, i) => (
                <div key={i}>
                  <div className={`timer-notification`}>
                    <h6>
                      <div dangerouslySetInnerHTML={{ __html: elem?.content }} />
                    </h6>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Col>

      <Col lg={9} xxl={6} className='d-block d-lg-none lg:text-sm sm:text-xs py-1.5 flex items-center justify-center'>
        <div className='header-offer flex justify-center'>
          <div className='notification-slider'>

            <div>
              <div className={`timer-notification`}>
                <h6 className='text-white'>
                  <FlipWords 
                  className='text-white font-medium text-md' 
                  words={['Nouveau client ?', '10% de réduction sur votre premier abonnement annuel', 'avec le code NEW10']} speed={5} />
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default TopbarSlider;
