
export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://randomuser.me/api/"
    : "https://randomuser.me/api/";

export const STORAGE_NAME =
  process.env.NODE_ENV === "production" ? "sdcwn" : "sdcln";
export const STORAGE_TOKEN =
  process.env.NODE_ENV === "production" ? "sdcwt" : "sdclt";
