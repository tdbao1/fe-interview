interface SingleRoute {
  path: string;
  element: JSX.Element;
  guard?: JSX.Element;
}
export interface RouteConfig extends SingleRoute {
  children?: SingleRoute[];
}
