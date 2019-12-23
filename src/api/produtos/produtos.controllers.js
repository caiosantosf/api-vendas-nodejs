import { CREATED, NO_CONTENT } from 'http-status';
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
    console.log('oi')
    const produto = await produtosBusiness.create(request);
    return h.response(produto).code(CREATED);
  }

  async update(request, h) {
    return await produtosBusiness.update(request);
  }

  async destroy(request, h) {
    await produtosBusiness.destroy(request);
    return h.response().code(NO_CONTENT);
  }
}
