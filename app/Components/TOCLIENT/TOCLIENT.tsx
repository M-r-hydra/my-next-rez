"use client";
// React
import React from "react";
// React
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
type TOCLIENTProps = {
  children: React.ReactNode;
};
const TOCLIENT: React.FunctionComponent<TOCLIENTProps> = ({ children }) => {
  return (
    <>
      <Tooltip
        id="my-tooltip"
        variant="dark"
        place="left"
        style={{ zIndex: "9999999" }}
      />
      {children}
    </>
  );
};

export default TOCLIENT;
