import { CREATED, NO_CONTENT } from 'http-status';

import PostsBusiness from './posts.business';

const postsBusiness = new PostsBusiness();

export default class PostsController {

  async list(request, h) {
    return await postsBusiness.list(request);
  }

  async detail(request, h) {
    return await postsBusiness.detail(request);
  }

  async create(request, h) {
    const post = await postsBusiness.create(request);

    return h.response(post).code(CREATED);
  }

  async update(request, h) {
    return await postsBusiness.update(request);
  }

  async destroy(request, h) {
    await postsBusiness.destroy(request);

    return h.response().code(NO_CONTENT);
  }
}
