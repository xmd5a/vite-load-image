import { useQuery } from "@tanstack/react-query";
import { getImage } from "./api";
import { Image } from "./Image";

const ImageLoader = () => {
  const { data, refetch, isError, isFetching } = useQuery(["image"], getImage, {
    enabled: false,
  });
  const handleLoadImage = () => {
    refetch();
  };

  return (
    <section>
      <button onClick={handleLoadImage}>load image 🖼️</button>
      <Image isError={isError} isLoading={isFetching} src={data?.image} />
    </section>
  );
};

export { ImageLoader };
