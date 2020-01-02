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
    return await getObjectOr404(Pedido, {
      where: { id },
      include: [{model: Produto}]
    });
  }

  async simpleFindById(id) {
    return await Pedido.findByPk(id)
  }

  async create(userId, valorTotal, produtos) {
    return Pedido.create({ valorTotal, userId }).then(async pedidoInserted => {

      for (const produto of produtos)
        await pedidoInserted.addProdutos(produto.id, { through: { quantidade: produto.quantidade }})

      return await Pedido.findByPk(pedidoInserted.dataValues.id, {include: [{model: Produto}]})
    });
  }

  async update(id, userId, valorTotal, produtos) {
    const pedido = await this.simpleFindById(id);

    return await pedido.update({ id, valorTotal, userId}).then(async pedidoUpdated => {

      for (const produto of produtos)
        await pedidoUpdated.setProdutos(produto.id, { through: { quantidade: produto.quantidade }})

      return await Pedido.findByPk(pedidoUpdated.dataValues.id, {include: [{model: Produto}]})
    })
  }

  async destroy(id) {
    const pedido = await this.findByID(id);
    return pedido.destroy();
  }
}
