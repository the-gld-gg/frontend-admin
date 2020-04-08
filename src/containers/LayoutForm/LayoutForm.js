import React from "react";
import styles from "./LayoutForm.module.css";

const LayoutForm = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default LayoutForm;
