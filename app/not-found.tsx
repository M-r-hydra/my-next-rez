// React
import React from "react";
// React

import styles from "./notFound.module.css";
import Image from "next/image";
import { notFoundImage } from "./Images/images";
import Link from "next/link";

export default function Custom404() {
  return (
    <div
      className={`${styles.notFoundContainer} w-full h-full flex flex-col items-center justify-center `}
    >
      <Image src={notFoundImage} alt="not-found-image" className="rounded-lg" />
      <p className="text-lg text-white mt-2">Requested Resource Not Found</p>
      <Link
        href={"/"}
        className="text-lg text-white mt-5 border px-6 py-2 rounded-lg hover:bg-black transition-all"
      >
        Back To Home
      </Link>
    </div>
  );
}
