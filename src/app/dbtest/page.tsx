import { connectMongo } from "@/lib/db";
import UserModel, { UserRole, MeetingPreference } from "@/lib/User/model";
import React from "react";

const dbTest = () => {
   connectMongo();

   // code to enter sample data to the database here
   const sampleUser = new UserModel({
      name: "Kalpesh KD",
      email: "kd@example.com",
      password: "password123",
      userIntro: "Hello, my name is KD and I am a software developer",
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
