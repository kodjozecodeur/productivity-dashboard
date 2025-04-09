// import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-10 transform  md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:flex flex-col w-64 bg-gray-800`}
      >
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold text-lg">Todo App</span>
        </div>

        <div className="flex flex-col flex-grow px-4 mt-5">
          <nav className="flex-1 space-y-2"></nav>

          <div className="flex items-center px-4 py-3 mt-auto mb-5 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg cursor-pointer">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
            <span className="ml-3">Logout</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
