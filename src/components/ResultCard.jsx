import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCollection,
  removeCollection,
} from "../redux/features/collectionSlice";
// ADDED: import toast directly in component
import { toast, Zoom } from "react-toastify";

const ResultCard = ({ item, isCollectionPage = false }) => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const isSaved = useSelector((state) =>
    state.collection.items.some((savedItem) => savedItem.id === item?.id),
  );

  useEffect(() => {
    const video = videoRef.current;
    if (item?.type !== "video" || !video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [item?.type, item?.src]);

  if (!item) return null;

  const isImage = item.type === "photo" || item.type === "gif";
  const source = {
    photo: "Unsplash",
    video: "Pexels",
    gif: "Giphy",
  }[item.type];

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCollectionPage) {
      dispatch(removeCollection(item.id));
      toast.error("Removed from Collection!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Zoom,
      });
    } else {
      dispatch(addCollection(item));
    }
  };

  return (
    <article className="group mb-4 inline-block w-full break-inside-avoid overflow-hidden rounded-2xl border border-(--border) bg-(--surface) text-left transition-[transform,border-color,background-color] duration-200 hover:scale-[1.02] hover:border-violet-500/30">
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="relative block overflow-hidden"
        aria-label={`Open ${item.title || item.type} source`}
      >
        {isImage && (
          <img
            className="h-auto w-full transition-transform duration-200 group-hover:scale-[1.03]"
            src={item.thumbnail || item.src}
            alt={item.title || `${item.type} result`}
            loading="lazy"
            decoding="async"
          />
        )}
        {item.type === "video" && (
          <video
            ref={videoRef}
            className="h-auto w-full transition-transform duration-200 group-hover:scale-[1.03]"
            loop
            muted
            playsInline
            poster={item.thumbnail}
            preload="metadata"
            src={item.src}
          />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-medium text-gray-400 backdrop-blur-sm">
          {source}
        </span>
      </a>
      <div className="flex items-center justify-between gap-3 p-4">
        <p className="min-w-0 truncate text-sm text-(--text-secondary)">
          {item.title || `Untitled ${item.type}`}
        </p>
        <button
          type="button"
          disabled={!isCollectionPage && isSaved}
          className={`shrink-0 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-(--surface) disabled:cursor-not-allowed ${
            isCollectionPage
              ? "border-red-500/60 text-red-400 hover:border-red-500 hover:bg-red-500 hover:text-white"
              : isSaved
                ? "border-emerald-500 bg-emerald-500 text-white"
                : "border-violet-500/60 text-violet-400 hover:border-violet-500 hover:bg-violet-500/10"
          }`}
          onClick={handleClick}
        >
          {isCollectionPage ? "Remove" : isSaved ? "✓ Saved" : "Save"}
        </button>
      </div>
    </article>
  );
};

export default ResultCard;
