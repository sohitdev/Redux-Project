import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect, useCallback } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, results, activeTab, loading, error } = useSelector(
    (store) => store.search,
  );

  const getData = useCallback(async () => {
    if (!activeTab) return;
    dispatch(setLoading());
    try {
      let data;
      if (activeTab === "photo") data = await fetchPhotos(query);
      if (activeTab === "video") data = await fetchVideos(query);
      if (activeTab === "gif") data = await fetchGIF(query);

      dispatch(setResults(data ?? []));
    } catch (err) {
      dispatch(setError(err.message));
    }
  }, [query, activeTab, dispatch]);

  useEffect(() => {
    if (query) getData();
  }, [query, activeTab, getData]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex justify-between w-full flex-wrap gap-5 overflow-auto px-5">
      {(results ?? []).map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ResultGrid;
