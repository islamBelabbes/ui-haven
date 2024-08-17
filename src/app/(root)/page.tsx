import Container from "@/components/container";
import CategoriesList from "./_components/categories-list";
import HeroBanner from "./_components/hero-banner";

export default async function HomePage() {
  return (
    <main>
      <HeroBanner />

      <Container className="mb-5 mt-24">
        <h1
          className="mb-6 text-center text-xl md:text-3xl"
          data-test="hero-title"
        >
          TailwindCss,RadixUi,FramerMotion Components Collection
        </h1>
        <p className="text-pretty text-center text-base text-gray-300 md:px-64 md:text-lg">
          Explore the whole collection of over 66 open-source UI components and
          interactive elements built with the utility classes from Tailwind CSS
          and Flowbite.
        </p>
      </Container>

      <CategoriesList />
    </main>
  );
}
