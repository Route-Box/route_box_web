export interface RecommendRoute {
  id: number;
  routeName: string;
  routeDescription: string;
  routeImageUrl: string;
}

export interface RecommendRoutesResponse {
  comment: string;
  routes: RecommendRoute[];
}

export interface PopularRoute {
  id: number;
  name: string;
}

export interface PopularRoutesResponse {
  routes: PopularRoute[];
}
