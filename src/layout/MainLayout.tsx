import React from "react";
import styled, { StyleSheetManager } from "styled-components";
import { PageHome } from "../page/PageHome";

export const MainLayout = () => {
  return (
    /** 禁用css旧浏览器兼容前缀 */
    <StyleSheetManager disableVendorPrefixes>
      <Style>
        <PageHome></PageHome>
      </Style>
    </StyleSheetManager>
  );
};

const Style = styled.div`
  width: 100%;
  height: 100%;
`;
