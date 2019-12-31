import PedidosDAO from './pedidos.dao';
import ProdutosDAO from './../produtos/produtos.dao';
import Boom from '@hapi/boom';

const pedidosDAO = new PedidosDAO();
const produtosDAO = new ProdutosDAO();

export default class PedidosBusiness {

  async list({ params }) {
    return pedidosDAO.findAll(params);
  }

  async detail({ params }) {
    const { id } = params;
    return pedidosDAO.findByID(id);
  }

  async create({ payload, auth }) {
    //const { id: userId } = auth.credentials;
    const userId = 1

    const produtos = payload.produtos
    let okProducts = true
    let valorTotal = 0

    for (const produto of produtos) {
      try {
        const Produto = await produtosDAO.simpleFindById(produto.id)
        if (Produto) {
          if (Produto.dataValues.quantidade < produto.quantidade) {
            okProducts = false
          } else {
            valorTotal += Produto.dataValues.valor * produto.quantidade
          }
        } else {
          okProducts = false
          return Boom.notFound('Product does not exist')
        }
      } catch (e) {
        console.error(e)
      }
    }

    if (okProducts) {
      return pedidosDAO.create(userId, valorTotal, produtos)
    } else {
      return Boom.badRequest('The requested quantity is not available.')
    }
  }

  async update({ params, payload }) {
    const { id } = params;
    return pedidosDAO.update(id, payload);
  }

  async destroy({ params }) {
    const { id } = params;
    return pedidosDAO.destroy(id);
  }
}
