import { instances } from 'hapi-sequelizejs'
import { getObjectOr404 } from '../utils/database.utils';

const Pedido = instances.getModel('pedido');

export default class PedidosDAO {

  async findAll(params) {
    return Pedido.findAll({
      where: params
    });
  }

  async findByID(id) {
    return getObjectOr404(Pedido, {
      where: { id }
    });
  }

  async create(data) {
    return Pedido.create(data);
  }

  async update(id, data) {
    const pedido = await this.findByID(id);
    return pedido.update(data);
  }

  async destroy(id) {
    const pedido = await this.findByID(id);
    return pedido.destroy();
  }
}
