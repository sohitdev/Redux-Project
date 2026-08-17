import { NavLink } from "react-router";
import { useSelector } from "react-redux";

const Layout = ({ children, theme, onToggleTheme }) => {
  const savedCount = useSelector((state) => state.collection.items.length);

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[var(--page-bg)] ${
      isActive
        ? "font-semibold text-violet-400"
        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
    }`;

  return (
    <div className="min-h-screen bg-[var(--page-bg)] transition-colors duration-200">
      <header className="border-b border-[var(--border)] bg-[var(--page-bg)] transition-colors duration-200">
        <nav className="flex h-16 w-full items-center justify-between px-4 md:px-6 lg:px-8">
          <NavLink
            className="text-lg font-bold tracking-tight text-[var(--text-primary)] transition-colors hover:text-violet-400"
            to="/"
          >
            <span className="sm:hidden">Media</span>
            <span className="hidden sm:inline">Media Search</span>
          </NavLink>
          <div className="flex items-center gap-1">
            <NavLink className={linkClass} to="/">
              Search
            </NavLink>
            <NavLink className={linkClass} to="/collection">
              <span>Collection</span>
              <span className="ml-1.5 inline-flex min-w-5 items-center justify-center rounded-full bg-violet-600/20 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-violet-400">
                {savedCount}
              </span>
            </NavLink>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="ml-1 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-base text-[var(--text-secondary)] transition-colors duration-200 hover:bg-[var(--surface-hover)] hover:text-violet-500 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[var(--page-bg)]"
            >
              <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
            </button>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
