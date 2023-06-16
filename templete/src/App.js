import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SurveyResult from "./components/SurveyResult";
import Main from "./components/Main";
import Mypage from "./components/Mypage";
import WishList from "./components/WishList";
import Preview from "./components/Preview";
import Survey from "./components/Survey";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/haru" element={<Preview />} />
        <Route path="/haru/survey" element={<Survey />} />
        <Route path="/haru/survey/result" element={<SurveyResult />} />
        <Route path="/haru/main" element={<Main />} />
        <Route path="/haru/mypage" element={<Mypage />} />
        <Route path="/haru/wishlist" element={<WishList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
