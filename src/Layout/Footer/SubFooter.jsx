import React, { useContext } from 'react';
import Image from 'next/image';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import FooterSocial from './FooterSocial';
import paymentImage from '../../../public/assets/images/payment/1.png';

const SubFooter = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  return (
    <>
      <div className='sub-footer section-small-space'>
        {themeOption?.footer?.footer_copyright && (
          <div className='reserve'>
            <h6 className='text-content'>{themeOption?.footer?.copyright_content}</h6>
          </div>
        )}

        <div className='payment flex justify-center'>
          <Image src={paymentImage} alt='payment' height={35} width={302} />
        </div>
        <FooterSocial />
      </div>
      <div className='text-center'>          
        <p className='text-[8px] font-grey'>* THIS SITE IS NOT A PART OF THE NETFLIX WEBSITE OR NETFLIX INC. ADDITIONALLY, THIS SITE IS NOT ENDORSED BY NETFLIX IN ANY WAY. NETFLIX IS A TRADEMARK OF NETFLIX, INC.</p>
      </div>
    </>
  );
};

export default SubFooter;
