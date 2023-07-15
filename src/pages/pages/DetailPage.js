import DetailContainer from "../../containers/detail/DetailContainer";
import Header from "../../components/common/Header";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const params = useParams();

  return (
    <>
      <Header />
      <DetailContainer />
    </>
  );
};

export default DetailPage;
