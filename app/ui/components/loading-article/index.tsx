import Image from 'next/image';

export function LoadingArticle() {
  const articles: any[] = Array.from(Array(10).keys()); 
  return (
    <div className="grid sm: grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {articles?.map((item: any, index: number) => {
        const showLarge = index === 0 || index === 7;
        return (
          <div  key={index} className={`bg-slate-600 p-2 rounded-md text-white ${showLarge ? 'col-span-2 row-span-2' : ''} min-h-36 flex relative flex-col hover:bg-slate-500 transition-all`}>
            <div className={`relative min-h-36 bg-slate-700 animate-pulse ${showLarge ? 'h-80' : ''}`}>
            </div>
            <div className="mt-2 text-sm animate-pulse">
              <h3 className="h-4 truncate bg-slate-400 rounded"></h3>
              <p className="mt-2 text-xs w-40 truncate h-3 truncate bg-slate-400 rounded"></p>
              <p className="mt-2 text-xs w-40 truncate h-2 truncate bg-slate-400 rounded"></p>
              <p className="mt-2 text-xs truncate h-3 truncate bg-slate-400 rounded"></p>
              <p className="mt-2 text-xs truncate h-3 truncate bg-slate-400 rounded"></p>
            </div>
          </div>
        )
      })}
    </div>
  )
}