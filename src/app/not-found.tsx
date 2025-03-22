import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex w-full items-center justify-center bg-gray-800">
      <div className="flex max-w-lg flex-col text-center">
        <div className="flex justify-center">
          <Image
            src="/discord-404.svg"
            width={400}
            height={400}
            alt="discord 404 image"
          />
        </div>

        <h2 className="font-ginto mt-3 text-lg uppercase tracking-wide">
          No Text Channels
        </h2>
        <p className="mt-1">
          You found yourself in a strange place. You don&apos;t have access to
          any text channels, or there are none in this server
        </p>
      </div>
    </div>
  );
}
