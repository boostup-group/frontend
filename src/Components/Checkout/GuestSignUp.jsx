import React, { useContext, useEffect } from 'react';
import { Row } from 'reactstrap';
import { RiAddLine, RiMapPinLine, RiUser2Line } from 'react-icons/ri';
import { useTranslation } from '@/app/i18n/client';
import CheckoutCard from './common/CheckoutCard';
import CustomModal from '../Common/CustomModal';
import AddAddressForm from './common/AddAddressForm';
import I18NextContext from '@/Helper/I18NextContext';
import ShowAddress from './ShowAddress';
import GuestRegisterForm from '../Auth/Register/GuestRegisterForm';

const GuestSignUp = ({ type, title, address, modal, mutate, isLoading, setFieldValue }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');

  useEffect(() => {
    address?.length > 0 && setFieldValue(`${type}_address_id`, address[0].id);
  }, [address]);
  return (
    <>
      <CheckoutCard icon={<RiUser2Line />}>
        <div className='checkout-title'>
          <h4>
            {t(title)}
          </h4>
         
        </div>
        <div className='checkout-detail'>
          <GuestRegisterForm />
        </div>
      </CheckoutCard>
    </>
  );
};

export default GuestSignUp;
