"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  serverId,
  children,
}: {
  href: string;
  serverId?: number;
  children: React.ReactNode;
}) {
  const currentPath = usePathname();
  const isActive =
    currentPath.trim().startsWith(`/servers/${serverId}`) ||
    currentPath.trim() === href;

  return (
    <Link href={href} className="block">
      <div className="group relative">
        <div className="absolute -left-3 flex h-full items-center">
          <div
            className={`${isActive ? "h-10 scale-100 opacity-100" : "h-5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"} w-1 origin-left rounded-r bg-white transition-all duration-200`}
          ></div>
        </div>
        <div className="group-active:translate-y-px">
          <div
            className={`${isActive ? "bg-brand rounded-2xl text-white" : "group-hover:bg-brand overflow-hidden rounded-3xl bg-gray-700 text-gray-100 group-hover:rounded-2xl group-hover:text-white"} flex h-12 w-12 items-center justify-center overflow-hidden transition-all duration-200`}
          >
            {children}
          </div>
        </div>
      </div>
    </Link>
  );
}
