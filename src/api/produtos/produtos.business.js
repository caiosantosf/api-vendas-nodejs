import ProdutosDAO from './produtos.dao';
import CategoriasDAO from './../categorias/categorias.dao';
import Boom from '@hapi/boom';

const produtosDAO = new ProdutosDAO();
const categoriasDAO = new CategoriasDAO();

export default class ProdutosBusiness {

  async list({ params }) {
    return await produtosDAO.findAll(params);
  }

  async detail({ params }) {
    const { id } = params;
    return await produtosDAO.findByID(id);
  }

  async create({ payload, auth }) {
    const categoriaId = payload.categoriaId
    const categoria = await categoriasDAO.simpleFindById(categoriaId)

    if (categoria)
      return await produtosDAO.create({ ...payload})
    else
      return Boom.badRequest('A categoria informada não é válida!')
  }

  async update({ params, payload }) {
    const { id } = params;
    const categoriaId = payload.categoriaId
    const categoria = await categoriasDAO.simpleFindById(categoriaId)

    if (categoria)
      return await produtosDAO.update(id, payload);
    else
      return Boom.badRequest('A categoria informada não é válida!')
  }

  async destroy({ params }) {
    const { id } = params;
    return await produtosDAO.destroy(id);
  }
}
