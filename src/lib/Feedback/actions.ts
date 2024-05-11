"use server";

import { ZodIssue } from "zod";

import { connectMongo } from "../db";

import FeedbackModel from "./model";
import { feedbackSchema } from "./validations";

export async function submitFeedback(
  data: FormData,
): Promise<ZodIssue[] | unknown> {
  const userId = data.get("userId");
  const mentorId = data.get("mentorId");
  const rating = data.get("rating");
  const comment = data.get("comment");

  const dataSchemaValidation = feedbackSchema.safeParse({
    userId,
    mentorId,
    rating,
    comment,
  });

  if (dataSchemaValidation.success === false) {
    return dataSchemaValidation.error.errors;
  }

  await connectMongo();

  try {
    await FeedbackModel.create({
      userId: userId,
      mentorId: mentorId,
      comment: comment,
      rating: rating,
    });
  } catch (error) {
    console.error(error);
    throw new Error(
      "We encountered a problem creating feedback. Please try again.",
    );
  }
}
