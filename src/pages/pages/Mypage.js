import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import ProfileContainer from "../../containers/profile/Profile";

const Mypage = () => {
  return (
    <>
      <Header />
      <ProfileContainer />
      <Footer />
    </>
  );
};

export default Mypage;
