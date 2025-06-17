
import React from "react";
import { guidImageMap } from "../mock/mock-images";

type Props = {
  guid: string;
  width?: string | number;
  height?: string | number;
};

const ImageLoader: React.FC<Props> = ({
  guid,
  width = "100vw",
  height = "100vh",
}) => {
  const imageUrl = guidImageMap[guid];

  if (!imageUrl) {
    return (
      <div className="flex items-center justify-center h-screen w-screen text-red-500">
        Background image not found for GUID: {guid}
      </div>
    );
  }

  return (
    <div
      className="flex-auto items-center justify-center pt-50"
      style={{
        width,
        height,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default ImageLoader;
