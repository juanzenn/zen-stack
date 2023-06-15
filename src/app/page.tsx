import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-6xl font-black">Zen Stack</h1>
      <p className="mt-4 text-lg font-medium">
        A Next.js template with modern technologies.
      </p>
      <Button asChild className="mt-4" size="lg">
        <a href="https://github.com/juanzenn/zen-stack" target="_blank">
          <Github className="mr-2 inline-block" size={20} />
          GitHub
        </a>
      </Button>
    </main>
  );
}
