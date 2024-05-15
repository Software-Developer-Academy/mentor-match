import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // Max file size 5MB for each image
const VALID_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
] as const;
const IMAGE_ERROR_MESSAGES = {
  type: "Unsupported file type. Please upload an image.",
  size: "File is too large",
};

const fileTypeSchema = z.string().refine(
  (type) => {
    for (const validType of VALID_TYPES) {
      if (type === validType) {
        return true;
      }
    }

    return false;
  },
  {
    message: IMAGE_ERROR_MESSAGES.type,
  },
);

const fileSizeSchema = z
  .number()
  .max(MAX_FILE_SIZE, { message: IMAGE_ERROR_MESSAGES.size });

export const imageFileSchema = z.object({
  file: z.instanceof(File),
  size: fileSizeSchema,
  type: fileTypeSchema,
});
