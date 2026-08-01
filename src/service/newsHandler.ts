import type { ICreatPostPayload } from "../types/types";


const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const createNewsArticle = async (payload: ICreatPostPayload) => {
  const res = await fetch(`${backendUrl}/api/news`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })

  const result = await res.json()

  console.log("result", result)

  return result
}