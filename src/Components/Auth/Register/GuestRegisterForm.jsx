import { useContext, useEffect } from 'react';
import { Form, Formik } from 'formik';
import { Col, Row } from 'reactstrap';
import { useTranslation } from '@/app/i18n/client';
import I18NextContext from '@/Helper/I18NextContext';
import { RegisterAPI } from '@/Utils/AxiosUtils/API';
import useCreate from '@/Utils/Hooks/useCreate';
import { YupObject, emailSchema, nameSchema, passwordConfirmationSchema, phoneSchema } from '@/Utils/Validation/ValidationSchemas';
import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
import { AllCountryCode } from '../../../../Data/AllCountryCode';
import SearchableSelectInput from '@/Components/Common/InputFields/SearchableSelectInput';
import { useHandleLoginGuest } from '@/Utils/Hooks/Auth/useLogin';
import { RiChat2Fill, RiMailFill, RiSmartphoneLine, RiUserFill } from 'react-icons/ri';

const GuestRegisterForm = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const { mutate: registerMutate, isLoading: isRegisterLoading } = useCreate(RegisterAPI, false, false, 'Inscription Réussie');
  const { mutate: loginMutate } = useHandleLoginGuest(); // Use the login mutation

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: 'hello123',
        password_confirmation: 'hello123',
        country_code: '216',
        phone: '',
      }}
      validationSchema={YupObject({
        name: nameSchema,
        email: emailSchema,
        password_confirmation: passwordConfirmationSchema,
        phone: phoneSchema,
      })}
      onSubmit={(values) => {
        // Delay the submission
        setTimeout(() => {
          // Register the user
          console.log("Submitting registration...");
          registerMutate(values, {
            onSuccess: (response) => {
              console.log('Registration successful:', response);
              // Trigger login only after registration success
              loginMutate({
                email: values.email,
                password: values.password,
              }, {
                onSuccess: (loginResponse) => {
                  console.log('Login successful:', loginResponse);
                },
                onError: (loginError) => {
                  console.error('Login failed:', loginError);
                }
              });
            },
            onError: (error) => {
              console.error('Registration failed:', error);
            },
          });
        }, 2000); // 1 second delay before submitting
      }}
    >
      {({ values, validateForm }) => {
        useEffect(() => {
          // Manually validate the form
          validateForm().then((validationErrors) => {
            const noErrors = Object.keys(validationErrors).length === 0;
            if (noErrors) {
              console.log('Form is valid, ready to submit.');
              // Automatically trigger form submission if valid
              registerMutate(values, {
                onSuccess: (response) => {
                  console.log('Registration successful:', response);
                  // Proceed with login
                  loginMutate({
                    email: values.email,
                    password: values.password,
                  });
                },
              });
            } else {
              console.log('Form has validation errors:', validationErrors);
            }
          });
        }, [values, validateForm]); // Runs whenever form values change

        return (
          <Form className='row '>
            {/* <Col xs={12} md={4}>
              <SimpleInputField
                nameList={[{ name: 'name', placeholder: t('EmailAddress'), title: 'Name', label: 'FullName' }]}
              />
            </Col>

            <Col xs={12} md={4}>
              <SimpleInputField
                nameList={[{ name: 'email', placeholder: t('EmailAddress'), title: 'Email', label: 'EmailAddress' }]}
              />
            </Col>

            <Col xs={12} md={4}>
              <div className='flex flex-row'>
                <div className='w-1/4 h-full'>
                  <SearchableSelectInput
                    nameList={[{
                      name: 'country_code',
                      notitle: 'true',
                      inputprops: {
                        name: 'country_code',
                        id: 'country_code',
                        options: AllCountryCode,
                      },
                    }]}
                    className='w-full'
                  />
                </div>
                <div className='w-3/4'>
                  <SimpleInputField
                    nameList={[{
                      name: 'phone',
                      type: 'number',
                      placeholder: t('EnterPhoneNumber'),
                      colclass: 'country-input-box',
                      title: 'Phone',
                      label: 'Phone',
                    }]}
                    className='w-full'
                  />
                </div>
              </div>
            </Col> */}

            <Row>
              <SimpleInputField
                nameList={[
                  { name: 'name', placeholder: t('EnterFullName'), toplabel: 'Nom et Prénom', inputaddon: 'true', prefixvalue: <RiUserFill />, colprops: { xs: 12 } },
                  { name: 'email', placeholder: t('EnterEmail'), toplabel: 'Adresse Email', inputaddon: 'true', prefixvalue: <RiMailFill />, colprops: { xxl: 6, lg: 12, sm: 6 } },
                  {
                    name: 'phone',
                    placeholder: t('EnterPhoneNumber'),
                    toplabel: 'N° Téléphone',
                    inputaddon: 'true',
                    prefixvalue: <RiSmartphoneLine />,
                    type: 'number',
                    colprops: { xxl: 6, lg: 12, sm: 6 },
                  },
                  // { name: 'subject', placeholder: t('EnterSubject'), toplabel: 'Subject', inputaddon: 'true', prefixvalue: <RiUserFill />, colprops: { xs: 12 } },
                  // { name: 'message', placeholder: t('EnterYourMessage'), toplabel: 'Message', inputaddon: 'true', prefixvalue: <RiChat2Fill />, colprops: { xs: 12 }, type: 'textarea', rows: 5 },
                ]}
              />
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

export default GuestRegisterForm;
