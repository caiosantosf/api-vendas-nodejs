import ProductsController from './products.controllers';
import * as Schemas from './products.schemas';

const controller = new ProductsController();

export default [
  {
    method: 'GET',
    path: '/products',
    handler: controller.list,
  },
  {
    method: 'GET',
    path: '/products/{id}',
    handler: controller.detail,
    config: {
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/products',
    handler: controller.create,
    config: {
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/products/{id}',
    handler: controller.update,
    config: {
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/products/{id}',
    handler: controller.destroy,
    config: {
      validate: Schemas.detail
    }
  }
];
