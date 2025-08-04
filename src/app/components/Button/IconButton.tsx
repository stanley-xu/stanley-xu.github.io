import { Button, ButtonProps } from "./Button";
import { ReactNode } from "react";

import styles from "./Button.module.css";

interface IconButtonProps extends ButtonProps {
  altText: string;
  fallbackIcon?: ReactNode;
}

export function IconButton({
  altText,
  children,
  fallbackIcon,
  ...buttonProps
}: IconButtonProps) {
  return (
    <Button {...buttonProps} aria-label={altText} className={styles.IconButton}>
      {children ?? fallbackIcon}
    </Button>
  );
}
