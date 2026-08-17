import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex w-full flex-col gap-3 sm:flex-row"
    >
      <label className="sr-only" htmlFor="media-search">
        Search media
      </label>
      <input
        id="media-search"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        required
        className="w-full rounded-xl border border-(--border-strong) bg-(--surface) px-5 py-3 text-base text-(--text-primary) placeholder:text-(--text-muted)transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
        type="text"
        placeholder="Search photos, videos, GIFs..."
      />
      <button className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-violet-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-(--page-bg)">
        <span aria-hidden="true">⌕</span>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
