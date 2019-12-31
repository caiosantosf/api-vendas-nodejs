import ProdutosDAO from './produtos.dao';

const produtosDAO = new ProdutosDAO();

export default class ProdutosBusiness {

  async list({ params }) {
    return produtosDAO.findAll(params);
  }

  async detail({ params }) {
    const { id } = params;
    return produtosDAO.findByID(id);
  }

  async create({ payload, auth }) {
    return produtosDAO.create({ ...payload})
  }

  async update({ params, payload }) {
    const { id } = params;
    return produtosDAO.update(id, payload);
  }

  async destroy({ params }) {
    const { id } = params;
    return produtosDAO.destroy(id);
  }
}
