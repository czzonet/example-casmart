import React from "react";
import styled from "styled-components";
import imgLogo from "../../assets/images/logo.svg";
import { PageHomeHeaderAction } from "./header/PageHomeHeaderAction";
import { PageHomeHeaderMenuIcon } from "./header/PageHomeHeaderMenuIcon";
import { PageHomeHeaderNav } from "./header/PageHomeHeaderNav";

export const PageHomeHeader: React.FC = () => {
  return (
    <Style>
      <input type="text" placeholder="Search Product..." />
      <button aria-label="Search">
        {/* <ion-icon name="search-outline"></ion-icon> */}
      </button>
      <a href="#">
        <img src={imgLogo} alt="Casmart logo" />
      </a>

      <PageHomeHeaderAction></PageHomeHeaderAction>

      <PageHomeHeaderMenuIcon></PageHomeHeaderMenuIcon>

      <PageHomeHeaderNav></PageHomeHeaderNav>
    </Style>
  );
};

const Style = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: var(--white);
  width: 100%;
  padding-block: 20px;
  z-index: 4;
  transition: var(--transition-1);

  display: flex;
  justify-content: space-between;
  align-items: center;

  &.active {
    position: fixed;
    box-shadow: 0 2px 20px hsla(0, 0%, 0%, 0.1);
  }
`;
