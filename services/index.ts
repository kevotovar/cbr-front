import axios from 'axios';
import { REALTIES_SEARCH } from '../endpoints';

type RealtyPictureSearchItem = {
  mediumPictureUrl: string;
  largePictureUrl: string;
};

type RealtySearchItem = {
  id: string;
  code: string;
  price: string;
  type: string;
  typeCode: string;
  operation: string;
  typeOperationText: string;
  description: string;
  location: string;
  shortLocation: string;
  settlement: string;
  zone: string;
  latitude: string;
  longitude: string;
  bedrooms: string;
  bathrooms: string;
  constructionSize: string;
  lotSize: string;
  parkingSpaces: string;
  pictureUrl: string;
  mediumPictureUrl: string;
  pictures: RealtyPictureSearchItem[];
  status: string;
  statusValue: string;
  url: string;
};

export interface RealtiesSearchPageResponse {
  pageNumber: number;
  pageCount: number;
  pageSize: number;
  totalItems: number;
  items: [];
}

export async function fetchRealtiesSearch(params?: object) {
  return await axios.get<RealtiesSearchPageResponse>(REALTIES_SEARCH, {
    params,
  });
}
