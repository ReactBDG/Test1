import React from "react";
import {
  isAuthSelector,
  userLoadingSelector,
  userErrorSelector,
} from "../store/user/selectors";
import { useSelector } from "react-redux";
import { Navigate, useLocation, Route } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  const user = useSelector(isAuthSelector);
  // const isUserLoading = useSelector(userLoadingSelector);
  // const error = useSelector(userErrorSelector);

  const location = useLocation();

  

  if (user === null) {
    return <Navigate to="/login" state={{from: location.pathname}} />;
  }

  return children
};
