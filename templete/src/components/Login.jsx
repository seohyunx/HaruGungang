import React, {useEffect} from 'react'
import axios from 'axios'

const Login = ({ KAKAO_AUTH_URL }) => { 

  return (
    <div className='main_login'>
      <h2>하루건강</h2>
      <p className='info'>로그인 후 이용하실 수 있습니다.</p>
      <fieldset>
        <legend>로그인 입력 폼</legend>
        <p className='id_field'>
          <label for="uid" id="uid_label" style={{display: 'block'}}>
            <span className="zh" data-translate="아이디">아이디</span>
          </label>
          <input id="uid" name="uid" type="text" title="아이디입력" maxlength="50" tabindex="1"/>
        </p>
        <p className="pw_field">
            <label for="password" id="pass_label">
              <span className="zh" data-translate="비밀번호">비밀번호</span>
            </label>
            <input id="password" name="password" type="password" title="비밀번호입력" maxlength="15" tabindex="2" />
            <span className="caps_Lock" style={{display: 'none'}}>
                <em></em>
                <strong>Caps Lock</strong>이 켜져 있습니다.
            </span>
        </p>
        <p className="login_btn">
            <button type="button" onclick="login();" tabindex="3">
              <span className="zh" data-translate="로그인">로그인</span>
            </button>
        </p>
        <div className='signup_area'>
          <a className='naver' href='https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=4aWJJDtBTDQlg2SlFym8&state=STATE_STRING&redirect_uri=http://localhost:8081/auth/naver/callback'>
            <em></em>
            네이버로 로그인
          </a>
          <a className='kakao' href={KAKAO_AUTH_URL}>
            <em></em>
            카카오로 로그인
          </a>
        </div>
      </fieldset>
    </div>
  )
}

export default Login