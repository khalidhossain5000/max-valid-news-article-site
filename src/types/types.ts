export interface ICreatNewsPayload {
    title: string;
    category: string;
    content: string;
    tags?: string[];
    isFeatured?: boolean;
    thumbnail: string
}

// news related types



export interface INewsQuery {
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
  category?:string
}

export interface INews {
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
  data: INews[];
  meta: IMeta;
}