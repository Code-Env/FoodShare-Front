import React from "react";

const LoginComponent = () => {
  return (
    <div className="loginPage">
      <div className="loginLogo">
        <div className="logo">로고</div>
      </div>
      <div className="loginForm">
        <div className="idBox">
          <input type="text" name="id" placeholder="아이디"></input>
        </div>
        <div className="passwordBox">
          <input type="password" name="password" placeholder="비밀번호"></input>
        </div>
        <div className="loginButton">
          <div className="button">로그인</div>
        </div>
        <div className="loginCheckBox">
          <div className="holdId">
            <label className="checkLogin_label">
              아이디 저장
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="holdLogin">
            <label className="checkLogin_label">
              로그인 상태 유지
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="findInfo">
          <div className="find_id">아이디 찾기</div>
          <span className="rightBar"></span>
          <div className="find_pw">비밀번호 찾기</div>
          <span className="rightBar"></span>
          <div className="add_user">회원가입</div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
