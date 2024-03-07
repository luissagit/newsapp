'use client';

import Link from "next/link";
import { Search } from "..";
import { usePathname } from "next/navigation";

interface Menu {
  title: string;
  url: string;
}

interface Props {
  showSearch?: boolean;
}

export function NavBar(props: Props) {
  const { showSearch = true } = props;
  const menus: Menu[] = [
    {
      title: 'Home',
      url: '/home'
    },
    {
      title: 'Visited',
      url: '/visited'
    },
  ];

  const pathname = usePathname();

  return (
    <nav className="bg-fuchsia-300/70 rounded-md p-4 flex gap-2 sticky top-0 z-10 backdrop-blur-sm">
      {menus.map((item, index) => {
        return (
          <Link href={item.url} className={`hover:bg-fuchsia-300 p-2 rounded tr text-white transition-all ${item.url === pathname ? 'bg-fuchsia-300' : ''}`} key={index}>
            {item.title}
          </Link>
        )
      })}
      <div className="grow"></div>
      {showSearch && (
        <div className="p-1">
          <Search />
        </div>
      )}
    </nav>
  );
}