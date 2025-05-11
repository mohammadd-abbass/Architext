import Header from "../components/common/Header/Header";
import { ReactNode } from "react";
import DocsSideBar from "../components/features/docs/DocsSideBar";

const DocsLayout = ({ children }: { children: ReactNode }) => (
  <div className="relative">
    <Header />
    <DocsSideBar />
    
    <main className="mt-16 p-6">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </main>
    
  </div>
);

export default DocsLayout;