import React from "react";
import Header from "./header";

const Layout = (props: any) => (
  <div>
    <Header />
    <div className="layout">{props.children}</div>
  </div>
);

export default Layout;
