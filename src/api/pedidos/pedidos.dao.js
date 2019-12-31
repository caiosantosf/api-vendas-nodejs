import { instances } from 'hapi-sequelizejs'
import { getObjectOr404 } from '../utils/database.utils';

const Pedido = instances.getModel('pedido');
const Produto = instances.getModel('produto')

export default class PedidosDAO {

  async findAll(params) {
    return Pedido.findAll({
      where: params
    });
  }

  async findByID(id) {
    return getObjectOr404(Pedido, {
      where: { id },
      include: [{Produto}]
    });
  }

  async create(userId, valorTotal, produtos) {
    return Pedido.create({ valorTotal, userId }).then(async pedido => {

      for (const produto of produtos)
        await pedido.addProdutos(produto.id, { through: { quantidade: produto.quantidade }})

      return Pedido.findByPk(pedido.dataValues.id, {include: [{model: Produto}]})
    });
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
