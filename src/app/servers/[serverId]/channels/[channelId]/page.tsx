"use client";

import * as Icons from "@/app/components/icons";
import Message from "@/app/components/Message";
import MessageWithUser from "@/app/components/MessageWithUser";
import { data } from "@/app/data";
import { useParams } from "next/navigation";

export default function Channel() {
  const { serverId, channelId } = useParams<{
    serverId: string;
    channelId: string;
  }>();
  const server = data.find((server) => server.id === +serverId);
  const channel = server?.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => channel.id === +channelId);
  console.log(channel);

  return (
    <div className="flex min-w-0 flex-1 flex-col bg-gray-700">
      <div className="flex h-12 items-center space-x-2 px-2 shadow-sm">
        <div className="flex items-center">
          <Icons.Hashtag className="mx-2 h-6 w-6 font-semibold text-gray-400" />
          <span className="font-ginto mr-2 whitespace-nowrap text-white">
            {channel?.label}
          </span>
        </div>
        {channel?.description && (
          <>
            <div className="mx-2 hidden h-6 w-px bg-white/[.06] md:block"></div>
            <div className="mx-2 hidden truncate text-sm font-medium text-gray-200 md:block">
              {channel.description}
            </div>
          </>
        )}
        {/* Mobile Buttons */}
        <div className="ml-auto flex items-center md:hidden">
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.HashtagWithSpeechBubble className="mx-2 h-6 w-6" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.People className="mx-2 h-6 w-6" />
          </button>
        </div>
        {/* Desktop Buttons */}
        <div className="ml-auto hidden items-center md:flex">
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.HashtagWithSpeechBubble className="mx-2 h-6 w-6" />
          </button>
          <button className="hidden text-gray-200 hover:text-gray-100 md:block">
            <Icons.Bell className="mx-2 h-6 w-6" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.Pin className="mx-2 h-6 w-6" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.People className="mx-2 h-6 w-6" />
          </button>
          <div className="relative mx-2">
            <input
              className="h-6 w-36 rounded border-none bg-gray-900 px-1.5 text-sm font-medium placeholder-gray-400"
              placeholder="Search"
              type="text"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Icons.Spyglass className="mx-2 mr-1.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.Inbox className="mx-2 h-6 w-6" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.QuestionCircle className="mx-2 h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="scrollbar-none flex-1 overflow-y-scroll">
        {channel?.messages.map((message, i) => (
          <div key={message.id}>
            {i === 0 || message.user !== channel.messages[i - 1].user ? (
              <MessageWithUser {...message} />
            ) : (
              <Message {...message} />
            )}
          </div>
        ))}
      </div>
      {/* Message Input Box */}
      <div className="h-18 relative bg-gray-700/70 px-5">
        <div className="relative flex items-center gap-2">
          <Icons.Attach className="absolute left-3 h-6 w-6" />
          <input
            type="text"
            placeholder="Message #channel-channel"
            className="pr-34 h-11 flex-1 rounded border-0 bg-gray-600 py-6 pl-12 placeholder-gray-300 focus:ring-[1px] focus:ring-gray-300/30"
          />
          <div className="absolute right-3 flex gap-4">
            <Icons.Gift className="h-6 w-6" />
            <Icons.GIF className="h-6 w-6" />
            <Icons.Sticker className="h-6 w-6" />
            <Icons.Emoji className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
