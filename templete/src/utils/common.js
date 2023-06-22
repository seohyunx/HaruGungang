// sns사용자 정보 출력기능
export const snsPayloadParser = {
    NAVER: (payload) => ({
      id: payload.id,
      name: payload.name,
      gender: payload.gender,
      email: payload.email,
      age: payload.age,
      platform: 'naver',
    }),
    GOOGLE: (payload) => ({
      id: payload.profileObj.googleId,
      name: payload.profileObj.name,
      gender: false,
      email: payload.profileObj.email,
      platform: 'google',
    }),
    KAKAO: (payload) => ({
      id: payload.profile.id,
      name: payload.profile.properties.nickname,
      gender: false,
      email: false,
      platform: 'kakao',
    }),
  };