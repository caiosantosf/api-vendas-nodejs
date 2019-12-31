import { CREATED, NO_CONTENT } from 'http-status';
import OrdersBusiness from './orders.business';

const ordersBusiness = new OrdersBusiness();

export default class OrdersController {

  async list(request, h) {
    return await ordersBusiness.list(request);
  }

  async detail(request, h) {
    return await ordersBusiness.detail(request);
  }

  async create(request, h) {
    const orderOrError = await ordersBusiness.create(request);
    if (orderOrError.hasOwnProperty('dataValues'))
      return h.response(orderOrError).code(CREATED);
    return orderOrError
  }

  async update(request, h) {
    return await ordersBusiness.update(request);
  }

  async destroy(request, h) {
    await ordersBusiness.destroy(request);
    return h.response().code(NO_CONTENT);
  }
}
