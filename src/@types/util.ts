export type PagedResponse<T> = {
  contents: T[];
  currentPage: number;
  hasNext: boolean;
  size: number;
};

export type PageOptions = {
  page?: number;
  size?: number;
  sort?: string[];
};

export type CoordinateOption = {
  lowLongitude: string;
  highLongitude: string;
  lowLatitude: string;
  highLatitude: string;
};

export type FilterOption = {
  region?: string;
  category?: string;
};

export type PaginationOption = {
  page?: number;
  size?: number;
  sort?: string[];
};

export type CenterOption = {
  centerX: string;
  centerY: string;
};

export type ZoomOption = {
  zoom: string;
};
