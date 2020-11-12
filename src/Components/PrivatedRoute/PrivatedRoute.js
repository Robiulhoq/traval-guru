import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { PlaceContext } from '../../App';

const PrivatedRoute = ({children, ...rest}) => {
    const { loginValue } = useContext(PlaceContext);

    const [createdUser, setCreatedUser] = loginValue;
    return (
        <Route
          {...rest}
          render={({ location }) =>
            createdUser.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivatedRoute;