import React, { useEffect, useState } from "react";
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
import axios from "axios";

function App() {
  const [productIdMain, setProductIdMain] = useState();
  const [nutri, setNutri] = useState("");

  //임시 유저 아이디
  let userId = "test1";

  //로그인 상태
  const [isLogin, setIsLogin] = useState(true);

  // //위시리스트
  // const [wishList, setWishList] = useState([]);

  //찜하기 data
  const wishData = {
    productIdMain: `${productIdMain}`,
    userId: `${userId}`,
  };

  //찜하기 클릭시 이벤트 >> DB에 제품 저장
  const addWishList = () => {
    if (isLogin) {
      console.log("찜하기 클릭", wishData);
      axios
        .post("http://localhost:8085/haru/addwishlist", wishData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log("error", e);
        });
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/haru/preview" element={<Preview />} />
        <Route path="/haru/survey" element={<SurveyNew />} />
        <Route path="/haru/survey/result" element={<SurveyResult />} />
        <Route path="/haru/main" element={<Main />} />
        <Route path="/haru/mypage" element={<Mypage />} />
        <Route path="/haru/wishlist" element={<WishList userId={userId} />} />
        <Route path="/haru/login" element={<Login />} />
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
        <Route
          path="/haru/product/:productId"
          element={
            <ProductDetail
              productId={productIdMain}
              setProductIdMain={setProductIdMain}
              nutri={nutri}
              setNutri={setNutri}
              wishData={wishData}
              addWishList={addWishList}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
