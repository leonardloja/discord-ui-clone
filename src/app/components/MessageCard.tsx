export default function MessageCard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-700 text-white">
      <div className="max-w-lg">
        {/* block of message */}
        <div className="flex px-4 py-1 hover:bg-gray-800/30">
          <img
            className="mr-4 h-10 w-10 rounded-full"
            src="https://picsum.photos/seed/picsum/200/200"
            alt="Image of a person"
          />
          <div>
            <p className="flex items-baseline">
              <span className="mr-2 text-sm font-medium text-green-500">
                johndoe
              </span>
              <span className="text-xs text-gray-500">01/15/2021</span>
            </p>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              totam similique in nesciunt neque voluptas quo maxime provident
              iusto harum sunt animi aut deleniti officia rerum, eos nostrum
              aliquid dicta!
            </p>
          </div>
        </div>
        {/* another block of message */}
        <div className="mt-1 flex px-4 py-1 hover:bg-gray-800/30">
          <p className="pl-14 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            quasi temporibus facere quo pariatur deserunt accusamus laborum
            explicabo.
          </p>
        </div>
        {/* another block of message */}
        <div className="mt-1 flex px-4 py-1 hover:bg-gray-800/30">
          <p className="pl-14 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus eum pariatur tempore reiciendis?
          </p>
        </div>
      </div>
    </div>
  );
}
