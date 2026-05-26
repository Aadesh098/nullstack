import { hc } from "hono/client";
import type { AppType } from "@nullstack/server";
import { clearAuth, getAuth } from "./auth";

export const apiClient = hc<AppType>(
  process.env.API_URL ??
    "https://nullstackserver-production-d503.up.railway.app",
  {
    fetch: async (
      input: Parameters<typeof fetch>[0],
      init?: Parameters<typeof fetch>[1],
    ) => {
      const headers = new Headers(init?.headers);
      const auth = getAuth();

      if (auth) {
        headers.set("Authorization", `Bearer ${auth.token}`);
      }

      const response = await fetch(input, { ...init, headers });
      if (response.status === 401) {
        clearAuth();
      }

      return response;
    },
  },
);
