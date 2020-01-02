import categoriasController from './categorias.controllers';
import * as Schemas from './categorias.schemas';

const controller = new categoriasController();

export default [
  {
    method: 'GET',
    path: '/categorias',
    handler: controller.list,
  },
  {
    method: 'GET',
    path: '/categorias/{id}',
    handler: controller.detail,
    config: {
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/categorias',
    handler: controller.create,
    config: {
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/categorias/{id}',
    handler: controller.update,
    config: {
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/categorias/{id}',
    handler: controller.destroy,
    config: {
      validate: Schemas.destroy
    }
  }
];

//