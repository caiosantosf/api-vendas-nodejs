import categoriasController from './categorias.controllers';
import * as Schemas from './categorias.schemas';

const controller = new categoriasController();

export default [
  {
    method: 'GET',
    path: '/produtos/{produtoId}/categorias',
    handler: controller.list,
    config: {
      categorias: ['api', 'produtos', 'categorias'],
      validate: Schemas.list
    }
  },
  {
    method: 'GET',
    path: '/produtos/{produtoId}/categorias/{id}',
    handler: controller.detail,
    config: {
      categorias: ['api', 'produtos', 'categorias'],
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/produtos/{produtoId}/categorias',
    handler: controller.create,
    config: {
      categorias: ['api', 'produtos', 'categorias'],
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/produtos/{produtoId}/categorias/{id}',
    handler: controller.update,
    config: {
      categorias: ['api', 'produtos', 'categorias'],
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/produtos/{produtoId}/categorias/{id}',
    handler: controller.destroy,
    config: {
      categorias: ['api', 'produtos', 'categorias'],
      validate: Schemas.destroy
    }
  }
];
