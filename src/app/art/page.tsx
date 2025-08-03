import Image from "next/image";
import profilePic from "./avatar-800x800.jpeg";
import { TextLayout } from "@/components/TextLayout";
import Content from "@/content/about-art.md";
import { ThreeDCard } from "@/components/Card";
import { Row } from "@/components/Row/Row";

export default function Page() {
  return (
    <>
      <ThreeDCard>
        <Row justifyContent="space-around">
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={300} // automatically provided
            blurDataURL="data:..." // automatically provided
            placeholder="blur" // Optional blur-up while loading
          />
          <p>TestTestTestTestTestTest</p>
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
