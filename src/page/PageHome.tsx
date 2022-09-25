import React from "react";
import styled from "styled-components";

import { PageHomeHeader } from "./home/PageHomeHeader";

export const PageHome = () => {
  return (
    <Style>
      <PageHomeHeader></PageHomeHeader>
    </Style>
  );
};

const Style = styled.div`
  width: 100%;
  height: 100%;
`;
