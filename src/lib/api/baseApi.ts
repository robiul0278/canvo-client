import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      // Try to inject Bearer token from next-auth JWT cookie
      try {
        const cookieToken = document.cookie
          .split(";")
          .map((c) => c.trim())
          .find((c) => c.startsWith("next-auth.session-token="))
          ?.split("=")[1];
        if (cookieToken && cookieToken.length > 10) {
          headers.set("Authorization", "Bearer " + cookieToken);
        }
      } catch {
        // Browser context not available during SSR
      }
      return headers;
    },
  }),
  tagTypes: ["Products", "Categories", "Orders", "Discounts", "Reviews", "Dashboard", "FrontendContent"],
  endpoints: () => ({}),
});
