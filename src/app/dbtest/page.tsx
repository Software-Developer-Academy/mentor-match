import { connectMongo } from "@/lib/db";
import UserModel, { UserRole, MeetingPreference } from "@/lib/User/model";
import React from "react";
// import TestForm from "@/components/TestForm";

/**
 * Connects to the MongoDB database and saves a sample user to the database.
 *
 * This function is used to test the database connection and perform a sample data
 * insertion operation. It creates a new `UserModel` instance with sample data and
 * saves it to the database.
 *
 * @returns A React component that displays a message indicating that the sample
 * data has been entered.
 */
const dbTest = () => {
   connectMongo();

   // code to enter sample data to the database here
   const sampleUser = new UserModel({
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      userIntro: "Hello, my name is John and I am a software developer",
      userRole: UserRole.Admin,
      userSkills: ["JavaScript", "React"],
      yearsOfProfessionalExperience: 5,
      timeZoneUTCOffset: -5,
      availability: "9-5",
      meetingPreference: MeetingPreference.Remote,
   });

   // Save to database
   sampleUser
      .save()
      .then((user) => {
         console.log("User saved successfully", user);
      })
      .catch((err) => {
         console.log("Error saving user", err);
      });

   console.log("DB Test");
   return (
      <div className="flex justify-center items-center h-screen">
         <h1>DB Test</h1>{" "}
      </div>
   );
};

export default dbTest;
