import React from "react";
import styled from "styled-components";

export const PageHomeHeaderNav: React.FC = () => {
  return (
    <Style>
      <header></header>

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
    </Style>
  );
};

const Style = styled.div`
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
`;
