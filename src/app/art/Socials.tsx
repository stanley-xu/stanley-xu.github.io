import { Row } from "@/components/Row";
import Link from "next/link";

import Instagram from "@/assets/instagram.svg";
import Image from "next/image";

import styles from "./Socials.module.css";

export function Socials() {
  return (
    <Row justifyContent="center" alignItems="center">
      <Link href="https://www.instagram.com/bystanleyx" target="_blank">
        <Row justifyContent="center" className={styles.IconRow}>
          <Image src={Instagram} alt="Instagram" unoptimized />
          bystanleyx
        </Row>
      </Link>
    </Row>
  );
}
