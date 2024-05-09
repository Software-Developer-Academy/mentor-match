import { z } from "zod";

export const FEEDBACK_RATING_MIN = 1;
export const FEEDBACK_RATING_MAX = 5;

const COMMENT_MAX_LENGTH = 300;

export const ratingValidator = z
  .string()
  .min(FEEDBACK_RATING_MIN, {
    message: `Rating must be at least ${FEEDBACK_RATING_MIN}`,
  })
  .max(FEEDBACK_RATING_MAX, {
    message: `Rating must be no more than ${FEEDBACK_RATING_MAX}`,
  });

export const commentValidator = z.string().max(COMMENT_MAX_LENGTH, {
  message: `Comment must be no more than ${COMMENT_MAX_LENGTH} characters long`,
});

export const userIdValidator = z
  .string()
  .min(1, "Feedback must contain user id");

export const mentorIdValidator = z
  .string()
  .min(1, "Feedback must contain user id");

export const feedbackSchema = z.object({
  mentorId: mentorIdValidator,
  userId: userIdValidator,
  rating: ratingValidator,
  comment: commentValidator,
});
