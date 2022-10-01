import classNames from "classnames";
import React from "react";
import styled from "styled-components";

export const PageHomeHeaderNavOverlay: React.FC<{ visible: boolean }> = ({
  visible,
}) => {
  return <Style className={classNames({ active: visible })}></Style>;
};

const Style = styled.div`
  position: fixed;
  inset: 0;
  background: var(--black);
  opacity: 0;
  pointer-events: none;
  transition: var(--transition-1);
  z-index: 2;

  &.active {
    opacity: 0.7;
    pointer-events: all;
  }
`;
