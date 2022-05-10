import { controller, IAppController } from '@foal/core';
import { createConnection } from 'typeorm';

import { ApiController, UsersController } from './controllers';

export class AppController implements IAppController {
  subControllers = [
    controller('/api', ApiController),
    controller('/users', UsersController)
  ];

  async init() {
    await createConnection();
  }
}
