import { FeaturedLab } from "@/lab";
import { Spacer } from "@/ui/spacer";

export default function Home() {
  return (
    <>
      <h3>Here's what's cookin'... 👨‍🍳</h3>
      <Spacer size="sm" />
      <FeaturedLab />
    </>
  );
}
