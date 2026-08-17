import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCollection } from "../redux/features/collectionSlice";
import ResultCard from "../components/ResultCard";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);

  const [activeTab, setActiveTab] = useState("photo");

  const tabs = [
    { id: "photo", label: "Photos", icon: "🖼" },
    { id: "video", label: "Videos", icon: "🎬" },
    { id: "gif", label: "GIFs", icon: "🎞" },
  ];

  const filtered = collection.filter((item) => item.type === activeTab);

  const emptyMessage = {
    photo: "No photos saved yet. Search and save some.",
    video: "No videos saved yet.",
    gif: "No GIFs saved yet.",
  };

  const handleClear = () => {
    dispatch(clearCollection(activeTab));
  };

  return (
    <div className="w-full px-4 py-8 md:px-6 md:py-10 lg:px-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
          Saved media
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Your Collection
        </h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          {collection.length} {collection.length === 1 ? "item" : "items"} saved
        </p>
      </header>

      <section className="mt-8" aria-label="Collection filters">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" aria-label="Saved media type">
            {tabs.map((tab) => {
              const count = collection.filter((item) => item.type === tab.id).length;

              return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[var(--page-bg)] ${
                activeTab === tab.id
                  ? "bg-violet-600 text-white"
                  : "border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
              }`}
            >
              <span aria-hidden="true">{tab.icon}</span>
              {tab.label}
              <span className={`rounded-md px-1.5 py-0.5 text-xs tabular-nums ${
                activeTab === tab.id
                  ? "bg-white/15 text-white"
                  : "bg-violet-600/20 text-violet-400"
              }`}>
                {count}
              </span>
            </button>
              );
            })}
          </div>

          {filtered.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              className="cursor-pointer text-sm font-medium text-red-400 underline underline-offset-4 transition-colors duration-200 hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-[var(--page-bg)]"
            >
              Clear all
            </button>
          )}
        </div>

        <div className="mt-8">
          {filtered.length === 0 ? (
            <div className="flex min-h-64 flex-col items-center justify-center text-center">
              <span className="text-5xl text-[var(--text-muted)]" aria-hidden="true">
                {tabs.find((tab) => tab.id === activeTab)?.icon}
              </span>
              <p className="mt-4 text-base text-[var(--text-muted)]">{emptyMessage[activeTab]}</p>
            </div>
          ) : (
            <div className="columns-2 gap-4 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6">
              {filtered.map((item) => (
                <ResultCard key={item.id} item={item} isCollectionPage={true} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CollectionPage;
