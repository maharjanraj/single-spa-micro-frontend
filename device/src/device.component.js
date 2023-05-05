import { useState, useEffect } from 'react';
import { fetchDevices } from '@dc/state';

export default (props) => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetchDevices().then(setDevices);
  }, []);

  console.log('Devices::', devices);

  return (
    <div>
      Select Device:
      <select onChange={props.onChange}>
        {devices.map((d) => {
          return (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
