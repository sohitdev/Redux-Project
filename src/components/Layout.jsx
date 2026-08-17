import { Link } from "react-router";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex justify-between items-center py-6 px-10 bg-(--c1)">
        <h2 className="font-medium text-2xl">Media Search</h2>
        <div className="flex items-center gap-5 text-xl">
          <Link className="text-lg rounded text-(--c3) px-4 py-2" to="/">
            Search
          </Link>
          <Link
            className="text-lg rounded text-(--c3) px-4 py-2"
            to="/collection"
          >
            Collection
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
