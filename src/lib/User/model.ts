import mongoose, { Schema, Document } from "mongoose";

export enum UserRole {
  Admin = "admin",
  Mentor = "mentor",
  Mentee = "mentee",
}

export enum MeetingPreference {
  Remote = "Remote",
  InPerson = "InPerson",
}

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  intro: string;
  roles: [string];
  skills: [];
  yearsOfProfessionalExperience: number;
  timeZoneUTCOffset: number;
  availability: string;
  meetingPreference: string;
}

const UserSchema: Schema<User> = new Schema({
  name: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
  },
  roles: {
    type: [String],
    required: true,
  },
  skills: {
    type: [String],
  },
  yearsOfProfessionalExperience: {
    type: Number,
    min: 0,
    max: 100,
  },
  timeZoneUTCOffset: {
    type: Number,
    min: -12,
    max: 12,
  },
  availability: {
    type: String,
  },
  meetingPreference: {
    type: String,
    enum: Object.values(MeetingPreference),
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
