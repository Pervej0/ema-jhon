import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PrivatRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Route
          {...rest}
          render={({ location }) =>
            user ? (
              children
            ) : (
              <Redirect
                to={{ pathname: "/login", state: { from: location } }}
              />
            )
          }
        />
      )}
    </>
  );
};

export default PrivatRoute;
