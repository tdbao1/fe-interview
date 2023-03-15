import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";


interface Props {
  children?: ReactElement;
}

const UnauthRoute: FC<Props> = () => {
  // can you check permission in here
  return <Outlet />;
};

export default UnauthRoute;
