import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => (
  <div>
    <Header/>
        {children}
    <Footer />
  </div>
);

export default MainLayout;