import Header from '../Header';
import Footer from '../Footer';
import S from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      {/* header section */}
      <div className={S.header}>
        <Header />
      </div>
      {/* body section */}
      <div className={S.body}>{children}</div>
      {/* footer section */}
      <div className={S.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
