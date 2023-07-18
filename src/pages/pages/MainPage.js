import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Banner from "../../components/common/Banner";
import ListContainer from "../../containers/List/ListContainer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ListContainer />
      <Footer />
    </div>
  );
};

export default MainPage;
