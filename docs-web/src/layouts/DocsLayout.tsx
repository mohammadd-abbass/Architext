import Header from "../components/common/Header/Header";
import { ReactNode } from "react";
import DocsSideBar from "../components/features/docs/DocsSideBar";

const DocsLayout = ({ children }: { children: ReactNode }) => (
  <div>
    <Header/>
    <DocsSideBar/>
    {children}
  </div>
);

export default DocsLayout;