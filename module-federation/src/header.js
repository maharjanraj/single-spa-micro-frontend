import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';

export const Header = () => {
  return <h1>Header</h1>;
};

const headerLifecycles = singleSpaReact({
  React,
  ReactDOM: ReactDOMClient,
  rootComponent: Header,
  renderType: 'createRoot',
  errorBoundary: () => <div>Ops error occured</div>,
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;
