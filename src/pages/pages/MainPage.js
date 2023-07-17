import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Banner from "../../components/common/Banner";
import ListContainer from "../../containers/ListContainer";

import SearchContainer from "../../containers/main/SearchContainer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <SearchContainer />
      <ListContainer />
      <Footer />
    </div>
  );
};

export default MainPage;
