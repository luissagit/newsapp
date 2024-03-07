'use client'

import { ArticleList, NavBar } from "@/app/ui";
import { useEffect, useState } from "react";

function localStorageParser(value: any) {
  try {
    return JSON.parse(value);
  } catch (err) {
    return [];
  }
}

export default function Page() {
  const [articles, setArticles] = useState([]);

  function generateArticle() {
    const items = localStorageParser(localStorage.getItem('articles'));
    if (items) {
    setArticles(items);
    }
  }

  useEffect(() => {
    generateArticle();
  }, []);

  return (
    <main className="max-w-screen-lg p-4 mx-auto min-h-screen relative">
      <NavBar showSearch={false} />
      <ArticleList articles={articles} showAuthor={false} showDate={false} showDescription={false} hasLargeElement={false} />
    </main>
  );
}
