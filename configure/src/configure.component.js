import { fetchRoutes } from '@dc/state';
import { useEffect, useState } from 'react';

import './configure.css';
import { navigateToUrl } from 'single-spa';

function Configure(props) {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetchRoutes().then(setRoutes);
  }, []);

  console.log('Routes::', routes);

  return (
    <div className='small-cards'>
      {routes.map((entity) => (
        <div
          onClick={() => navigateToUrl(entity.path)}
          key={entity.label}
          className='small-card'
        >
          <h2>{entity.label}</h2>
        </div>
      ))}
    </div>
  );
}

export default Configure;
