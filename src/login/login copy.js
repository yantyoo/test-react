import React from 'react';
import './index.css';
import '././login.css'

const logincopy = () => {
    return (
        <div id="wrap">
            <div id="login_area">
                <div id="login_header">
                    <img src="./images/logo_mwusinsa.svg" alt="무신사 로고" />
                </div>
                <div id="login_box">
                    <form>
                        <input className="input" type="text" placeholder="아이디를 입력해 주세요" />
                        <br />
                        <input className="input" type="password" placeholder="비밀번호를 입력해 주세요" />
                        <br />
                        <span className="submit">
                            <input type="submit" value="로그인" />
                        </span>
                        <label className="checkbox">
                            <input type="checkbox" name="autologin" id="autologin" /> 자동 로그인
                        </label>
                    </form>
                    <ul id="sub_menu">
                        <li><a href="#">회원 가입</a></li>
                        <li><a href="#">아이디 찾기</a></li>
                        <li><a href="#">비밀번호 찾기</a></li>
                    </ul>
                </div>
                <div id="social">
                    <a id="kakao" href="#">
                        <span>카카오 로그인</span>
                    </a>
                    <a id="apple" href="#">
                        <span>Apple 로그인</span>
                    </a>
                </div>
                <div id="non_member">
                    <div id="tap_head">
                        <a href="#" id="non_member_buy" className="non_member_tap">
                            <span>비회원 구매하기</span>
                        </a>
                        <a href="./tap_lookup.html" id="non_member_lookup" className="non_member_tap">
                            <span>비회원 주문 조회</span>
                        </a>
                    </div>
                    <footer id="footer">
                        <ul id="footer_menu">
                            <li><a href="#">이용약관</a></li>
                            <li>
                                <a href="#"><b>개인정보처리방침</b></a>
                            </li>
                            <li><a href="#">고객센터</a></li>
                        </ul>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default App;