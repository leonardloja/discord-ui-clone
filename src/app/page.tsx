"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/servers/1/channels/1"), 1200);
  }, [router]);
  return (
    <>
      {/* Channels */}
      <div className="flex w-60 flex-col bg-gray-800">
        <div className="font-ginto flex h-12 items-center px-3 text-white shadow-sm"></div>
        <div className="scrollbar-none flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300"></div>
      </div>
      {/* Main */}
      <div className="flex flex-1 flex-col bg-gray-700">
        <div className="flex h-12 shrink-0 items-center px-3 shadow-sm"></div>
        <div className="mx-24 my-44 flex h-full justify-center pt-44">
          <div className="max-w-3xl text-center">
            <p className="font-ginto text-8xl">Discord UI Clone</p>
            <p className="mt-3 text-4xl">Choose a server to get started...</p>
          </div>
        </div>
      </div>
    </>
  );
}
