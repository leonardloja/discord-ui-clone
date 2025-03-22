"use client";

import * as Icons from "@/app/components/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ChannelLink({
  channel,
  serverId,
}: {
  channel: { id: number; label: string; icon?: string; unread?: boolean };
  serverId: string;
}) {
  const currentPath = usePathname();
  const Icon = channel.icon
    ? Icons[channel.icon as keyof typeof Icons]
    : Icons.Hashtag;
  const href = `/servers/${serverId}/channels/${channel.id}`;
  const active = currentPath === href;
  const classes = {
    active: "bg-gray-550/[0.32] text-white",
    inactiveUnread:
      "hover:bg-gray-550/[0.16] text-white active:bg-gray-550/[0.24]",
    inactiveRead:
      "hover:bg-gray-550/[0.16] text-gray-300 hover:text-gray-100 active:bg-gray-550/[0.24]",
  };
  const state = active
    ? "active"
    : channel.unread
      ? "inactiveUnread"
      : "inactiveRead";

  return (
    <Link
      href={href}
      key={channel.id}
      className={`${classes[state]} group relative mx-2 flex items-center rounded px-2 py-1`}
    >
      {state === "inactiveUnread" && (
        <div className="absolute left-0 -ml-2 h-2 w-1 rounded-r-full bg-white"></div>
      )}
      <Icon className="mr-1.5 h-5 w-5 text-gray-400" />
      {channel.label}
      <Icons.AddPerson className="ml-auto h-4 w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
    </Link>
  );
}
