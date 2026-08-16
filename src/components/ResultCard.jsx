const ResultCard = ({ item }) => {
  const addToCOllection = (item) => {
    const oldData = JSON.parse(localStorage.getItem("collection")) || [];

    const data = [...oldData, item];

    localStorage.setItem("collection", JSON.stringify(data));
  };

  const isImage = item.type === "photo" || item.type === "gif";

  return (
    <div className="w-[23vw] h-80 relative bg-white rounded overflow-hidden">
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="h-full block"
      >
        {isImage && (
          <img
            className="w-full h-full object-cover object-center"
            src={item.src}
            alt={item.title}
          />
        )}
        {item.type === "video" && (
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          />
        )}
      </a>
      <div className="w-full py-2 px-2 absolute bottom-0 bg-linear-to-b from-transparent to-black text-white">
        <button
          className="bg-red-400 active:scale-95 text-white rounded px-3 font-medium"
          onClick={() => {
            addToCOllection(item);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
