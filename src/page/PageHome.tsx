import React from "react";
import styled from "styled-components";

import { PageHomeHeader } from "./home/PageHomeHeader";
import { PageHomeMain } from "./home/PageHomeMain";

export const PageHome = () => {
  return (
    <Style>
      <PageHomeHeader></PageHomeHeader>

      <PageHomeMain></PageHomeMain>
    </Style>
  );
};

const Style = styled.div`
  width: 100%;
  height: 100%;
`;
