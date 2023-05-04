import { fetchEntities } from '@dc/state';
import { useEffect, useState } from 'react';

import './configure.css';
import { navigateToUrl } from 'single-spa';

function Configure(props) {
  console.log(props);
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetchEntities().then(setEntities);
  }, []);

  return (
    <div className='small-cards'>
      {entities.map((entity) => (
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
