import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";

import React from "react";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
