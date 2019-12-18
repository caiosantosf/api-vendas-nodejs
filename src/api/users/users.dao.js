import { instances } from 'hapi-sequelizejs';
import { getObjectOr404 } from '../utils/database.utils';

const User = instances.getModel('user');

export default class UsersDAO {

  async findAll(where) {
    return User.findAll({ where });
  }

  async findByID(id) {
    return getObjectOr404(User, { where: { id } });
  }

  async create(data) {
    return User.create(data);
  }

  async update(where, data) {
    const User = await this.findByID(where)

    return await User.update(data);
  }

  async destroy(where) {
    const User = await this.findByID(where);

    return User.destroy();
  }
}
