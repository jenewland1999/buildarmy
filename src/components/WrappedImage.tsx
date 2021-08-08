import Image, { ImageProps } from "next/image";

const WrappedImage: React.FC<ImageProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...rest} />
    </div>
  );
};

export default WrappedImage;
