import type React from "react";
import styles from "./CardWrapper.module.css";

export default function CardWrapper({ children }: React.ReactNode) {
  return <div>{children}</div>;
}
