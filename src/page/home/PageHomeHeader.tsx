import React from "react";
import imgLogo from "../../assets/images/logo.svg";

export const PageHomeHeader: React.FC = () => {
  return (
    <div>
      <input type="text" placeholder="Search Product..." />
      <button aria-label="Search">
        <ion-icon name="search-outline"></ion-icon>
      </button>
      <a href="#">
        <img src={imgLogo} alt="Casmart logo" />
      </a>
    </div>
  );
};
