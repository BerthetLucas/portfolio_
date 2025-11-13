import dotenv from 'dotenv';

dotenv.config();

export const SERVICE_ID = process.env.SERVICE_ID as string;
export const TEMPLATE_ID = process.env.TEMPLATE_ID as string;
export const PUBLIC_KEY = process.env.PUBLIC_KEY as string;
