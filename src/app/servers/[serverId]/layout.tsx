"use client";
import BottomProfile from "@/app/components/BottomProfile";
import ChannelLink from "@/app/components/ChannelLink";
import * as Icons from "@/app/components/icons";
import { data } from "@/app/data";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ServersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ serverId: string }>;
}>) {
  const { serverId } = useParams<{ serverId: string }>();
  const server = data.find((server) => server.id === +serverId);
  const [closedCategories, setClosedCategories] = useState<number[]>([]);

  function toggleCategory(categoryId: number) {
    setClosedCategories((prevClosedCategories) =>
      prevClosedCategories.includes(categoryId)
        ? prevClosedCategories.filter((id) => id !== categoryId)
        : [...prevClosedCategories, categoryId],
    );
  }

  const isCategoryClosed = (categoryId: number): boolean => {
    return closedCategories.includes(categoryId);
  };

  return (
    <>
      {/* Channels */}
      <div className="hidden w-60 flex-col bg-gray-800 md:flex">
        <button className="hover:bg-gray-550/[0.16] font-ginto flex h-12 items-center px-4 text-[15px] text-white shadow-sm transition">
          <div className="relative mr-1 h-4 w-4">
            <Icons.Verified className="text-gray-550 absolute h-4 w-4" />
            <Icons.Check className="absolute h-4 w-4" />
          </div>
          {server?.label}
          <Icons.Chevron className="ml-auto h-[18px] w-[18px] opacity-80" />
        </button>
        <div className="scrollbar-none flex-1 space-y-[21px] overflow-y-scroll pt-3 font-medium text-gray-300">
          {/* channel categories */}
          {server?.categories.map((category) => (
            <div key={category.id}>
              {category.label && (
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="font-ginto flex w-full items-center px-0.5 text-xs uppercase tracking-wide hover:text-gray-100"
                >
                  <Icons.Arrow
                    className={`${isCategoryClosed(category.id) ? "-rotate-90" : ""} mr-1 h-3 w-3 transition duration-200`}
                  />
                  {category.label}
                </button>
              )}
              <div className="mt-[5px] space-y-0.5">
                {category.channels
                  .filter((channel) => {
                    const isCategoryOpen = !isCategoryClosed(category.id);
                    // return isCategoryOpen ? true : 'unread' in channel ? channel.unread : false;
                    return (
                      isCategoryOpen || (channel as { unread?: boolean }).unread
                    );
                  })
                  .map((channel) => (
                    <ChannelLink
                      channel={channel}
                      serverId={serverId}
                      key={channel.id}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
        <BottomProfile />
      </div>
      {children}
    </>
  );
}
