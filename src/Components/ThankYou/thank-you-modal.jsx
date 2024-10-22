'use client';
import { RiCloseLine } from 'react-icons/ri';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const ThankYouModal = ({ classes = {}, extraFunction, modal, setModal, ...props }) => {
  
    const toggle = () => (extraFunction ? extraFunction() : setModal((prev) => !prev));
  
    return (
      <Modal className={classes?.modalClass || ''} isOpen={modal} toggle={toggle} centered>
        {classes?.customChildren ? (
          props.children
        ) : (
          <>
            <ModalHeader className={classes?.modalHeaderClass || ''} toggle={toggle}>
              {classes?.title && t(classes?.title)}
              <RiCloseLine className='modal-close-btn' onClick={toggle} />
            </ModalHeader>
            <ModalBody className={classes?.modalBodyClass || ''}>{props.children}</ModalBody>
          </>
        )}
      </Modal>
    );
  };

  export default ThankYouModal;
