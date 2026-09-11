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

type ToCLIENTProps = {
  children?: React.ReactNode;
};

const ToCLIENT: React.FunctionComponent<ToCLIENTProps> = ({ children }) => {
  return (
    <>
      <ChangeLinksColor />
      <Tooltip
        id="my-tooltip"
        variant="dark"
        place="left"
        style={{ zIndex: "9999999" }}
      />
      <Tooltip
        id="my-tooltip2"
        variant="dark"
        place="bottom"
        style={{ zIndex: "9999999" }}
      />
      <Tooltip
        id="my-tooltip3"
        variant="dark"
        place="top"
        style={{ zIndex: "9999999" }}
      />
      {children}
    </>
  );
};

export default ToCLIENT;
