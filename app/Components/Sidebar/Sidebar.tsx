// React
import React from "react";
// React

// CSS
import styles from "./Sidebar.module.css";
// CSS

// Components
import Link from "next/link";
// Components

// Icons
import { AiOutlineFundProjectionScreen, AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
// Icons

const Sidebar = () => {
  return (
    <aside className={`${styles.sidebarContainer} flex flex-col items-center `}>
      <p>A</p>
      <Link href={"/"} data-tooltip-id="my-tooltip" data-tooltip-content="Home">
        <AiOutlineHome />
      </Link>
      <Link
        href={"/about-me"}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="About Me"
      >
        <BsPerson />
      </Link>

      <Link
        href={"/my-skills"}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="My Skills"
      >
        <GiSkills />
      </Link>

      <Link
        href={"/my-projects"}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="My Projects"
      >
        <AiOutlineFundProjectionScreen />
      </Link>
    </aside>
  );
};

export default Sidebar;
