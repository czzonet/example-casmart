import React from "react";
import styled from "styled-components";
import imgLog from "../../../assets/images/logo.svg";
import classnames from "classnames";

import { IoClose } from "react-icons/io5";
import { PageHomeHeaderNavOverlay } from "./nav/PageHomeHeaderNavOverlay";

export const PageHomeHeaderNav: React.FC<{
  visible: boolean;
  close: () => void;
}> = ({ visible, close }) => {
  return (
    <Style className={classnames({ active: visible })}>
      <PageHomeHeaderNavOverlay visible={visible}></PageHomeHeaderNavOverlay>

      <article className={classnames({ active: visible })}>
        <header>
          <a href="">
            <img src={imgLog} alt="" />
          </a>

          <button aria-label="close menu" onClick={close}>
            <IoClose fontSize={23}></IoClose>
          </button>
        </header>
        <ul>
          <li>
            <a href="#">Home </a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </article>
    </Style>
  );
};

const Style = styled.div`
  position: fixed;
  visibility: hidden;

  &.active {
    visibility: visible;
  }

  > article {
    background: var(--white);
    position: fixed;
    top: 0;
    right: -300px;
    max-width: 300px;
    width: 100%;
    height: 100%;
    padding: 30px 25px;
    z-index: 3;
    visibility: hidden;
    transition: 0.25s var(--cubic-out);

    &.active {
      visibility: visible;
      transform: translateX(-300px);
      transition: 0.5s var(--cubic-in);
    }

    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 60px;
    }

    > ul {
      > li {
        &:not(:last-child) {
          border-bottom: 1px solid var(--cultured);
        }

        > a {
          padding-block: 10px;
          color: var(--eerie-black);
        }
      }
    }
  }
`;
