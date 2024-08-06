"use client";
import { categories } from "@/lib/categories";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";

function CategoriesList() {
  return (
    <Container>
      <ul className="grid items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <li key={category.name}>
            <Link href={`/categories/${category.name}`}>
              <Card>
                <CardHeader className="flex-row items-center justify-between border-b px-5 py-3">
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <ArrowIcon />
                </CardHeader>
                <CardContent className="h-60 p-6">
                  <div className="relative mx-auto h-full w-52">
                    <Image src={category.svgPath} alt={category.name} fill />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
};

export default CategoriesList;
