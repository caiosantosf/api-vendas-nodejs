import { instances } from 'hapi-sequelizejs';
import { getObjectOr404 } from '../utils/database.utils';

const Categoria = instances.getModel('categoria');

export default class CategoriasDAO {

  async findAll(where) {
    return Categoria.findAll({ where });
  }

  async findByID(where) {
    return getObjectOr404(Categoria, { where });
  }

  async create(data) {
    return Categoria.create(data);
  }

  async update(where, data) {
    const categoria = await this.findByID(where);
    return await categoria.update(data);
  }

  async destroy(where) {
    const categoria = await this.findByID(where);
    return categoria.destroy();
  }
}
