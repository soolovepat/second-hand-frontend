import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Banner from "../../components/common/Banner";
import Category from "../../components/common/Category";
import ListContainer from "../../components/common/ListContainer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <ListContainer />
      <Footer />
    </div>
  );
};

export default MainPage;
