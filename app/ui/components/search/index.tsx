'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`?${params.toString()}`);
  }, 300);
  
  return (
    <input
      className="p-1 pl-3 w-full bg-slate-900 rounded text-white"
      defaultValue={searchParams.get('query')?.toString()}
      placeholder="Search"
      onChange={(e) => {
        handleSearch(e.target.value);
      }} />
  );
}