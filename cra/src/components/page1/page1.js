import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { state } from '@dc/state';

function Page1(props) {
  const { devices: Devices } = props;
  const [showDevices, setShowDevices] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Page1</h1>
      {Devices && (
        <>
          <button onClick={() => setShowDevices(!showDevices)}>
            Show devices
          </button>
          {showDevices && (
            <Devices
              onChange={(e) => {
                console.log(e.target.value);
                state.addDevice(e.target.value);
              }}
            />
          )}
        </>
      )}
      <button onClick={() => navigate('/page2')}>Next</button>
    </div>
  );
}

export default Page1;
