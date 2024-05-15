"use client";

import React from "react";

import ImagePreview from "./ImagePreview";
import { useImageUpload } from "./useImageUpload";

export const ImageUpload = () => {
  const {
    selectedImages,
    handleSelectImages,
    handleDragImages,
    handleRemoveImage,
    errors,
  } = useImageUpload();

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleDragImages(event.dataTransfer.files);
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        onDrop={onDrop}
        onDragOver={(event) => event.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer"
      >
        Drag and drop images here, or click to select images
        <input
          type="file"
          multiple
          onChange={handleSelectImages}
          accept="image/*"
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="ml-2 mt-2 text-blue-700 hover:text-blue-900 cursor-pointer"
        >
          <span>Select Images</span>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {selectedImages.map((image) => (
          <ImagePreview
            key={image.name}
            image={image}
            onRemove={handleRemoveImage}
          />
        ))}
      </div>
      {errors.map((error, index) => (
        <div key={index} className="text-red-500" role="alert">
          {error}
        </div>
      ))}
    </div>
  );
};
