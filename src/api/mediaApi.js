import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 20) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return response.data.results.map((item) => ({
    id: item.id,
    type: "photo",
    title: item.alt_description,
    thumbnail: item.urls.small,
    src: item.urls.full,
    url: item.links.html,
  }));
}

export async function fetchVideos(query, page = 1, per_page = 20) {
  const response = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, page, per_page },
    headers: { Authorization: PEXELS_KEY },
  });
  return response.data.videos.map((item) => ({
    id: item.id,
    type: "video",
    title: item.user.name || "video",
    thumbnail: item.image,
    src: item.video_files[0].link,
    url: item.url,
  }));
}

export async function fetchGIF(query, page = 1, limit = 20) {
  const offset = (page - 1) * limit;
  const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { q: query, api_key: GIPHY_KEY, limit, offset },
  });
  return response.data.data.map((item) => ({
    id: item.id,
    type: "gif",
    title: item.title || "gif",
    thumbnail: item.images.fixed_height.url,
    src: item.images.original.url,
    url: item.images.original.url,
  }));
}
