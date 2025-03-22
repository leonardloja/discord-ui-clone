export default async function ServerPage() {
  return (
    <>
      {/* Main */}
      <div className="flex flex-1 flex-col bg-gray-700">
        <div className="flex h-12 items-center px-3 shadow-sm">Main</div>
        <div className="scrollbar-none flex-1 space-y-4 overflow-y-scroll p-3">
          <p>Main</p>
        </div>
      </div>
    </>
  );
}
