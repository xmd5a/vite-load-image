type ImageProps = {
  isError: boolean;
  isLoading: boolean;
  src: string;
};

const Image = ({ isError, isLoading, src }: ImageProps) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {isError && <div>❌</div>}
      {isLoading ? <div>⌛</div> : <img src={src} />}
    </div>
  );
};

export { Image };
