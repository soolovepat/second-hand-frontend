import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Profile from "../../components/profile/Profile";
import { getUserPosts } from "../../api/posts";
import CalendarProfile from "../../components/profile/Calendar";
import theme from "../../lib/styles/Theme";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import ListContainer from "../list/ListContainer";

const ProfileContainer = () => {
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
      <h1 className="mypage-title">마이페이지</h1>
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
      <Profile user={user} myPosts={myPosts} />
      <div className="cal">
        <CalendarProfile />
      </div>
    </MypageBlock>
  );
};

export default ProfileContainer;

const MypageBlock = styled.div`
  width: 950px;
  margin: auto;
  position: relative;

  .mypage-title {
    ${theme.h1box}
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
    position: absolute;
    top: 140px;
    left: -160px;

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
    margin-left: 150px;
    border-left: 2px dashed ${theme.primaryColor};
    .myPosts {
      width: 1030px;
    }
  }
  .cal {
    position: absolute;
    top: 530px;
    left: -220px;
  }

  .react-calendar {
    width: 355px;
    max-width: 100%;
    background-color: ${theme.lightGrayColor};
    padding: 20px 10px;
    color: ${theme.darkGrayColor};
    border-radius: 8px;
    border: none;
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.015);
    }
  }
`;
