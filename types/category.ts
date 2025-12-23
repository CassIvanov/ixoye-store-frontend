export type CategoryType = {
  id: number;
  categoryName: string;
  mainImage: {
    data:{
        url:string;
    } | null;
  };
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
