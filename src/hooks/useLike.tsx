export default function useLike() {
  const handleLikeItem = () => {
    console.log("like Item");
  };

  return {
    handleLikeItem,
  };
}
