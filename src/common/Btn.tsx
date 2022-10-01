import React from "react";
import styled from "styled-components";

export const Btn: React.FC = ({ children }) => {
  return (
    <Style>
      <button>{children}</button>
    </Style>
  );
};

const Style = styled.div`
  > button {
    background: var(--background, var(--eerie-black));
    color: var(--color, var(--white));
    font-weight: var(--fw-600);
    height: var(--height, 60px);
    padding-inline: 50px;
    border: 1px solid var(--border-color, var(--eerie-black));
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-primary:is(:hover, :focus) {
    --background: var(--white);
    --color: var(--eerie-black);
    --border-color: var(--eerie-black);
  }

  .btn-secondary {
    --height: 50px;
    --background: var(--white);
    --color: var(--eerie-black);
    --border-color: var(--white);
  }

  .btn-secondary:is(:hover, :focus) {
    --background: var(--eerie-black);
    --color: var(--white);
    --border-color: var(--eerie-black);
  }

  .btn-outline {
    --height: 50px;
    --background: var(--white);
    --color: var(--eerie-black);
    --border-color: var(--eerie-black);
    padding-inline: 40px;
  }

  .btn-outline:is(:hover, :focus) {
    --background: var(--eerie-black);
    --color: var(--white);
    --border-color: var(--eerie-black);
  }
`;
