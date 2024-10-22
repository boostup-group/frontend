import { useContext } from 'react';
import Link from 'next/link';
import { Col } from 'reactstrap';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import NoDataFound from '@/Components/Common/NoDataFound';

const FooterUseFul = ({ footerMenu, setFooterMenu }) => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');

  console.log('footer links:', themeOption?.footer?.useful_link);

  return (
    <Col >
      <div className={`footer-title ${footerMenu == 'usefull' ? 'show' : ''}`} onClick={() => setFooterMenu((prev) => (prev !== 'usefull' ? 'usefull' : ''))}>
        <h4>{t('UsefulLinks')}</h4>
      </div>
      <div className='footer-contain'>
        <ul>
          <li>
            <Link href={`/${i18Lang}/blogs`} className='text-red text-content text-capitalize'>
              Blog
            </Link>
          </li>
          <li>
            <Link href={`/${i18Lang}/about-us`} className='text-red text-content text-capitalize'>
              A Propos
            </Link>
          </li>
          <li>
            <Link href={`/${i18Lang}/collections`} className='text-red text-content text-capitalize'>
              Nos Abonnements
            </Link>
          </li>
          <li>
            <Link href={`/${i18Lang}/contact-us`} className='text-red text-content text-capitalize'>
              Contact
            </Link>
          </li>
          <li>
            <Link href={`/${i18Lang}/refund-policy`} className='text-red text-content text-capitalize'>
              Politique de remboursement
            </Link>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default FooterUseFul;
