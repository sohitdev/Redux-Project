// CollectionPage.jsx
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCollection } from "../redux/features/collectionSlice";
import ResultCard from "../components/ResultCard";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);

  const [activeTab, setActiveTab] = useState("photo");

  const tabs = ["photo", "video", "gif"];

  const filtered = collection.filter((item) => item.type === activeTab);

  const emptyMessage = {
    photo: "No photos in your collection",
    video: "No videos in your collection",
    gif: "No GIFs in your collection",
  };

  const handleClear = () => {
    dispatch(clearCollection(activeTab));
  };

  return (
    <div>
      {/* FIXED: tabs and clear button in same row with space between */}
      <div className="flex items-center gap-10 px-10 py-5">
        {/* FIXED: tabs grouped together */}
        <div className="flex gap-5">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab ? "bg-blue-600" : "bg-gray-600"
              } transition cursor-pointer active:scale-95 px-5 py-2`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ADDED: clear button to the right of tabs with gap-10 spacing */}
        {filtered.length > 0 && (
          <button
            onClick={handleClear}
            className="bg-red-600 hover:bg-red-700 transition active:scale-95 text-white px-5 py-2 rounded font-medium"
          >
            Clear Collection
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh]">
          <h2 className="text-2xl font-medium text-gray-400">
            {emptyMessage[activeTab]}
          </h2>
        </div>
      ) : (
        <div className="flex justify-between w-full flex-wrap gap-5 overflow-auto px-5 py-5">
          {filtered.map((item) => (
            <ResultCard key={item.id} item={item} isCollectionPage={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
