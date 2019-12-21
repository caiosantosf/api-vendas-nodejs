import categoriasController from './categorias.controllers';
import * as Schemas from './categorias.schemas';

const controller = new categoriasController();

export default [
  {
    method: 'GET',
    path: '/categorias',
    handler: controller.list,
    config: {
      categorias: ['api', 'categorias'],
      validate: Schemas.list
    }
  },
  {
    method: 'GET',
    path: '/categorias/{id}',
    handler: controller.detail,
    config: {
      categorias: ['api', 'categorias'],
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/categorias',
    handler: controller.create,
    config: {
      categorias: ['api', 'categorias'],
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/categorias/{id}',
    handler: controller.update,
    config: {
      categorias: ['api', 'categorias'],
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/categorias/{id}',
    handler: controller.destroy,
    config: {
      categorias: ['api', 'categorias'],
      validate: Schemas.destroy
    }
  }
];
