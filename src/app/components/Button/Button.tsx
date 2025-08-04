import { CSSProperties, ReactNode } from "react";

import styles from "./Button.module.css";

export interface ButtonProps {
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  const classNames = `${styles.Button} ${className ? className : ""}`;

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}
