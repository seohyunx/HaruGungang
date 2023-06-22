import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SurveyResult from "./components/SurveyResult";
import Main from "./components/Main";
import Mypage from "./components/Mypage";
import WishList from "./components/WishList";
import Preview from "./components/Preview";
import Login from "./components/Login";
import Join from "./components/member/Join";
import Delete from "./components/member/Delete";
import NutritionInfo from "./components/Main/NutritionInfo";
import ResultSameNutri from "./components/wishList/ResultSameNutri";
import ResultOtherNutri from "./components/wishList/ResultOtherNutri";
import SurveyNew from "./components/SurveyNew";
import NutriDetail from "./components/Nutri/NutriDetail";
import ProductDetail from "./components/Product/ProductDetail";
import Auth from "./components/Auth";
import ProfilePath from './components/profilePath';

const kakaoClientId = '9682bae209042aa5b5a5dde259553bc4';
const kakaoRedirectUri = 'http://localhost:3000/auth/kakao/callback';
const kakaoLoginUri = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}\
&redirect_uri=${kakaoRedirectUri}&response_type=code`;

const naverClientId = '4aWJJDtBTDQlg2SlFym8';
const naverRedirectUri = 'http://localhost:3000/auth/naver/callback';
const naverLoginUri = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&redirect_uri=${naverRedirectUri}&state=hLiDdL2uhPtsftcU`;

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/haru/preview" element={<Preview />} />
        <Route path="/haru/survey" element={<SurveyNew />} />
        <Route path="/haru/survey/result" element={<SurveyResult />} />
        <Route path="/haru/main" element={<Main />} />
        <Route path="/haru/mypage" element={<Mypage />} />
        <Route path="/haru/wishlist" element={<WishList />} />
        <Route path="/haru/login" element={<Login KAKAO_AUTH_URL={kakaoLoginUri} NAVER_AUTH_URL={naverLoginUri}/>} />
        <Route path="/auth/kakao/callback" element={<Auth />} />
        <Route path="/profile" element={<ProfilePath />} />
        <Route path="/haru/join" element={<Join />} />
        <Route path="/haru/delete" element={<Delete />} />
        <Route path="/haru/info/nutri" element={<NutritionInfo />} />
        <Route path="/haru/wishlist/samenutri" element={<ResultSameNutri />} />
        <Route
          path="/haru/wishlist/othernutri"
          element={<ResultOtherNutri />}
        />
        <Route path="haru/"></Route>
        <Route path="/haru/nutri/:nutri_name" element={<NutriDetail />} />
        <Route path="/haru/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
