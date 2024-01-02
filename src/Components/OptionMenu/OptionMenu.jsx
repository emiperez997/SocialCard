function OptionMenu({ closeMenu }) {
  return (
    <div className="absolute h-screen w-full bg-gray-900/80">
      <div className="h-screen w-full flex items-center justify-center">
        <div className="bg-gray-200 rounded-lg w-60 h-auto flex justify-center items-center">
          <div className="flex flex-col p-2 w-full divide-y divide-solid divide-gray-700">
            <button className="text-gray-600 font-bold text-sm p-3">
              Copy Link
            </button>

            <button className="text-gray-600 font-bold text-sm p-3">
              Unfollow
            </button>

            <button className="text-gray-600 font-bold text-sm p-3">
              Mute
            </button>

            <button className="text-red-800 font-bold text-sm p-3">
              Report
            </button>

            <button
              className="text-red-800 font-bold text-sm p-3"
              onClick={closeMenu}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { OptionMenu };
