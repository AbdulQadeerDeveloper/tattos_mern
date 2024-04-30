// NotFoundComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundComponent = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 Not Found</h1>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFoundComponent;
