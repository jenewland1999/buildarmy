import React, { ReactNode } from "react";
import Header from "@components/Header";

const Layout = ({ children }: { children?: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
