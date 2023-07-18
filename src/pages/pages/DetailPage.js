import DetailContainer from "../../containers/detail/DetailContainer";
import Header from "../../components/common/Header";
import { useParams } from "react-router-dom";
import Footer from "../../components/common/Footer";

const DetailPage = () => {
  return (
    <>
      <Header />
      <DetailContainer />
      <Footer />
    </>
  );
};

export default DetailPage;
