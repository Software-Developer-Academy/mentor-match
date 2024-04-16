import { connectMongo } from "@/lib/db";
import UserModel, { UserRole, MeetingPreference } from "@/lib/User/model";
import React from "react";

const dbTest = async () => {
   await connectMongo();

   // code to enter sample data to the database here
   const sampleUser = new UserModel({
      name: "Kalpesh KD",
      email: "kd2@example.com",
      password: "password123",
      userIntro: "Hello, my name is KD and I am a software developer",
      userRole: UserRole.Admin,
      userSkills: ["JavaScript", "React"],
      yearsOfProfessionalExperience: 13,
      timeZoneUTCOffset: -6,
      availability: "9-5",
      meetingPreference: MeetingPreference.Remote,
   });

   // Save to database
   try {
      const user = await sampleUser.save();
      console.log("User saved successfully", user);
   } catch (err) {
      console.log("Error saving user", err);
   }

   return (
      <div className="flex justify-center items-center h-screen">
         <h1>DB Test</h1>{" "}
      </div>
   );
};

export default dbTest;
