export interface ICreatPostPayload {
    title: string;
    category: string;
    content: string;
    tags?: string[];
    isFeatured?: boolean;
    thumbnail: string
}

// post related types

// types/post.types.ts

export interface IPostQuery {
  page?: number | string;
  limit?: number | string;
  searchTerm?: string;
  title?: string;
  content?: string;
  isFeatured?: boolean;
  tags?: string;
  status?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  tags: string[];
  isFeatured: boolean;
  thumbnail: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  category:string;
}

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface IPostsResponse {
  data: IPost[];
  meta: IMeta;
}