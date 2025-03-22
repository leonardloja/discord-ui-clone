import * as Icons from "@/app/components/icons";

export default function BottomProfile() {
  return (
    <div className="flex h-14 max-w-full items-center justify-between bg-gray-900/45 px-3 py-0">
      <div className="flex items-center gap-2">
        <div className="relative h-9 w-9 rounded-full bg-amber-500">
          <div className="flex h-full items-center justify-center">
            <Icons.Discord className="h-6 w-6 text-white" />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-[3px] border-gray-900 bg-green-500"></div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium">Leonard</p>
          <p className="text-xs">Online</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Icons.HeadPhone className="h-5 w-5 text-gray-100" />
        <Icons.Microphone className="h-5 w-5 text-red-400" />
        <Icons.Settings className="h-5 w-5 text-gray-100" />
      </div>
    </div>
  );
}
