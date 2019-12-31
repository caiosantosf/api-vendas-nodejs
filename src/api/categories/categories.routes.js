import categoriesController from './categories.controllers';
import * as Schemas from './categories.schemas';

const controller = new categoriesController();

export default [
  {
    method: 'GET',
    path: '/categories',
    handler: controller.list,
  },
  {
    method: 'GET',
    path: '/categories/{id}',
    handler: controller.detail,
    config: {
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/categories',
    handler: controller.create,
    config: {
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/categories/{id}',
    handler: controller.update,
    config: {
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/categories/{id}',
    handler: controller.destroy,
    config: {
      validate: Schemas.destroy
    }
  }
];
