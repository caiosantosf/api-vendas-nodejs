import PedidosController from './pedidos.controllers';
import * as Schemas from './pedidos.schemas';

const controller = new PedidosController();

export default [
  {
    method: 'GET',
    path: '/pedidos',
    handler: controller.list,
  },
  {
    method: 'GET',
    path: '/pedidos/{id}',
    handler: controller.detail,
    config: {
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/pedidos',
    handler: controller.create,
    config: {
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/pedidos/{id}',
    handler: controller.update,
    config: {
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/pedidos/{id}',
    handler: controller.destroy,
    config: {
      validate: Schemas.detail
    }
  }
];
