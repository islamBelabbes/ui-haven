import { getAllElements } from "@/lib/elements";
import ClientPage from "./client-page";

export default async function HomePage() {
  const comps = await getAllElements();

  return (
    <main className="relative flex h-[calc(100vh-88px)] items-center justify-center md:items-start">
      <ClientPage />
    </main>
  );
}
