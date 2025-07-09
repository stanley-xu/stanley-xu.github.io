import styles from "./art.module.css";

export default function Art() {
  const boxes = Array(16)
    .fill(null)
    .map((_, idx) => (
      <div
        key={idx}
        className={`${styles.box} ${styles.style1}`}
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
