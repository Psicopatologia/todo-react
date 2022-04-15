import React from 'react';
import ReactDOM from 'react-dom/client';
import { createPortal } from 'react-dom'
import './styles/index.scss';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);

createPortal(
  <App />,
  document.getElementById('modal')
)