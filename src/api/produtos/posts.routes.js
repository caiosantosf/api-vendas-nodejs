import PostsController from './posts.controllers';
import * as Schemas from './posts.schemas';

const controller = new PostsController();

export default [
  {
    method: 'GET',
    path: '/posts',
    handler: controller.list,
    config: {
      tags: ['api', 'posts'],
    }
  },
  {
    method: 'GET',
    path: '/posts/{id}',
    handler: controller.detail,
    config: {
      tags: ['api', 'posts'],
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/posts',
    handler: controller.create,
    config: {
      tags: ['api', 'posts'],
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/posts/{id}',
    handler: controller.update,
    config: {
      tags: ['api', 'posts'],
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/posts/{id}',
    handler: controller.destroy,
    config: {
      tags: ['api', 'posts'],
      validate: Schemas.detail
    }
  }
];
