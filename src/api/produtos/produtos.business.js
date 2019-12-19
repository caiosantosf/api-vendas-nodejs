import PostsDAO from './posts.dao';

const postsDAO = new PostsDAO();

export default class PostsBusiness {

  async list({ params }) {
    return postsDAO.findAll(params);
  }

  async detail({ params }) {
    const { id } = params;

    return postsDAO.findByID(id);
  }

  async create({ payload, auth }) {
    const { id: userId } = auth.credentials;

    return postsDAO.create({ ...payload, userId });
  }

  async update({ params, payload }) {
    const { id } = params;

    return postsDAO.update(id, payload);
  }

  async destroy({ params }) {
    const { id } = params;

    return postsDAO.destroy(id);
  }
}
