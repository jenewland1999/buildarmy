import React, { ReactNode } from "react";
import Header from "@components/Header";
import Footer from "@components/footer/Footer";

const Layout = ({ children }: { children?: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
