import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const User = () => {
  const users = useSelector((state) => state.userReducer);

  return (
    <div className="user-container">
      <div className="user">
        <h3>{!isEmpty(users[0]) && users[0].pseudo}</h3>
        <img src="https://thispersondoesnotexist.com/image" alt="" />
        <p>Age : 35 ans</p>
        <p>Like{!isEmpty(users[0]) && users[0].likes > 1 ? "s" : null} : {!isEmpty(users[0]) && users[0].likes}</p>
      </div>
    </div>
  );
};

export default User;
