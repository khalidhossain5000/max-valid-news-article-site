import type { ICreatNewsPayload, INewsQuery } from "../types/types";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const createNewsArticle = async (payload: ICreatNewsPayload) => {
  const res = await fetch(`${backendUrl}/api/news`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  console.log("result", result);

  return result;
};
//get post article with search filter
export const getAllNews = async (query: INewsQuery) => {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      params.set(key, String(value));
    }
  });

  const res = await fetch(`${backendUrl}/api/news?${params.toString()}`);

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res.json();
};
