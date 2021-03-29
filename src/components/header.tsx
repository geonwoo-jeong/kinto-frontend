import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

const Header: React.FC = () => {
  return (
    <>
      <header className="py-4">
        <div className="w-full px-5 xl:px-0 max-w-screen-2xl mx-auto flex justify-between item-center">
          <Link to="/">
            <img src={logo} className="w-24" alt="kinto logo" />
          </Link>
          <span className="text-xs flex justify-center">
            <Link to="/about-kinto-one">
              <span>KINTO ONEとは</span>
            </Link>
            <Link to="/line-up">
              <span>ラインアップ</span>
            </Link>
            <Link to="/simulation">
              <span>シミュレーション</span>
            </Link>
            <Link to="/dealer">
              <span>販売店検索</span>
            </Link>
            <Link to="/contact">
              <span>お問い合わせ</span>
            </Link>
            <Link to="/for-corporation">
              <span>法人のお客様へ</span>
            </Link>
            <Link to="/login">
              <span>ログイン／メンバー登録</span>
            </Link>
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
