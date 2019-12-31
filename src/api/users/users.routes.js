import UsersController from './users.controllers';
import * as Schemas from './users.schemas';

const controller = new UsersController();

export default [
  {
    method: 'GET',
    path: '/users',
    handler: controller.list,
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: controller.detail,
    config: {
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/users',
    handler: controller.create,
    config: {
      auth: false,
      validate: Schemas.create
    }
  },
  {
    method: 'POST',
    path: '/users/login',
    handler: controller.login,
    config: {
      auth: false,
      validate: Schemas.login
    }
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: controller.update,
    config: {
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: controller.destroy,
    config: {
      validate: Schemas.detail
    }
  }
];