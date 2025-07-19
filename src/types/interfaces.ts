export interface ICatalogCard {
  id: number;
  image_url: string;
  updated_at: string;
  title: string;
}

export interface DataBlogResponse {
  loading: boolean;
  error: null | string;
  data: ICatalogCard[];
}

export interface ICardItem {
  title: string;
  image_url: string;
  summary: string;
}
