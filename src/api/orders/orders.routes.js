import ordersController from '. orders.controllers';
import * as Schemas from '. orders.schemas';

const controller = new ordersController();

export default [
  {
    method: 'GET',
    path: ' orders',
    handler: controller.list,
  },
  {
    method: 'GET',
    path: ' orders/{id}',
    handler: controller.detail,
    config: {
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: ' orders',
    handler: controller.create,
    config: {
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: ' orders/{id}',
    handler: controller.update,
    config: {
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: ' orders/{id}',
    handler: controller.destroy,
    config: {
      validate: Schemas.destroy
    }
  }
];