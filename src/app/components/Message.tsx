import { Message as TypeMessage } from "../data";

export default function Message({ text }: TypeMessage) {
  return (
    <div className="py-0.5 pl-4 pr-16 leading-[22px] hover:bg-gray-950/[0.07]">
      <p className="pl-14 text-gray-100">{text}</p>
    </div>
  );
}
