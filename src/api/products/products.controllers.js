import { CREATED, NO_CONTENT } from 'http-status';
import ProductsBusiness from './products.business';

const productsBusiness = new ProductsBusiness();

export default class ProductsController {

  async list(request, h) {
    return await productsBusiness.list(request);
  }

  async detail(request, h) {
    return await productsBusiness.detail(request);
  }

  async create(request, h) {
    const product = await productsBusiness.create(request);
    return h.response(product).code(CREATED);
  }

  async update(request, h) {
    return await productsBusiness.update(request);
  }

  async destroy(request, h) {
    await productsBusiness.destroy(request);
    return h.response().code(NO_CONTENT);
  }
}
