import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Header() {
  return (
    <div className="col-12 d-flex justify-content-between p-3" style={{ backgroundColor: 'black' }}>
      <Link to="/">
        {' '}
        <span className="text-white">Home</span>
        {' '}
      </Link>
      <span className="text-white">MetaCrypt</span>
      <span className="text-white  d-flex  ">
        <i className="bi bi-mic-fill" />
        <i className="bi bi-gear-fill" />
      </span>
    </div>
  );
}

export default Header;
