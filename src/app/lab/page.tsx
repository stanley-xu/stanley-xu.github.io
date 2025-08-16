import { LabCard, Sandbox, sandboxTitle } from "./components";
import Art from "./art/page";
import { Spacer } from "@/components/Spacer";

const LAB_ROUTES = [
  {
    path: "art",
    title: "CSS Generative Art",
    component: Art,
  },
];

export default function LabPage() {
  return (
    <>
      <main>
        <p>
          🥘 What I&apos;m working on... <strong>{sandboxTitle}</strong>
        </p>
        <Sandbox />
      </main>
      <Spacer />
      <p>Other experiments 🧪</p>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--spacing)",
          justifyContent: "center",
        }}
      >
        {LAB_ROUTES.map((route) => (
          <LabCard
            key={route.path}
            title={route.title}
            href={`/lab/${route.path}`}
          >
            <route.component />
          </LabCard>
        ))}
      </section>
    </>
  );
}
