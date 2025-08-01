import { Row } from "../Row";
import { Breadcrumb, BreadcrumbLink } from "../Breadcrumb";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Row>
        <Breadcrumb>
          <BreadcrumbLink href={`/about`}>About</BreadcrumbLink>
          <BreadcrumbLink href={`/lab`}>Lab</BreadcrumbLink>
          <BreadcrumbLink href={`/art`}>Art</BreadcrumbLink>
        </Breadcrumb>
      </Row>
    </header>
  );
}
