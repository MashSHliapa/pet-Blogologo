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
  id: number;
  title: string;
  image_url: string;
  summary: string;
}

export interface DataItemCardResponse {
  loading: boolean;
  error: null | string;
  data: ICardItem;
}
