import Image from "next/image";
import { Message } from "../data";

export default function MessageWithUser({
  avatarUrl,
  user,
  date,
  text,
}: Message) {
  return (
    <div className="mt-[17px] flex py-0.5 pl-4 pr-16 leading-[22px] hover:bg-gray-950/[0.07]">
      <Image
        width={40}
        height={40}
        className="mr-4 mt-0.5 h-10 w-10 rounded-full"
        src={avatarUrl}
        alt="Image of a person"
      />
      <div>
        <p className="flex items-baseline">
          <span className="mr-2 font-medium text-green-400">{user}</span>
          <span className="text-xs font-medium text-gray-400">{date}</span>
        </p>
        <p className="text-gray-100">{text}</p>
      </div>
    </div>
  );
}
