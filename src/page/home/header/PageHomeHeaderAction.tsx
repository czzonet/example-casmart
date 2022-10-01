import React from "react";
import styled from "styled-components";

import {
  IoPersonOutline,
  IoSearchOutline,
  IoCartOutline,
  IoHeartOutline,
} from "react-icons/io5";

export const PageHomeHeaderAction: React.FC = () => {
  return (
    <Style>
      <button>
        <IoPersonOutline fontSize={22}></IoPersonOutline>
        <p>Sign in</p>
      </button>
      <button>
        <IoSearchOutline fontSize={22}></IoSearchOutline>
        <p>Search</p>
      </button>
      <button>
        <IoCartOutline fontSize={22}></IoCartOutline>
        <p>Cart</p>
        <footer className="green">3</footer>
      </button>
      <button>
        <IoHeartOutline fontSize={22}></IoHeartOutline>
        <p>Wishlist</p>
        <footer>2</footer>
      </button>
    </Style>
  );
};

const Style = styled.div`
  background: var(--white);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
  padding-block: 16px 10px;
  box-shadow: 0 -2px 20px hsla(0, 0%, 0%, 0.1);
  /* z-index: 1; */ /** 注意：和模态框的冲突？ */

  > button {
    position: relative;
    width: 50px;
    text-align: center;

    &:is(:hover, :focus) {
      > p {
        color: var(--eerie-black);
      }
    }

    > img {
      margin-inline: auto;
      font-size: 22px;
      margin-bottom: 3px;
    }

    > p {
      color: var(--sonic-silver);
      font-size: var(--fs-10);
      transition: var(--transition-1);
    }

    > footer {
      position: absolute;
      top: -5px;
      right: 0;
      background: var(--eerie-black);
      width: 20px;
      height: 20px;
      display: grid;
      place-items: center;
      line-height: 0;
      font-size: 13px;
      color: var(--white);
      border-radius: 50%;

      &.green {
        background: var(--middle-blue-green);
      }
    }
  }
`;
