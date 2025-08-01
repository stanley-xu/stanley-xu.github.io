import Link from "next/link";
import { Row } from "../Row";
import { Breadcrumb } from "../Breadcrumb";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Row>
        <Breadcrumb>
          <Link href={`/about`}>About</Link>
          <Link href={`/lab`}>Lab</Link>
          <Link href={`/art`}>Art</Link>
        </Breadcrumb>
      </Row>
    </header>
  );
}
