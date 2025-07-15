import Image from "next/image";
import profilePic from "./linkedin-4-5.jpg";

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
            className="w-16"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </header>
      <main
        style={{
          padding: "0 128px",
        }}
      >
        <p>🚧 </p>
      </main>
    </>
  );
}
