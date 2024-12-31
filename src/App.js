import { Routes, Route, useLocation } from "react-router-dom";
import BottomBar from "./components/BottomBar/BottomBar";
import Header from "./components/Header/Header";
import LoginPage from "./pages/login/login";
import Home from "./pages/home/home";
import './App.css';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname.toLowerCase() === "/login"; // 경로를 소문자로 변환하여 비교

  return (
    <div className="container">
      {/* 로그인 페이지가 아니라면 Header와 BottomBar 표시 */}
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {!isLoginPage && <BottomBar />}
    </div>
  );
}

export default App;
