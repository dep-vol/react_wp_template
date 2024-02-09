// import * as React from 'react';
import { createRoot } from 'react-dom/client';

import 'core-js';

import { App } from './App';

const root = createRoot(document.getElementById('root') ?? document.body);

root.render(<App />);
