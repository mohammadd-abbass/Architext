import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const MainLayout = ({ children }) => (
  <div>
    <Header/>
        {children}
    <Footer />
  </div>
);

export default MainLayout;