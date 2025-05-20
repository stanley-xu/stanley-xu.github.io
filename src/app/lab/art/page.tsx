import Page1 from "./1/page";
import styles from "./art.module.css";

export function ArtPage({ stylesProp }: { stylesProp: string }) {
  console.log({stylesProp})
  const boxes = Array(16)
    .fill(null)
    .map((_, idx) => (
      <div
        key={idx}
        className={`${styles.box} ${stylesProp}`}
        style={{
          ["--index" as string]: idx + 1,
        }}
      ></div>
    ));

  return (
    <section
      style={{
        background: "white",
        padding: "48px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "var(--spacing)",
      }}
    >
      <div className={styles.row}>{boxes}</div>
    </section>
  );
}

export default function FeaturedArt() {
  return <Page1 />;
}

FeaturedArt.href = "lab/art";
FeaturedArt.title = "Playing with CSS art";
