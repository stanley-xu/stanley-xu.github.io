import Image from "next/image";
import { Row } from "@/components/Row";
import { Card } from "@/components/Card";
import { TextLayout } from "@/components/TextLayout";

import About from "@/content/about.md";
import profilePic from "./linkedin-4-5.jpg";
import styles from "./About.module.css";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <Card variant="elevated">
        <Row
          flexDirection="row"
          gap="var(--spacing-loose)"
          justifyContent="center"
        >
          <Image
            className={styles.image}
            src={profilePic}
            alt="Picture of the author"
            placeholder="blur"
          />
          <TextLayout width="tight">
            <About />
          </TextLayout>
        </Row>
      </Card>
    </div>
  );
}
