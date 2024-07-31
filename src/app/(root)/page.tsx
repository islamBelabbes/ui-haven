import ClientPage from "./client-page";

export default async function HomePage() {
  return (
    <main className="relative flex h-[calc(100vh-88px)] items-center justify-center md:items-start">
      <ClientPage />
    </main>
  );
}
