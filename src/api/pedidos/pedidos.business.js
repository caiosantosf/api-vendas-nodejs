import PedidosDAO from './pedidos.dao';
import ProdutosDAO from './../produtos/produtos.dao';
import Boom from '@hapi/boom';

const pedidosDAO = new PedidosDAO();
const produtosDAO = new ProdutosDAO();

export default class PedidosBusiness {

  async list({ params }) {
    return await pedidosDAO.findAll(params);
  }

  async detail({ params }) {
    const { id } = params;
    return await pedidosDAO.findByID(id);
  }

  async create({ payload, auth }) {
    //const { id: userId } = auth.credentials;
    const userId = 1
    const produtos = payload.produtos

    let {valorTotal, erros} = await this.validaProdutos(produtos)

    if (!erros.length) {
      return await pedidosDAO.create(userId, valorTotal, produtos)
    } else {
      return Boom.badRequest(erros.join(' | '))
    }
  }

  async update({ params, payload }) {
    const { id } = params;
    const { id: userId } = auth.credentials;
    const produtos = payload.produtos

    let {valorTotal, erros} = await this.validaProdutos(produtos)

    if (!erros.length) {
      return await pedidosDAO.update(id, userId, valorTotal, produtos);
    } else {
      return Boom.badRequest(erros.join(' | '))
    }
  }

  async destroy({ params }) {
    const { id } = params;
    return await pedidosDAO.destroy(id);
  }

  async validaProdutos(produtos) {
    let valorTotal = 0
    let erros = []

    for (const produto of produtos) {
      try {
        const Produto = await produtosDAO.simpleFindById(produto.id)
        if (Produto) {
          if (Produto.dataValues.quantidade < produto.quantidade) {
            erros.push(`A quantidade para o produto ${produto.id} não está disponível`)
          } else {
            valorTotal += Produto.dataValues.valor * produto.quantidade
          }
        } else {
          erros.push(`Produto ${produto.id} não existe`)
        }
      } catch (e) {
        console.error(e)
      }
    }

    return {valorTotal, erros}
  }
}