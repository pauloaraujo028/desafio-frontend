import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 md:flex h-screen relative">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
