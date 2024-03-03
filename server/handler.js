import { app } from '@azure/functions';
import { createRequestHandler } from '@scandinavianairlines/remix-azure-functions';

import * as build from '../build/server/index.js';

// start the static assets server
import './static-assets.js';

app.http('Remix', {
  methods: ['GET', 'POST', 'DELETE', 'HEAD', 'PATCH', 'PUT', 'OPTIONS', 'TRACE', 'CONNECT'],
  authLevel: 'function',
  handler: createRequestHandler({ build, getLoadContext: () => ({ example: true }) }),
  route: '{*path}',
});
