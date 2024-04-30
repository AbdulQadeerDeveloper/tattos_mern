// This API method verifies the current user's authentication status. If the user is logged in, it allows access to a private route (dashboard); otherwise, it redirects to the login page.
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const verifyUser = async () => {
      try {
        //{
        // Attempt to verify the user's authentication status
        // through the verifyAuth API backend. 
        //If authenticated, grant access to the private route (dashboard);
        // otherwise, redirect to the login page.}

        const response = await fetch('variflyAuth', {
          credentials: 'include', 
        });
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error verifying user:', error);
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    verifyUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optionally, replace this with a custom loading component.
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
