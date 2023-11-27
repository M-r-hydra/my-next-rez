"use client";
// React
import React from "react";
// React

// Tooltip
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
// Tooltip

// Components
import ChangeLinksColor from "@/app/Route_ClientComponents/ChangeLinksColor/ChangeLinksColor";
// Components

type TOCLIENTProps = {
  children: React.ReactNode;
};
const TOCLIENT: React.FunctionComponent<TOCLIENTProps> = ({ children }) => {
  return (
    <>
      <ChangeLinksColor />
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
