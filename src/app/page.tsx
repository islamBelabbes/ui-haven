"use client";
import CourseCard from "@/components/elements/courseCard/course-card";
import InfoCard from "@/components/elements/infoCard/info-card";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-neutral-100 text-white">
      <InfoCard />
      <CourseCard />
    </main>
  );
}
