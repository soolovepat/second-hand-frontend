import React from "react";

const LikeItemList = ({ postList, userInfo }) => {
  console.log(userInfo);
  return (
    <div>
      <h3>{userInfo.nickname}님을 위한 추천 아이템</h3>
    </div>
  );
};

export default LikeItemList;
