import * as React from "react";
import Image, { ImageProps } from "next/image";

interface Props {
  className: string;
  imageProps: ImageProps;
}

const WrappedImage = (props: Props) => {
  const { className, imageProps } = props;
  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...imageProps} />
    </div>
  );
};

export default WrappedImage;
