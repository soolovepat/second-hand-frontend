import React from "react";
import List from "./List";

const LikeItemList = ({ postList, userInfo }) => {
  //const user = userInfo.find(info => info.username === "토큰 아이디")
  // const user = useSelector((state) =>
  //   state.userInfo.find((info) => info.username === "111")
  // );
  // console.log(user);

  // const likeCate = postList.filter(
  //   (post) => post.category === user.userCategory
  // );
  // if (likeCate) {
  //   console.log(likeCate);
  // }

  return (
    <div>
      {/* {user && <h3>{user.nickname}님을 위한 추천 아이템</h3>} */}
      {/* {likeCate.map((post) => (
        <List key={post.title} post={post} />
      ))} */}
    </div>
  );
};

export default LikeItemList;
