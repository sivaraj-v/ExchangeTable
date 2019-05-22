import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
const ExchangeTable = React.lazy(() => import('./ExchangeTable'));
ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <ExchangeTable />
  </Suspense>,
  document.getElementById('index')
);
