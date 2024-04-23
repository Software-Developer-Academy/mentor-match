import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ImagePreviewProps {
  image: File;
  onRemove: (imageName: string) => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ image, onRemove }) => {
  const [previewUrl, setPreviewUrl] = useState<string>();

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => setPreviewUrl(reader.result as string);
    reader.readAsDataURL(image);
  }, [image]);

  return (
    <div className="relative p-1 border border-gray-300 rounded-md">
      {previewUrl && (
        <>
          <Image
            src={previewUrl}
            width={80}
            height={80}
            alt={`Preview ${image.name}`}
            objectFit="cover"
            layout="fixed"
          />
          <button
            onClick={() => onRemove(image.name)}
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
            style={{ transform: "translate(50%, -50%)" }}
          >
            ✕{" "}
            {/* You can use an SVG icon or a different symbol here if you prefer */}
          </button>
        </>
      )}
    </div>
  );
};

export default ImagePreview;
