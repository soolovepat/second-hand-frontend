import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import theme from "../../lib/styles/Theme";
import { getUserPosts } from "../../api/posts";
import ListContainer from "../List/ListContainer";

const Profile = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    if (!user) {
      return null;
    } else {
      console.log("sdf");

      const fetchMyPosts = async () => {
        try {
          const res = await getUserPosts(user.email);
          setMyPosts(res);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      };
      fetchMyPosts();
    }
  }, [user]);

  console.log(user);
  console.log(myPosts);

  if (!user) {
    return null;
  }
  return (
    <MypageBlock>
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
    </MypageBlock>
  );
};

export default Profile;

const MypageBlock = styled.div`
  width: 950px;
  height: 600px;
  margin: auto;
  position: relative;

  h1 {
    margin-top: 140px;
    text-align: center;
  }

  strong {
    font-size: 20px;
  }

  .mypage-container {
    margin: 150px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  strong {
    margin-bottom: 30px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    min-width: 200px;
    position: absolute;
    top: 140px;
    left: -240px;

    .picture {
      width: 130px;
      border-radius: 50%;
      padding: 5px;
      border: 2px dashed ${theme.primaryColor};
    }
    .name {
      font-size: 1.2rem;
      margin-top: 30px;
    }
    .email {
      margin-top: 20px;
    }
  }
  .my-posts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 2px dashed ${theme.primaryColor};
    .myPosts {
      width: 1030px;
    }
  }
`;
