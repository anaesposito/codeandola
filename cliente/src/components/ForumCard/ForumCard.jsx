import userLogo from "./user-logo.png";

function ForumCard() {
  return (
    <div className="container mt-16 m-auto flex flex-row h-screen justify-center">
      <div>
        <div className="max-w-sm bg-white border-2 mt-4 p-6 rounded-xl tracking-wide shadow-lg">
          <div id="header" className="flex items-center mb-4">
            <img
              alt="avatar"
              className="w-10 rounded-full border-2 border-gray-300"
              src={userLogo}
            />
            <div id="header-text" className="leading-5 ml-6 sm">
              <h4 id="name" className="text-xl font-semibold">
                John Doe
              </h4>
            </div>
          </div>
          <div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border-2 mt-4 p-6 rounded-xl tracking-wide shadow-lg">
          <div id="header" className="flex items-center mb-4">
            <img
              alt="avatar"
              className="w-10 rounded-full border-2 border-gray-300"
              src={userLogo}
            />
            <div id="header-text" className="leading-5 ml-6 sm">
              <h4 id="name" className="text-xl font-semibold">
                John Doe
              </h4>
            </div>
          </div>
          <div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumCard;
