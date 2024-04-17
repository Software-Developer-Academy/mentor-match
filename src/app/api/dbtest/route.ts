import { NextRequest, NextResponse } from "next/server";
import { connectMongo } from "@/lib/db";
import UserModel, { UserRole, MeetingPreference } from "@/lib/User/model";

export async function POST(request: NextRequest) {
   try {
      // Connect to MongoDB
      await connectMongo();

      // Extract test data from request body
      let payload = await request.json();
      const user = new UserModel(payload);
      await user.save();

      return new Response("User saved to db successfully");
   } catch (error) {
      return new Response("Error while saving user - check data ");
   }
}
