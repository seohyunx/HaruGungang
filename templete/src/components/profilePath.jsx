import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'

const ProfilePath = () => {
    const [userId, setUserId] = useState('');
    const [nickName, setNickName] = useState();
    const [email, setEmail] = useState();

    const getProfile = async () => {
        try {
          // Kakao SDK API를 이용해 사용자 정보 획득
          let data = await window.Kakao.API.request({
            url: "/v2/user/me",
          });
          // 사용자 정보 변수에 저장
          setUserId(data.id);
          setNickName(data.properties.nickname);
          setEmail(data.kakao_account.email)
          console.log('변수 저장 완료', data);

          const params = new URLSearchParams();

          params.append('id', data.id)
          params.append('nickName', data.properties.nickname)
          params.append('email', data.kakao_account.email)

          axios.post('http://localhost:8081/haru/kakaologin', params)

        } catch (err) {
          console.log('에러', err);
        }
      };

    useEffect(() => {
        getProfile();
        console.log('getProfile 실행');
    }, []);    

    return(
        <div>
        <h2>{userId}</h2>
        <h2>{nickName}</h2>
        <h2>{email}</h2>
      </div>
    )
}
export default ProfilePath;