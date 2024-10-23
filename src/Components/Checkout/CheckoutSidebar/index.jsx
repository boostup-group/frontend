import React, { useContext, useEffect, useState } from 'react';
import { Card, Col } from 'reactstrap';
import SettingContext from '@/Helper/SettingContext';
import { useTranslation } from '@/app/i18n/client';
import SidebarProduct from './SidebarProduct';
import useCreate from '@/Utils/Hooks/useCreate';
import { CheckoutAPI } from '@/Utils/AxiosUtils/API';
import CartContext from '@/Helper/CartContext';
import Loader from '@/Layout/Loader';
import PointWallet from './PointWallet';
import I18NextContext from '@/Helper/I18NextContext';
import ApplyCoupon from './ApplyCoupon';
import PlaceOrder from './PlaceOrder';
import Cookies from 'js-cookie';

const CheckoutSidebar = ({ values, setFieldValue }) => {
  const [storeCoupon, setStoreCoupon] = useState();
  const { convertCurrency } = useContext(SettingContext);
  const { cartProducts } = useContext(CartContext);
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');

  const isAuth = Cookies.get('uat');

  const { data, mutate, isLoading } = useCreate(CheckoutAPI, false, false, true, false, false);

  // Recalculate total based on cart products, coupon, points, etc.
  useEffect(() => {
    if (values['payment_method']) {
      values['variation_id'] = '';
      delete values['total'];
      values['products'] = cartProducts;
      values['return_url'] = `${process.env.PAYMENT_RETURN_URL}/${i18Lang}/account/order/details`;
      values['cancel_url'] = process.env.PAYMENT_CANCEL_URL;

      // Recalculate total when products, payment method, or other fields change
      if (values['products']?.length > 0) {
        // Recalculate total (before coupon)
        const subTotal = values.products.reduce((total, product) => total + product.sub_total, 0);

        setFieldValue('sub_total', subTotal);
        let total = subTotal; // Start with subtotal for total calculation

        // Check if coupon discount is applied and adjust the total
        if (storeCoupon && data?.data?.total?.coupon_total_discount) {
          const couponDiscount = data?.data?.total?.coupon_total_discount;
          total -= couponDiscount; // Apply coupon discount
        }

        setFieldValue('total', total); // Set the total after discount
        mutate({ ...values, coupon: storeCoupon }); // Ensure the coupon is included in the mutation
      }
    }
  }, [values['payment_method'], cartProducts, storeCoupon]); // Only keep relevant dependencies

  return (
    <Col xxl='4' xl='5'>
      <Card className='pos-detail-card'>
        <SidebarProduct values={values} setFieldValue={setFieldValue} />
        <div className='pos-loader'>
          <ul className={`summary-total position-relative`}>
            {isLoading && <Loader />}
            <li>
              <h4>{t('Subtotal')}</h4>
              <h4 className='price'>{values.sub_total ? convertCurrency(values.sub_total) : t(`Notcalculatedyet`)}</h4>
            </li>

            <PointWallet values={values} setFieldValue={setFieldValue} data={data} />

            <ApplyCoupon
              values={values}
              setFieldValue={setFieldValue}
              data={data}
              storeCoupon={storeCoupon}
              setStoreCoupon={setStoreCoupon}
            />

            <li className='list-total'>
              <h4>{t('Total')}</h4>
              <h4 className='price'>{values.total ? convertCurrency(values.total) : t(`Notcalculatedyet`)}</h4>
            </li>
          </ul>
        </div>
        <PlaceOrder values={values} />
      </Card>
    </Col>
  );
};

export default CheckoutSidebar;
