import { instances } from 'hapi-sequelizejs'
import { getObjectOr404 } from '../utils/database.utils';

const Post = instances.getModel('post');

export default class PostsDAO {

  async findAll(params) {
    return Post.findAll({
      where: params,
      include: [ 'tags' ]
    });
  }

  async findByID(id) {
    return getObjectOr404(Post, {
      where: { id },
      include: [ 'tags' ]
    });
  }

  async create(data) {
    return Post.create(data);
  }

  async update(id, data) {
    const post = await this.findByID(id);

    return post.update(data);
  }

  async destroy(id) {
    const post = await this.findByID(id);

    return post.destroy();
  }
}
