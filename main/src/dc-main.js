import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';
import microfrontendLayout from './microfrontend-layout.html';

import './index.css';

const routes = constructRoutes(microfrontendLayout);
// const routes = constructRoutes({
//   routes: [
//     {
//       type: 'route',
//       default: true,
//       routes: [
//         {
//           type: 'application',
//           name: '@dc/navbar',
//         },
//         {
//           type: 'route',
//           path: 'configure',
//           exact: true,
//           routes: [
//             {
//               type: 'application',
//               name: '@dc/configure',
//             },
//           ],
//         },
//         {
//           type: 'route',
//           path: 'configure/source',
//           routes: [
//             {
//               type: 'application',
//               name: '@dc/source',
//             },
//           ],
//         },
//         {
//           type: 'route',
//           path: 'configure/device',
//           routes: [
//             {
//               type: 'application',
//               name: '@dc/device',
//             },
//           ],
//         },
//       ],
//     },
//   ],
// });

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

console.log(routes, applications);

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

layoutEngine.activate();
start();
