import mongoose, { Schema, Document } from "mongoose";

export interface IFeedback extends Document {
    mentorId: mongoose.Types.ObjectId; // Reference to the user who receives feedback
    userId: mongoose.Types.ObjectId; // Reference to the user who submits feedback
    rating: number; // Rating between 1 and 5
    comment: string; // Optional comments, maximum 500 characters
    createdAt: Date; // Creation timestamp
    updatedAt: Date; // Last update timestamp
}

const feedbackSchema = new Schema<IFeedback>(
    {
        mentorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
        comment: {
            type: String,
            maxlength: 500,
        },
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    },
);

const FeedbackModel = mongoose.model<IFeedback>("Feedback", feedbackSchema);

export default FeedbackModel;
