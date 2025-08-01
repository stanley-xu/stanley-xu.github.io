import Image from "next/image";
import profilePic from "./linkedin-4-5.jpg";
import About from "@/content/about.md";
import { TextLayout } from "@/components/TextLayout";

export default function Page() {
  return (
    <>
      <header
        style={{
          padding: "32px 0",
          marginBottom: "64px",
          borderBottom: "2px solid hsl(0deg, 0%, 20%)",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            width: "fit-content",
          }}
        >
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={300} // Not setting height to maintain aspect ratio
            blurDataURL="data:..." // automatically provided
            placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </header>
      <main>
        <TextLayout>
          <About />
        </TextLayout>
      </main>
    </>
  );
}
