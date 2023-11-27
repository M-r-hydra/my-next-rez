// React
import React from "react";
// React

// CSS
import styles from "./mySkills.module.css";
// CSS

// Data
import { currTheme } from "@/app/Data/currTheme";
import { mySelfSkills } from "@/app/Data/mySelfSkills";
import { myBasicSkills } from "@/app/Data/myBasicSkills";
// Data

// Components
import CardForSkills from "./CardForSkills/CardForSkills";
import { myProgrammingLanguageSkills } from "@/app/Data/myProgrammingLanguageSkills";
import { myFrontEndSkills } from "@/app/Data/myFrontEndSkills";
import { myBackEndSkills } from "@/app/Data/myBackEndSkills";
import { myDatabaseSkills } from "@/app/Data/myDatabaseSkills";
import { myMobileSkills } from "@/app/Data/myMobileSkills";
import { myDocumentationSkills } from "@/app/Data/myDocumentationSkills";
import { myApiWritingSkills } from "@/app/Data/myApiWritingSkills";
// Components

const page = () => {
  return (
    <div
      className={`${styles.mySkillsContainer} w-full h-full flex flex-col items-center  py-4 px-8`}
    >
      <div className={`${styles.selfSkills} w-full`}>
        <p className={styles.containerName}>
          <span style={{ color: currTheme }}>My Self</span> Skills
        </p>
        <div
          className={`${styles.skillsProgressContainer} w-full flex flex-row items-center flex-wrap justify-between`}
        >
          {mySelfSkills.map((item) => {
            return (
              <CardForSkills key={item.id} item={item} themeColor={currTheme} />
            );
          })}
        </div>
      </div>
      <div className={`${styles.selfSkills} w-full`}>
        <p className={styles.containerName}>
          <span style={{ color: currTheme }}>Basic</span> Skills
        </p>
        <div
          className={`${styles.skillsProgressContainer} w-full flex flex-row items-center flex-wrap justify-between`}
        >
          {myBasicSkills.map((item) => {
            return (
              <CardForSkills key={item.id} item={item} themeColor={currTheme} />
            );
          })}
        </div>
      </div>
      <div className={`${styles.selfSkills} w-full`}>
        <p className={styles.containerName}>
          <span style={{ color: currTheme }}>Programming</span> Skills
        </p>
        <div
          className={`${styles.skillsProgressContainer} w-full flex flex-row items-center flex-wrap justify-between`}
        >
          {myProgrammingLanguageSkills.map((item) => {
            return (
              <CardForSkills key={item.id} item={item} themeColor={currTheme} />
            );
          })}
        </div>
      </div>
      <div className={`${styles.selfSkills} w-full`}>
        <p className={styles.containerName}>
          <span style={{ color: currTheme }}>Front-End </span> Skills
        </p>
        <div
          className={`${styles.skillsProgressContainer} w-full flex flex-row items-center flex-wrap justify-between`}
        >
          {myFrontEndSkills.map((item) => {
            return (
              <CardForSkills key={item.id} item={item} themeColor={currTheme} />
            );
          })}
        </div>
      </div>
      <div className={`${styles.selfSkills} w-full`}>
        <p className={styles.containerName}>
          <span style={{ color: currTheme }}>Back-End</span> Skills{" "}
          <span style={{ color: currTheme }}> {"( Learning )"} </span>
        </p>
        <div
          className={`${styles.skillsProgressContainer} w-full flex flex-row items-center flex-wrap justify-between`}
        >
          {myBackEndSkills.map((item) => {
            return (
              <CardForSkills key={item.id} item={item} themeColor={currTheme} />
            );
          })}
        </div>
      </div>
      <div className={`${styles.selfSkills} w-full`}>
        <p className={styles.containerName}>
          <span style={{ color: currTheme }}>Data Base </span> Skills
          <span style={{ color: currTheme }}> {"( Learning )"} </span>
        </p>
        <div
          className={`${styles.skillsProgressContainer} w-full flex flex-row items-center flex-wrap justify-between`}
        >
          {myDatabaseSkills.map((item) => {
            return (
              <CardForSkills key={item.id} item={item} themeColor={currTheme} />
            );
          })}
        </div>
      </div>
      <div className={`${styles.selfSkills} w-full`}>
        <p className={styles.containerName}>
          <span style={{ color: currTheme }}>Mobile Developing</span> Skills
          <span style={{ color: currTheme }}> {"( Learning )"} </span>
        </p>
        <div
          className={`${styles.skillsProgressContainer} w-full flex flex-row items-center flex-wrap justify-between`}
        >
          {myMobileSkills.map((item) => {
            return (
              <CardForSkills key={item.id} item={item} themeColor={currTheme} />
            );
          })}
        </div>
      </div>
      <div className={`${styles.selfSkills} w-full`}>
        <p className={styles.containerName}>
          <span style={{ color: currTheme }}>Documenting </span> Skills
          <span style={{ color: currTheme }}> {"( Learning )"} </span>
        </p>
        <div
          className={`${styles.skillsProgressContainer} w-full flex flex-row items-center flex-wrap justify-between`}
        >
          {myDocumentationSkills.map((item) => {
            return (
              <CardForSkills key={item.id} item={item} themeColor={currTheme} />
            );
          })}
        </div>
      </div>
      <div className={`${styles.selfSkills} w-full`}>
        <p className={styles.containerName}>
          <span style={{ color: currTheme }}>Api Writing </span> Skills
          <span style={{ color: currTheme }}> {"( Learning )"} </span>
        </p>
        <div
          className={`${styles.skillsProgressContainer} w-full flex flex-row items-center flex-wrap justify-between`}
        >
          {myApiWritingSkills.map((item) => {
            return (
              <CardForSkills key={item.id} item={item} themeColor={currTheme} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
