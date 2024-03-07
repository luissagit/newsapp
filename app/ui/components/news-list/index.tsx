'use client'

import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { ArticleList, LoadingArticle } from '..';
import { getDataNews } from '../..';

export function NewsList({ query }: { query?: string }) {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  async function generateDataNews(query?: string) {
    setLoading(true);
    const data = await getDataNews({ query: query });
    const articles = data?.articles ?? [];
    setArticles(articles);
    setLoading(false);
  }

  useEffect(() => {
    generateDataNews(query);
  }, [query]);

  if (loading) {
    return <LoadingArticle />
  }

  if (articles?.length === 0) {
    return (
      <div className="h-screen mt-20">
        <p className="font-bold text-white text-center">Oops! Looks like still empty here!</p>
      </div>
    );
  }

  return <ArticleList articles={articles} />
}