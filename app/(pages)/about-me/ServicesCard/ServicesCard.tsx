import React from "react";

import styles from "./ServicesCard.module.css";
import { IconType } from "react-icons";

type ServicesCardProps = {
  item: { id: string; name: string; ImageData: IconType; content: string };
  themeColor: string;
};
const ServicesCard: React.FunctionComponent<ServicesCardProps> = ({
  item: { id, name, ImageData, content },
  themeColor,
}) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.logoContainer} style={{ color: themeColor }}>
        <ImageData />
      </div>
      <p
        style={{
          color: themeColor,
          fontWeight: "bold ",
        }}
        className="mt-2"
      >
        {name}
      </p>
      <p
        style={{
          color: themeColor,
        }}
        className="mt-2"
      >
        {content}
      </p>
    </div>
  );
};

export default ServicesCard;
