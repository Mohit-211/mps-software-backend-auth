import { RequestHandler } from 'express';
import rateLimit from 'express-rate-limit';

const authLimiterOptions = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  skipSuccessfulRequests: true,
};

const authLimiter: RequestHandler = rateLimit(authLimiterOptions);

export default authLimiter;
