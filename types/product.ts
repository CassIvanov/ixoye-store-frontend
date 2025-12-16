export type productType = {
  id: number;
  productName: string;
  slug: string;
  description: string;
  price: number;
  active: boolean;
  origin: string;
  isFeatured: boolean;
    images: {
        id: number;
        url: string;
    }[] | null;
    category: {
        id: number;
        name: string;
    };
  };
