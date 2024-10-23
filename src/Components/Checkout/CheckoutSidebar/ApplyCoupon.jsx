import React, { useContext, useState } from 'react';
import { Input } from 'reactstrap';
import Image from 'next/image';
import useCreate from '@/Utils/Hooks/useCreate';
import { CheckoutAPI } from '@/Utils/AxiosUtils/API';
import SettingContext from '@/Helper/SettingContext';
import Btn from '@/Elements/Buttons/Btn';
import { useTranslation } from '@/app/i18n/client';
import I18NextContext from '@/Helper/I18NextContext';
import { RiCheckFill } from 'react-icons/ri';

const ApplyCoupon = ({ data, setFieldValue, storeCoupon, setStoreCoupon, values }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const [errorCoupon, setErrorCoupon] = useState('');
  const [coupon, setCoupon] = useState('');
  const [mydata, setmydata] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(false);
  const { convertCurrency } = useContext(SettingContext);

  const { mutate, isLoading } = useCreate(
    CheckoutAPI,
    false,
    false,
    'No',
    (resDta) => {
      setmydata(resDta);
      if (resDta?.status === 200 || resDta?.status === 201) {
        setErrorCoupon('');
        if (storeCoupon !== '') {
          setAppliedCoupon('applied');
          // Update the total value with the discount
          const newSubTotal = values.sub_total - resDta?.data?.total?.coupon_total_discount;
          setFieldValue('total', newSubTotal); // Update the total field with the new total after discount
        }
      } else {
        setErrorCoupon(resDta?.response?.data?.message);
      }
    },
    false,
  );
  const onCouponApply = (value) => {
    setStoreCoupon(value);
    setFieldValue('coupon', value);
    if (values['products']?.length > 0) {
      mutate({ ...values, coupon: value });
    }
  };
  console.log('values', values);
  const removeCoupon = () => {
    setAppliedCoupon(null);
    setFieldValue('coupon', '');
    setStoreCoupon('');
    mutate({ ...values });
  };
  console.log('res data', mydata);
  return (
    <>
      {appliedCoupon == 'applied' ? (
        <li className='coupon-sec'>
          <div className='apply-sec mb-3'>
            <div className='align-center'>
              {/* <Image src={'/assets/images/offer.gif'} className='img-fluid' height={20} width={20} alt='offer' /> */}
              <RiCheckFill className='text-success bg-white rounded-full' />
              <h4>
              Vous avez économisé <span>{convertCurrency(mydata?.data?.total?.coupon_total_discount)}</span> avec ce code 🎉 <p>Coupon appliqué.</p>
              </h4>
            </div>
          </div>
          <a onClick={() => removeCoupon()}>{t('Remove')}</a>
        </li>
      ) : (
        <li className='coupon-sec'>
          <div className='coupon-box mt-2 mb-3 d-flex w-100'>
            <div className='input-group'>
              <Input type='text' placeholder={t('EnterCoupon')} onChange={(e) => setCoupon(e.target.value)} />
              <Btn className='btn-apply' loading={Number(isLoading)} onClick={() => onCouponApply(coupon)}>
                {t('Apply')}
              </Btn>
            </div>
          </div>
          <div className='invalid-feedback d-block'>{errorCoupon}</div>
        </li>
      )}
    </>
  );
};

export default ApplyCoupon;
