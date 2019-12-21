import ProdutosController from './produtos.controllers';
import * as Schemas from './produtos.schemas';

const controller = new ProdutosController();

export default [
  {
    method: 'GET',
    path: '/produtos',
    handler: controller.list,
    config: {
      tags: ['api', 'produtos'],
    }
  },
  {
    method: 'GET',
    path: '/produtos/{id}',
    handler: controller.detail,
    config: {
      tags: ['api', 'produtos'],
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/produtos',
    handler: controller.create,
    config: {
      tags: ['api', 'produtos'],
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/produtos/{id}',
    handler: controller.update,
    config: {
      tags: ['api', 'produtos'],
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/produtos/{id}',
    handler: controller.destroy,
    config: {
      tags: ['api', 'produtos'],
      validate: Schemas.detail
    }
  }
];
