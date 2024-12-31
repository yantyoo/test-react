import React from "react";
import "./BottomBar.css";
import { ReactComponent as MyPageIcon } from "../../assets/Mypageicon.svg";
import { ReactComponent as Calendaricon } from "../../assets/Calendaricon.svg";

function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="icon">
        <span>아이콘</span>
        <p>추천</p>
      </div>
      <div className="icon">
        <span>아이콘</span>
        <p>홈</p>
      </div>
      <div className="icon">
        <Calendaricon />
        <p>캘린더</p>
      </div>
      <div className="icon">
        <MyPageIcon />
        <p>내 정보</p>
      </div>
    </div>
  );
}

export default BottomBar;