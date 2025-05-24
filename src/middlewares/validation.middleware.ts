import { Context, Next } from "hono";
import { z } from "zod";
import { db } from "../db";


export const validateEmail = async (c: Context, next: Next) => {
  const { email } = await c.req.json()
  console.log(email)
  if (!email) return c.json({success: false, message: 'Email is required' }, 400);
  const findByEmail = await db.query.users.findFirst({
    where: (users, {eq}) => eq(users.email, email)
  })
  if(findByEmail) return c.json({success: false, message: 'Email already exists' }, 400); 
  await next()
}

export const validatePhone = async (c: Context, next: Next) => {
  const { phone } = await c.req.json()
  console.log(phone)
  if (!phone) return c.json({success: false, message: 'Phone number is required' }, 400);
  const findByPhone = await db.query.users.findFirst({
    where: (users, {eq}) => eq(users.phone, phone)
  })
  if(findByPhone)  return c.json({success: false, message: 'Phone number already exists' }, 400); 
  await next()
}