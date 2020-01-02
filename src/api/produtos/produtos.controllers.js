import { CREATED, NO_CONTENT, OK } from 'http-status';
import ProdutosBusiness from './produtos.business';

const produtosBusiness = new ProdutosBusiness();

export default class ProdutosController {

  async list(request, h) {
    return await produtosBusiness.list(request);
  }

  async detail(request, h) {
    return await produtosBusiness.detail(request);
  }

  async create(request, h) {
    const produtoOrError = await produtosBusiness.create(request);
    if (produtoOrError.hasOwnProperty('dataValues'))
      return h.response(produtoOrError).code(CREATED);
    return produtoOrError
  }

  async update(request, h) {
    const produtoOrError = await produtosBusiness.update(request);
    if (produtoOrError.hasOwnProperty('dataValues'))
      return h.response(produtoOrError).code(OK);
    return produtoOrError
  }

  async destroy(request, h) {
    await produtosBusiness.destroy(request);
    return h.response().code(NO_CONTENT);
  }
}
