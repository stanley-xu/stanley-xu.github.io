import { Row } from "@/components/Row";
import Link from "next/link";

import Instagram from "@/icons/instagram";

import styles from "./Socials.module.css";

export function Socials() {
  return (
    <Row justifyContent="center" alignItems="center">
      <Link href="https://www.instagram.com/bystanleyx" target="_blank">
        <Row
          justifyContent="center"
          alignItems="center"
          className={styles.IconRow}
        >
          <Instagram />
          bystanleyx
        </Row>
      </Link>
    </Row>
  );
}
