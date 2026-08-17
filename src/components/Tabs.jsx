import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = [
    { id: "photo", label: "Photos", icon: "🖼" },
    { id: "video", label: "Videos", icon: "🎬" },
    { id: "gif", label: "GIFs", icon: "🎞" },
  ];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex flex-wrap gap-2" aria-label="Media type">
      {tabs.map((tab) => {
        return (
          <button
            type="button"
            onClick={() => {
              dispatch(setActiveTabs(tab.id));
            }}
            aria-pressed={activeTab === tab.id}
            className={`inline-flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-(--page-bg) ${
              activeTab === tab.id
                ? "bg-violet-600 text-white"
                : "border border-(--border) bg-(--surface-elevated) text-(--text-muted) hover:bg-(--surface-hover) hover:text-(--text-primary)"
            }`}
            key={tab.id}
          >
            <span aria-hidden="true">{tab.icon}</span>
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
