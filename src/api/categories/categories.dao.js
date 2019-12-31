import { instances } from '../orders/node_modules/hapi-sequelizejs';
import { getObjectOr404 } from '../utils/database.utils';

const Category = instances.getModel('category');

export default class CategoriesDAO {

  async findAll(where) {
    return Category.findAll({ where });
  }

  async findByID(where) {
    return getObjectOr404(Category, { where });
  }

  async create(data) {
    return Category.create(data);
  }

  async update(where, data) {
    const category = await this.findByID(where);
    return await category.update(data);
  }

  async destroy(where) {
    const category = await this.findByID(where);
    return category.destroy();
  }
}
