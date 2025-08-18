import Image from "next/image";
import profilePic from "./avatar-800x800.jpeg";
import { TextLayout } from "@/components/TextLayout";
import Content from "@/content/about-art.md";
import { ThreeDCard } from "@/components/Card";
import { Row } from "@/components/Row/Row";
import { Socials } from "./Socials";

export default function Page() {
  return (
    <>
      <ThreeDCard>
        <Row justifyContent="space-around">
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={300}
            placeholder="blur"
          />
          <Socials />
        </Row>
      </ThreeDCard>
      <main>
        <TextLayout>
          <Content />
        </TextLayout>
      </main>
    </>
  );
}
