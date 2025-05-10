import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const Layout = ({ children }) => (
  <div>
    <Header/>
        {children}
    <Footer />
  </div>
);

export default Layout;