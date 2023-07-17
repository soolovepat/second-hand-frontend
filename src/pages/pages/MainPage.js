import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Banner from "../../components/common/Banner";
import ListContainer from "../../containers/ListContainer";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const handleWrite = () => {
    navigate("/write");
  };
  return (
    <div>
      <Header />
      <Banner />
      <ListContainer />
      <Footer />
      <Button size={"sm"} onClick={handleWrite}>
        글쓰기
      </Button>
    </div>
  );
};

export default MainPage;
