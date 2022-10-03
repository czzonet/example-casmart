import React from "react";
import ReactDom from "react-dom";

import App from "./App";
import "./css/global.css";
import "./css/reset.css";

ReactDom.render(<App></App>, document.getElementById("app"));

// 接收热更新输出，只有accept才能被更新
const i: any = module;
if (i.hot) {
  i.hot.accept();
}
