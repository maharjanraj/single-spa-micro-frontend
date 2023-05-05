import routes from './routes.json';
import devices from './devices.json';

export function fetchRoutes() {
  return Promise.resolve(routes);
}

export function fetchDevices() {
  return Promise.resolve(devices);
}

class State {
  state = {
    selectedDevice: null,
  };

  getDevice = () => {
    return this.state.selectedDevices;
  };

  addDevice = (device) => {
    this.state.selectedDevices = device;
  };

  removeDevice = () => {
    this.state.selectedDevice = null;
  };
}

export const state = new State();
