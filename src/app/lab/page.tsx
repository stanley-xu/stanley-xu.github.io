import { LabCard } from "./components";
import Art from "./art/page";

const LAB_ROUTES = [
  {
    path: "art",
    title: "CSS Generative Art",
    component: Art,
  },
];

export default function LabPage() {
  return (
    <div
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
    </div>
  );
}
