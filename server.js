import express from 'express';
import path from 'path';
import { getEnv } from './src/config/safe-env.js';

const PORT = getEnv('PORT');

import { AuthRouter } from './src/routes/auth.routes.js';
import { getSessionMiddleware } from './src/middlewares/session-middleware.js';
import { UserRouter } from './src/routes/user.routes.js';
import { makePostEndPoint } from './src/lib/create-route-handler.js';
import { z } from 'zod';
import { errorResponse, successResponse } from './src/lib/response-helpers.js';
import { TransactionRouter } from './src/routes/transaction.routes.js';
import { PayableRouter } from './src/routes/payable.routes.js';
import { checkAuth } from './src/lib/check-auth.js';
import { AdminRouter } from './src/routes/admin.routes.js';
import { SupportRouter } from './src/routes/support.routes.js';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(getSessionMiddleware());

app.use('/public', express.static(path.join(process.cwd(), 'public')));

app.use('/auth', AuthRouter);

app.use('/users', UserRouter);

app.use('/admin', AdminRouter);

app.use('/api/transactions', TransactionRouter);

app.use('/api/payables', PayableRouter);

app.use('/api/support', SupportRouter);

app.get('/', async (request, response) => {
  const authResponse = await checkAuth(request, 'BOTH');

  if (authResponse.success) {
    return response.redirect('/users/dashboard');
  }

  return response.redirect('/auth/login');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
