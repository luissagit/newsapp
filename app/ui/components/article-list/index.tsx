'use client';

import Image from 'next/image';

interface Props {
  articles?: any[];
  showAuthor?: boolean;
  showDate?: boolean;
  showDescription?: boolean;
  hasLargeElement?: boolean;
}

function getLocalStorageArticle() {
  try {
    const value = localStorage.getItem('articles');
    return JSON.parse(value ?? '');
  } catch (err) {
    return [];
  }
}

export function ArticleList({ articles = [], showAuthor = true, showDate = true, showDescription = true, hasLargeElement = true }: Props) {
  if (articles?.length === 0) {
    return (
      <div className="h-screen mt-20">
        <p className="font-bold text-white text-center">Oops! Looks like still empty here!</p>
      </div>
    );
  }

  function handleOpenPage(article: any) {
    const localStorageArticles = getLocalStorageArticle();
    const hasThisData = localStorageArticles?.some((item: any) => item?.url === article?.url);
    if (!hasThisData) {
      const newValue = [article, ...localStorageArticles];
      localStorage.setItem('articles', JSON.stringify(newValue));
    }
    window.open(article?.url, "_blank", "noreferrer");
  }

  return (
    <div className="grid sm: grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {articles?.map((item: any, index: number) => {
        const showLarge = hasLargeElement && (index === 0 || index === 7);
        const date = item?.publishedAt ? new Date(item?.publishedAt) : null;
        const options: Intl.DateTimeFormatOptions = {
          weekday: 'short',
          month: 'long',
          day: 'numeric',
        };

        function handleClick() {
          handleOpenPage(item);
        }

        return (
          <div onClick={handleClick} key={index} className={`bg-slate-600 p-2 rounded-md text-white ${showLarge ? 'col-span-2 row-span-2' : ''} min-h-36 flex relative flex-col hover:bg-slate-500 transition-all cursor-pointer`}>
            <div className={`relative min-h-36 bg-slate-700 rounded ${showLarge ? 'h-80' : ''}`}>
              {item?.urlToImage && (
                <Image
                  src={item?.urlToImage}
                  alt={item?.title}
                  objectFit="cover"
                  loading="lazy"
                  className="rounded"
                  // width={showLarge ? 500 : 300}
                  // height={showLarge ? 500 : 300}
                  fill={true}
                />
              )}
            </div>
            <div className="mt-2 text-sm">
              <h3 className="font-bold max-h-10 truncate">{item?.title}</h3>
              {showAuthor && (<p className="mt-2 text-xs max-h-10 truncate">By: {item?.author ?? '-'}</p>)}
              {showDate && (<span className="text-xs">{date ? date?.toLocaleDateString('id-ID', options) : ''} {date ? date?.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) : ''}</span>)}
              {showDescription && (<p className={`mt-2 truncate ${!showLarge ? 'max-h-10' : ''}`}>{item?.description}</p>)}
            </div>
          </div>
        )
      })}
    </div>
  )
}