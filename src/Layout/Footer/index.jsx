import { useContext, useMemo, useState } from 'react';
import { Row, Col } from 'reactstrap';
import FooterCategory from './FooterCategory';
import FooterUseFul from './FooterUseFul';
import FooterQuickPage from './FooterQuickPage';
import SubFooter from './SubFooter';
import FooterContactUs from './FooterContactUs';
import FooterLogoContent from './FooterLogoContent';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import { usePathname } from 'next/navigation';
import I18NextContext from '@/Helper/I18NextContext';

const MainFooter = () => {
  const { i18Lang } = useContext(I18NextContext);
  const [footerMenu, setFooterMenu] = useState('');
  const { themeOption } = useContext(ThemeOptionContext);
  const pathname = usePathname();
  const footerColor = useMemo(() => {
    if (pathname == `/${i18Lang}/theme/madrid` || pathname == `/${i18Lang}/theme/denver` || pathname == `/${i18Lang}/theme/berlin`) {
      return 'dark_mode';
    } else {
      return null;
    }
  }, [pathname, i18Lang]);
  return (
    <footer className={`section-t-space ${footerColor == 'dark_mode' ? 'footer-section-2 footer-color-2' : themeOption?.footer?.footer_style == 'dark_mode' ? 'footer-section-2 footer-color-2' : ''}`}>
      <div className='container-fluid-lg'>
        <div className='main-footer section-b-space'>
          <Row className="g-3 justify-content-center">
            <Col xs={12} md={3} className="d-flex justify-content-center align-items-stretch"> {/* 1/4 width */}
              <div className="w-100 d-flex flex-column"> {/* Make the inner div take full width and use flex column */}
                <FooterUseFul footerMenu={footerMenu} setFooterMenu={setFooterMenu} />
              </div>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-center align-items-stretch"> {/* 2/4 width */}
              <div className="w-100 d-flex flex-column"> {/* Make the inner div take full width and use flex column */}
                <FooterLogoContent />
              </div>
            </Col>
            <Col xs={12} md={3} className="d-flex justify-content-center align-items-stretch"> {/* 1/4 width */}
              <div className="w-100 d-flex flex-column"> {/* Make the inner div take full width and use flex column */}
                <FooterContactUs footerMenu={footerMenu} setFooterMenu={setFooterMenu} />
              </div>
            </Col>
          </Row>
        </div>
        <SubFooter />
      </div>
    </footer>
  );
};

export default MainFooter;
