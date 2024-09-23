export interface UserProfileResponse {
  id: number;
  profileImageUrl: string;
  nickname: string;
  gender: string;
  birthDay: string;
  introduction: string;
  numOfRoutes: number;
  mostVisitedLocation: string;
  mostTaggedRouteStyles: string;
}

export interface RootObject {
  routes: Route[];
}
export interface Route {
  routeId: number;
  routeName: string;
  routeDescription: string;
  routeImageUrl: string;
  createdAt: string;
}

export interface MyInfoRequest {
  nickname?: string;
  gender?: string;
  birthDay?: string;
  introduction?: string;
  profileImage?: File | null;
}

export interface MyInfoResponse {
  id: number;
  profileImageUrl: string;
  nickname: string;
  point: number;
  gender: string;
  birthDay: string;
  introduction: string;
}

export interface RouteContent {
  id: number;
  name: string;
  description: string;
  purchasedAt: string;
  thumbnailImageUrl: string | null;
}

export interface Sort {
  direction: string;
  nullHandling: string;
  ascending: boolean;
  property: string;
  ignoreCase: boolean;
}

export interface Pagination {
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort[];
  numberOfElements: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: Sort[];
    offset: number;
    unpaged: boolean;
    paged: boolean;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface MyPurchaseRoutesResponse extends Pagination {
  content: RouteContent[];
}
