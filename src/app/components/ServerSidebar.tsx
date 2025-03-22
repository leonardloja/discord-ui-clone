import Image from "next/image";
import { data } from "../data";
import AddServerButton from "./AddServerButton";
import NavLink from "./NavLink";
import { Discord as DiscordIcon } from "./icons";

export default function ServersSidebar() {
  return (
    <div className="scrollbar-none hidden space-y-2 overflow-y-scroll bg-gray-900 p-3 md:block">
      <NavLink href="/">
        <DiscordIcon className="h-5 w-7" />
      </NavLink>
      <hr className="mx-2 rounded border-t-2 border-t-white/[.06]" />
      {data.map((server, i) => (
        <NavLink
          href={`/servers/${server.id}/channels/${server.categories[0].channels[0].id}`}
          serverId={server.id}
          key={i}
        >
          {/* TODO: Use Actual Profile Image */}
          <Image width={100} height={100} src={server.img} alt="Server Image" />
        </NavLink>
      ))}
      <AddServerButton />
    </div>
  );
}
