
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { IMeta, IPost } from "../types/types";
import { getAllNews } from "../service/newsHandler";


interface UsePostsOptions {
  defaultLimit?: number;
}

export const usePosts = ({ defaultLimit = 10 }: UsePostsOptions = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [meta, setMeta] = useState<IMeta | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || defaultLimit;
  const searchTerm = searchParams.get("searchTerm") || "";

  useEffect(() => {
    let ignore = false;

    const load = async () => {
      setIsLoading(true);
      try {
        const res = await getAllNews({
          page,
          limit,
          searchTerm: searchTerm || undefined,
        });

        if (!ignore) {
          setPosts(res.data.data);
          setMeta(res.data.meta);
        }
      } catch (err) {
        console.error("Failed to fetch news:", err);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    };

    load();

    return () => {
      ignore = true; 
    };
  }, [page, limit, searchTerm]);

  const setPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    setSearchParams(params);
  };

  const setSearchTerm = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("searchTerm", value);
    } else {
      params.delete("searchTerm");
    }
    params.set("page", "1"); 
    setSearchParams(params);
  };

  const setLimit = (newLimit: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("limit", String(newLimit));
    params.set("page", "1"); 
    setSearchParams(params);
  };

  return {
    posts,
    meta,
    isLoading,
    page,
    limit,
    searchTerm,
    setPage,
    setSearchTerm,
    setLimit,
  };
};