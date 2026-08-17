import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect, useCallback, useRef, useState } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, results, activeTab, loading, error } = useSelector(
    (store) => store.search,
  );
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const loadMoreRef = useRef(null);

  const getData = useCallback(async (pageNumber) => {
    if (activeTab === "photo") return fetchPhotos(query, pageNumber);
    if (activeTab === "video") return fetchVideos(query, pageNumber);
    if (activeTab === "gif") return fetchGIF(query, pageNumber);
    return [];
  }, [query, activeTab]);

  useEffect(() => {
    if (!query) {
      dispatch(setResults([]));
      return undefined;
    }

    let isCurrentRequest = true;

    const loadFirstPage = async () => {
      dispatch(setLoading());
      setPage(1);
      setHasMore(true);

      try {
        const data = await getData(1);
        if (!isCurrentRequest) return;
        dispatch(setResults(data ?? []));
        setHasMore((data ?? []).length === 20);
      } catch (err) {
        if (isCurrentRequest) dispatch(setError(err.message));
      }
    };

    loadFirstPage();

    return () => {
      isCurrentRequest = false;
    };
  }, [query, activeTab, dispatch, getData]);

  const loadMore = useCallback(async () => {
    if (!query || loading || loadingMore || !hasMore) return;

    const nextPage = page + 1;
    setLoadingMore(true);

    try {
      const data = await getData(nextPage);
      const nextResults = data ?? [];
      dispatch(setResults([...results, ...nextResults]));
      setPage(nextPage);
      setHasMore(nextResults.length === 20);
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      setLoadingMore(false);
    }
  }, [query, loading, loadingMore, hasMore, page, getData, dispatch, results]);

  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target || !query || loading || !hasMore) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMore();
      },
      { rootMargin: "300px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [query, loading, hasMore, loadMore]);

  const mediaLabel = {
    photo: "photos",
    video: "videos",
    gif: "GIFs",
  }[activeTab];

  if (error) {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center text-center">
        <span className="text-4xl" aria-hidden="true">⚠</span>
        <h2 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">Search unavailable</h2>
        <p className="mt-2 text-sm text-[var(--text-muted)]">{error}</p>
      </div>
    );
  }

  return (
    <>
      {query && !loading && (results ?? []).length > 0 && (
        <p className="mb-4 text-sm text-[var(--text-muted)]">
          {results.length} {mediaLabel} for <span className="text-[var(--text-secondary)]">“{query}”</span>
        </p>
      )}
      {loading ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              className={`animate-pulse rounded-2xl bg-[var(--surface-elevated)] ${activeTab === "photo" ? "aspect-square" : "aspect-video"}`}
              key={index}
            />
          ))}
        </div>
      ) : query && (results ?? []).length > 0 ? (
        <>
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6">
            {results.map((item) => (
              <ResultCard key={item.id} item={item} />
            ))}
          </div>
          {hasMore && (
            <div ref={loadMoreRef} className="flex h-16 items-center justify-center">
              {loadingMore && (
                <span className="h-6 w-24 animate-pulse rounded-full bg-[var(--surface-elevated)]" />
              )}
            </div>
          )}
        </>
      ) : (
        <div className="flex min-h-64 flex-col items-center justify-center text-center">
          <span className="text-5xl text-[var(--text-muted)]" aria-hidden="true">⌕</span>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            Search for photos, videos, or GIFs above
          </p>
        </div>
      )}
    </>
  );
};

export default ResultGrid;
