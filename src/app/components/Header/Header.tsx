"use client";

import { Loader, Moon, Sun, SunMoon } from "lucide-react";
import { Row } from "../Row";
import { Breadcrumb, BreadcrumbLink } from "../Breadcrumb";
import { IconButton } from "../Button";
import { useThemeContext } from "@/ThemeProvider";

import styles from "./Header.module.css";

export default function Header() {
  const context = useThemeContext();

  let icon = null;
  switch (context?.theme) {
    case "system": {
      icon = <SunMoon color="var(--accent)" />;
      break;
    }
    case "dark": {
      icon = <Moon color="var(--accent)" />;
      break;
    }
    case "light": {
      icon = <Sun color="var(--accent)" />;
      break;
    }
  }

  return (
    <header className={styles.header}>
      <Row justifyContent="space-between" alignItems="baseline">
        <Breadcrumb>
          <BreadcrumbLink href={`/about`}>About</BreadcrumbLink>
          <BreadcrumbLink href={`/lab`}>Lab</BreadcrumbLink>
          <BreadcrumbLink href={`/art`}>Art</BreadcrumbLink>
        </Breadcrumb>
        <IconButton
          altText="Theme change button"
          onClick={context?.toggleTheme}
          fallbackIcon={<Loader color="transparent" />}
        >
          {icon}
        </IconButton>
      </Row>
    </header>
  );
}
