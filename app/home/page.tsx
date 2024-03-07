import { LoadingArticle, NavBar, NewsList, getDataNews } from "@/app/ui";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  return (
    <main className="max-w-screen-lg p-4 mx-auto min-h-screen relative">
      <NavBar />
      <NewsList query={searchParams?.query} />
    </main>
  );
}
