
import React from "react";
import { guidImageMap } from "../mock/mock-images";

type Props = {
  guid: string;
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
};

const ImageLoader: React.FC<Props> = ({
  guid,
  width = "100vw",
  height = "100vh",
  children,
}) => {
  const imageUrl = guidImageMap[guid];

  return (
    <div
      className="flex items-center justify-center"
      style={{
        width,
        height,
        backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: imageUrl ? undefined : "#111",
      }}
    >
      {imageUrl ? children : (
        <div className="text-red-500">
          Background image not found for GUID: {guid}
        </div>
      )}
    </div>
  );
};

export default ImageLoader;