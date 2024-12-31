import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import
import "./login.css";

const LoginPage = () => {
  const navigate = useNavigate(); // useNavigate 초기화

  const handleLogin = (event) => {
    event.preventDefault(); // 기본 동작 방지 (페이지 새로고침 방지)
    navigate("/home"); // Home 경로로 이동
  };

  return (
    <div id="wrap">
      <div id="login_area">
        <div id="login_header">
          <div>LOGO</div>
        </div>
        <div id="login_box">
          <form onSubmit={handleLogin}> {/* form에 handleLogin 추가 */}
            <input
              className="input"
              type="text"
              placeholder="아이디를 입력해 주세요"
            />
            <br />
            <input
              className="input"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
            />
            <br />
            <span className="submit">
              <input type="submit" value="로그인" />
            </span>
            <label className="checkbox">
              <input type="checkbox" name="autologin" id="autologin" /> 자동 로그인
            </label>
          </form>
          <ul id="sub_menu">
            <li>
              <a href="#">회원 가입</a>
            </li>
            <li>
              <a href="#">아이디 찾기</a>
            </li>
            <li>
              <a href="#">비밀번호 찾기</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
