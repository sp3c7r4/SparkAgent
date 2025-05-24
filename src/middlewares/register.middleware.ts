import { Context, Next } from "hono";
import { z } from "zod";

const userRegistrationSchema = z.object({
  email: z.string().email("Invalid email address"),
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be valid"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  pin: z.string().length(4, "PIN must be exactly 4 characters"),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  address: z.string().min(5, "Address is required")
});

export const validateRegisterFields = async (c: Context, next: Next) => {
    try {
      const body = await c.req.json();
      
      // Validate the request body against our schema
      const result = userRegistrationSchema.safeParse(body);
      
      if (!result.success) {
        // Format validation errors
        const formattedErrors = result.error.format();
        return c.json({
          success: false,
          message: 'Validation failed',
          errors: formattedErrors
        }, 400);
      }
      
      // Continue to the next handler
      await next();
    } catch (error) {
      return c.json({
        success: false,
        message: 'Invalid JSON payload',
        error: error instanceof Error ? error.message : 'Unknown error'
      }, 400);
    }
  }