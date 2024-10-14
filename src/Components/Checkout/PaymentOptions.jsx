import CheckoutCard from './common/CheckoutCard';
import { Col, Input, Label, Row } from 'reactstrap';
import { RiBankCardLine } from 'react-icons/ri';
import { useTranslation } from '@/app/i18n/client';
import I18NextContext from '@/Helper/I18NextContext';
import { Fragment, useContext, useEffect, useState } from 'react';
import SettingContext from '@/Helper/SettingContext';
import { ModifyString } from '@/Utils/CustomFunctions/ModifyString';

const PaymentOptions = ({ values, setFieldValue }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const { settingData } = useContext(SettingContext);
  const [intial, setInitial] = useState('');
  useEffect(() => {
    setFieldValue('payment_method', 'bank');
    setInitial(0);
  }, []);
  return (
    <CheckoutCard icon={<RiBankCardLine />}>
      <div className='checkout-title'>
        <h4>{t('PaymentOption')}</h4>
      </div>
      <div className='checkout-detail'>
        <Row className='g-sm-4 g-3'>
          {settingData?.payment_methods?.map((elem, i) => (
            <Fragment key={i}>
              {elem?.status && (
                <Col xxl={6}>
                  <div className='payment-option'>
                    <div className='payment-category w-100'>
                      {/* <div className='form-check custom-form-check hide-check-box w-100'>
                        <Input
                          className='form-check-input'
                          id={elem?.name}
                          checked={i == intial}
                          type='radio'
                          name='payment_method'
                          onChange={() => {
                            setFieldValue('payment_method', elem.name);
                            setInitial(i);
                          }}
                        />
                        <Label className='form-check-label' htmlFor={elem.name}>
                          (elem?.title)
                        </Label>
                      </div> */}
                      <div className='form-check custom-form-check hide-check-box w-100'>
                        <Input
                          className='form-check-input'
                          id={elem?.name}
                          checked={i == intial}
                          type='radio'
                          name='payment_method'
                          onChange={() => {
                            setFieldValue('payment_method', elem.name);
                            setInitial(i);
                          }}
                        />
                        <Label className='form-check-label' htmlFor={elem.name}>
                          {elem?.title}
                        </Label>

                        {/* Add description below */}
                        <div className="form-description p-2">
                          {elem?.name == 'd17' && <p className='text-xs'>Envoyer le montant à notre numéro 54993969 via l'application D17.</p>}
                          {elem?.name == 'bank' && <p className='text-xs'>Un virement bancaire sur notre compte à Zitouna ou BT. Nous vous enverrons le numéro de compte par whatsapp.</p>}
                          {elem?.name == 'cash' && <p className='text-xs'>
                            Le paiement en espèces est disponible à: Tunis, Nabeul, Sfax. Nous vous communiquerons les informations par whatsapp.
                            </p>}
                          {elem?.name == 'click_to_pay' && <p className='text-xs'>Un paiement en ligne sécurisé avec votre carte bancaire tunisienne via la plateforme officielle Click To Pay.</p>}
                          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sunt fugit quasi ipsa magnam est pariatur aperiam dolor</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              )}
            </Fragment>
          ))}
        </Row>
      </div>
    </CheckoutCard>
  );
};

export default PaymentOptions;
