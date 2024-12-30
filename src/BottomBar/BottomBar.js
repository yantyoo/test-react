import React from "react";
import "./BottomBar.css";

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
        <span>아이콘</span>
        <p>랭킹</p>
      </div>
      <div className="icon">
        <span>아이콘</span>
        <p>마이페이지</p>
      </div>
    </div>
  );
}

export default BottomBar;