import { Button } from "@/components/ui/button";
import { Aperture } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Button >
        <Aperture />
        Click Me</Button>
    </div>
  );
}
