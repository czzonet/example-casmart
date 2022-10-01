import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import imgLogo from "../../assets/images/logo.svg";
import { PageHomeHeaderAction } from "./header/PageHomeHeaderAction";
import { PageHomeHeaderMenuIcon } from "./header/PageHomeHeaderMenuIcon";
import { PageHomeHeaderNav } from "./header/PageHomeHeaderNav";

export const PageHomeHeader: React.FC = () => {
  const [state菜单的显示, state设置菜单的显示] = useState(false);
  const [state标题栏的显示, state设置标题栏的显示] = useState(false);

  useEffect(() => {
    // TODO: 节流
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 200) {
        state设置标题栏的显示(true);
      } else {
        state设置标题栏的显示(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => 0);
    };
  }, []);

  return (
    <Style className={classNames({ active: state标题栏的显示 })}>
      <input type="text" placeholder="Search Product..." />
      <button aria-label="Search">
        {/* <ion-icon name="search-outline"></ion-icon> */}
      </button>
      <a href="#">
        <img src={imgLogo} alt="Casmart logo" />
      </a>

      <PageHomeHeaderAction></PageHomeHeaderAction>

      <PageHomeHeaderMenuIcon
        click={() => state设置菜单的显示(true)}
      ></PageHomeHeaderMenuIcon>

      <PageHomeHeaderNav
        visible={state菜单的显示}
        close={() => state设置菜单的显示(false)}
      ></PageHomeHeaderNav>
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
