import ProdutosController from './produtos.controllers';
import * as Schemas from './produtos.schemas';

const controller = new ProdutosController();

export default [
  {
    method: 'GET',
    path: '/produtos',
    handler: controller.list,
  },
  {
    method: 'GET',
    path: '/produtos/{id}',
    handler: controller.detail,
    config: {
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/produtos',
    handler: controller.create,
    config: {
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/produtos/{id}',
    handler: controller.update,
    config: {
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/produtos/{id}',
    handler: controller.destroy,
    config: {
      validate: Schemas.detail
    }
  }
];
