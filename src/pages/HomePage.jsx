import ResultGrid from "../components/ResultGrid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

const HomePage = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(124,58,237,0.16),transparent_70%),radial-gradient(ellipse_45%_35%_at_95%_20%,rgba(91,33,182,0.1),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 -z-10 h-72 w-72 rounded-full bg-violet-700/10 blur-3xl"
      />
      <div className="w-full px-4 py-8 md:px-6 md:py-10 lg:px-8">
        <section className="w-full">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
          Find media
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Search your next visual.
        </h1>
        <p className="mt-3 text-base text-[var(--text-secondary)]">
          Browse photos, videos, and GIFs from one focused search.
        </p>
        <div className="mt-8">
          <SearchBar />
        </div>
        <div className="mt-4">
          <Tabs />
        </div>
        </section>
        <section className="mt-10" aria-label="Search results">
          <ResultGrid />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
