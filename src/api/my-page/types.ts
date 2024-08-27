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
