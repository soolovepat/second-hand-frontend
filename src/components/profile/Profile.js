import styled from "styled-components";
import theme from "../../lib/styles/Theme";
import ListContainer from "../../containers/ListContainer";

const Profile = ({ user, myPosts }) => {
  return (
    <>
      <h1>마이페이지</h1>
      <div className="mypage-container">
        <section>
          <div className="user-info">
            <strong>내 프로필</strong>
            <img className="picture" src={user.picture} alt="" />
            <div className="name">
              <span>{user.family_name} </span>
              <span>{user.given_name}</span>
            </div>
            <span className="email">{user.email}</span>
          </div>
        </section>
        <section>
          <div className="my-posts">
            <strong>내 게시물</strong>
            <ListContainer type={"mypage"} myPosts={myPosts} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
