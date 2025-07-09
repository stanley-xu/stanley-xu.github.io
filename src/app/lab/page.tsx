import { LabCard } from "./components";
import Art from "./art/page";

// Lab routes with their components
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
        height: "100%",
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
