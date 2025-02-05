import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Oops! The page you are looking for does not exist.</p>
      <Link href="/">
        <button className="mt-4 px-6 py-3 text-lg font-semibold text-gray-900 bg-white rounded-lg shadow-md hover:bg-gray-200">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
