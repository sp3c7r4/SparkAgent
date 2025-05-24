import { db } from "../db";
import { otps } from "../db/schema";
import { eq } from "drizzle-orm";
import Mailer from "./Mailer";

class OTP {
  async createOTP(email: string) {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const createdAt = new Date();
    const updatedAt = new Date();
    try {
      await db.insert(otps).values({
        email,
        otp,
        created_at: createdAt,
        updated_at: updatedAt
      });
      Mailer.sendOtpEmail(email, otp)
      return otp;
    } catch (error) {
      console.error("Error creating OTP:", error);
      throw error;
    }
  }

  async resendOTP(email: string) {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const updated_at = new Date();
    const created_at = new Date();
    try {
      await db.update(otps).set({ otp, updated_at, created_at }).where(eq(otps.email, email));
      Mailer.sendOtpEmail(email, otp)
      return otp;
    } catch (error) {
      console.error("Error resending OTP:", error);
      throw error;
    }
  }

  async verifyOTP(email: string, otp: string) {
    const result = await db.query.otps.findFirst({
      where: (otps, { eq }) => eq(otps.email, email) && eq(otps.otp, otp)
    });

    if (!result) throw new Error("Invalid OTP");
    const createdTime = new Date(result.created_at).getTime();
    const expirationTime = createdTime + (30 * 60 * 1000); // 30 minutes in milliseconds
    if(Date.now() > expirationTime) throw new Error("OTP expired");

    return result;
  }

  async storeOTP(email: string) {
    const findByEmail = await db.query.otps.findFirst({
      where: (otps, { eq }) => eq(otps.email, email)
    });

    if(findByEmail) this.resendOTP(email);
    else this.createOTP(email);
  }
}

export default new OTP();