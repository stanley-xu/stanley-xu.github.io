import Link from "next/link";
import { FeaturedArt } from "./art";

export default function LabPage() {
  const labs = [FeaturedArt, Dummy, Dummy, Dummy, Dummy];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--spacing)",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {labs.map((lab, idx) => (
        <LabCard key={`${idx}--${lab.href}`} title={lab.title} href={lab.href}>
          {lab()}
        </LabCard>
      ))}
    </div>
  );
}

function LabCard({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        flex: "1 1 400px",
        minHeight: "400px",
      }}
    >
      {children}
      <p>{title}</p>
    </Link>
  );
}

const Dummy = () => (
  <div
    style={{ background: "var(--white-3)", width: "100%", height: "100%" }}
  ></div>
);
Dummy.href = "/404";
Dummy.title = "Test";
