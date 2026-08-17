import ResultCard from "./ResultCard";

const CollectionCard = ({ item }) => {
  if (!item) return null;

  return <ResultCard item={item} isCollectionPage />;
};

export default CollectionCard;
