import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
      const fetchMyPosts = async () => {
        try {
          const res = await getUserPosts(user.email);
          setMyPosts(res.data.postList);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      };
      fetchMyPosts();
    }
  }, [user]);

  if (!user) {
    return null;
  }
  return (
    <MypageBlock>
      <h1 className="mypage-title">마이페이지</h1>
      <div className="mypage-container">
        <section>
          <div className="user-info">
            <img className="picture" src={user.picture} alt="" />
            <div className="name">
              <span>{user.family_name} </span>
              <span>{user.given_name}</span>
            </div>
            <span className="email">{user.email}</span>
          </div>
          <div className="cal">
            <CalendarProfile />
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

export default ProfileContainer;

const MypageBlock = styled.div`
  margin: auto;

  .mypage-title {
    ${theme.h1box}
  }

  section {
    display: flex;
    flex-direction: column;
  }

  section:nth-child(1) {
    padding-right: 30px;
    align-items: center;
  }

  section:nth-child(2) {
    width: 60%;
    padding-left: 50px;
    align-items: left;
  }

  strong {
    font-size: 20px;
  }

  .my-posts > strong {
    margin-left: 30px;
  }

  .mypage-container {
    margin-left: 10%;
    display: flex;
    justify-content: center;
    align-items: start;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px 80px;
    top: 140px;
    left: -160px;

    .picture {
      width: 80px;
      border-radius: 50%;
      margin-top: 30px;
    }
    .name {
      font-size: 1rem;
      margin-top: 10px;
      line-height: 40px;
    }
  }
  .my-posts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    .myPosts {
      transform: translateY(-20px);
    }
  }

  .react-calendar {
    width: 355px;
    max-width: 100%;
    background-color: #f0f0f0;
    padding: 20px 10px;
    color: ${theme.darkGrayColor};
    border-radius: 24px;
    border: none;
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.015);
    }
  }
`;
