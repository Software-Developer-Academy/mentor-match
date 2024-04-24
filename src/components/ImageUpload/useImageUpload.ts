import { imageFileSchema } from "@/lib/User/validations/files";
import { useState } from "react";

export const useImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const validateImage = (file: File): boolean => {
    const validationResult = imageFileSchema.safeParse({
      file: file,
      size: file.size,
      type: file.type,
    });

    if (validationResult.success) {
      return true;
    } else {
      setErrors((prevErrors) => [
        ...prevErrors,
        ...validationResult.error.issues.map((issue) => issue.message),
      ]);
      return false;
    }
  };

  // Add the resetErrors function to clear previous errors
  const resetErrors = () => {
    setErrors([]);
  };

  const handleSelectImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    resetErrors();
    const files = event.target.files;
    if (!files) return;

    const newImages = Array.from(files).filter(validateImage);

    setSelectedImages((currentImages) => [
      ...currentImages,
      ...newImages.filter(
        (file) => !currentImages.map((f) => f.name).includes(file.name),
      ),
    ]);
  };

  const handleDragImages = (files: FileList) => {
    resetErrors();
    const newImages = Array.from(files).filter(validateImage);

    setSelectedImages((currentImages) => [
      ...currentImages,
      ...newImages.filter(
        (file) => !currentImages.map((f) => f.name).includes(file.name),
      ),
    ]);
  };

  const handleRemoveImage = (imageName: string) => {
    setSelectedImages((currentImages) =>
      currentImages.filter((image) => image.name !== imageName),
    );
  };

  return {
    selectedImages,
    handleSelectImages,
    handleDragImages,
    handleRemoveImage,
    errors,
  };
};
