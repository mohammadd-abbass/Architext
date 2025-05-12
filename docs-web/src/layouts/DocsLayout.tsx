import Header from "../components/common/Header/Header";
import { ReactNode } from "react";
import DocsSidebar from "../components/features/docs/DocsSideBar/DocsSidebar";

const DocsLayout = ({ children }: { children: ReactNode }) => (
  <div className="relative">
    <Header />
    <DocsSidebar />
    
    <main className="mt-12 p-2">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </main>
    
  </div>
);

export default DocsLayout;