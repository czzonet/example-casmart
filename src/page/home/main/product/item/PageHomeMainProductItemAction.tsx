import React from "react";
import styled from "styled-components";
import {
  IoEyeOutline,
  IoHeartOutline,
  IoBagHandleOutline,
} from "react-icons/io5";

export const PageHomeMainProductItemAction: React.FC = () => {
  return (
    <Style>
      <button aria-label="Quick view">
        <IoEyeOutline fontSize={20}></IoEyeOutline>
      </button>
      <button className="cart">
        <IoBagHandleOutline fontSize={20}></IoBagHandleOutline>
        <p>Add to Cart</p>
      </button>
      <button aria-label="Add to Whishlist">
        <IoHeartOutline fontSize={20}></IoHeartOutline>
      </button>
    </Style>
  );
};

const Style = styled.div`
  display: flex;
  height: 45px;

  > button {
    border: 1px solid var(--cultured);
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: var(--white);
    color: var(--eerie-black);

    &:is(:hover, :focus) {
      border-color: var(--eerie-black);
    }

    &.cart {
      flex-grow: 1;
      background: var(--eerie-black);
      color: var(--white);
      border-color: var(--eerie-black);

      &:is(:hover, :focus) {
        background: var(--white);
        color: var(--eerie-black);
      }
    }
  }
`;
