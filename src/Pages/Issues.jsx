import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Components/Header.jsx";
import Body from "../Components/Body.jsx";
import Footer from "../Components/Footer.jsx";

const Issues = () => {
  return (
    <div>
      <Helmet>
        <title>Ijaresm : : UGC Approved journal at Lowest Price within 1 day</title>
      </Helmet>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Issues;
