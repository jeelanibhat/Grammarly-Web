import React from "react";

const Header = () => {
  return (
    <div className="header__wrap">
      <div className="header__wrap-nav">
        <img src={require("../assets/images/logo.png")} alt="logo" />
        <a href="#">Log in</a>
      </div>
      <div className="heading__title">
        <h1 className="main__title">Aim High With Brilliant Writing</h1>
        <button type="button" className="green__btn">
          Upgrade to Grammarly Premium
        </button>
      </div>
    </div>
  );
};

export default Header;
