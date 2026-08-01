export interface ICreatPostPayload {
    title: string;
    category: string;
    content: string;
    tags?: string[];
    isFeatured?: boolean;
    thumbnail: string
}