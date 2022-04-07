import React from "react";

import styles from "../styles/Global";

const Button = ({ assetUrl, link }) => {
  return (
    <div
      className={`${styles.btnBlack} ml-50`}
      onClick={() => window.open(link, "_blank")}
    >
      <img src={assetUrl} alt="expo_icon" className={` ${styles.btnIcon}`} />

      <div className="flex flex-col justify-start ml-4">
        <p className={`font-normal text-xs ${styles.btnText}`}>View it on</p>
        <p className={`font-bold text-sm ${styles.btnText}`}>Expo Store</p>
      </div>
    </div>
  );
};

export default Button;
