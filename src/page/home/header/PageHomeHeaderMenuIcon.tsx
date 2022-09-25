import React from "react";
import styled from "styled-components";

export const PageHomeHeaderMenuIcon: React.FC = () => {
  return (
    <Style aria-label="Open Menu">
      <span></span>
      <span></span>
      <span></span>
    </Style>
  );
};

const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;

  > span {
    width: 20px;
    height: 2px;
    background: var(--black);
    transition: var(--transition-1);

    &:nth-child(2) {
      transform: scaleX(0.5);
      transform-origin: right;
    }
  }

  &:is(:hover, :focus) {
    > span:nth-child(2) {
      transform: scaleX(1);
    }
  }
`;
