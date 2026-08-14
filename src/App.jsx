import { fetchGifs, fetchPhotos, fetchVideos } from "./api/mediaApi";

const App = () => {
  return (
    <div className="h-screen w-full text-white bg-gray-950">
      <button
        className="bg-green-400 px-4 py-2 m-5"
        onClick={() => {
          fetchPhotos("cat");
        }}
      >
        Get Photos
      </button>

      <button
        className="bg-green-400 px-4 py-2 m-5"
        onClick={() => {
          fetchVideos("cat");
        }}
      >
        Get Videos
      </button>
      <button
        className="bg-green-400 px-4 py-2 m-5"
        onClick={() => {
          fetchGifs("cat");
        }}
      >
        Get Gifs
      </button>
    </div>
  );
};

export default App;
