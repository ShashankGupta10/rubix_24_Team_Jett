import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Forumsidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-[60px] items-center border-b px-6">
        <a className="flex items-center gap-2 font-semibold" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M17 6.1H3"></path>
            <path d="M21 12.1H3"></path>
            <path d="M15.1 18H3"></path>
          </svg>
          <span className="">Chat Forum</span>
        </a>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          <span className="sr-only">Toggle notifications</span>
        </button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          <a
            className="flex w-full items-center py-2 text-lg font-semibold"
            href="#"
          >
            General Discussion
          </a>
          <a
            className="flex w-full items-center py-2 text-lg font-semibold"
            href="#"
          >
            Tech Talk
          </a>
          <a
            className="flex w-full items-center py-2 text-lg font-semibold"
            href="#"
          >
            Off Topics
          </a>
        </nav>
        <div
              className="absolute bottom-4 ml-4"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              <IoMdArrowBack className="w-6 h-6" />
            </div>
      </div>
    </>
  );
};

export default Forumsidebar;
