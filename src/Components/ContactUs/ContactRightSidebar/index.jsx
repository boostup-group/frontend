import { Col } from 'reactstrap';
import CustomHeading from '@/Components/Common/CustomHeading';
import ContactUsForm from './ContactUsForm';

const ContactRightSidebar = () => {
  return (
    <Col lg={6}>
      <h1 className='text-2xl mb-4 font-bold'>Nous Contacter</h1>
      <div className='right-sidebar-box mb-8'>
        <ContactUsForm />
      </div>
    </Col>
  );
};

export default ContactRightSidebar;
