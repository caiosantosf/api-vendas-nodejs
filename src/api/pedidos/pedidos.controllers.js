import { CREATED, NO_CONTENT, OK } from 'http-status';
import PedidosBusiness from './pedidos.business';

const pedidosBusiness = new PedidosBusiness();

export default class PedidosController {

  async list(request, h) {
    return await pedidosBusiness.list(request);
  }

  async detail(request, h) {
    return await pedidosBusiness.detail(request);
  }

  async create(request, h) {
    const pedidoOrError = await pedidosBusiness.create(request);
    if (pedidoOrError.hasOwnProperty('dataValues'))
      return h.response(pedidoOrError).code(CREATED);
    return pedidoOrError
  }

  async update(request, h) {
    const pedidoOrError = await pedidosBusiness.update(request);
    if (pedidoOrError.hasOwnProperty('dataValues'))
      return h.response(pedidoOrError).code(OK);
    return pedidoOrError
  }

  async destroy(request, h) {
    await pedidosBusiness.destroy(request);
    return h.response().code(NO_CONTENT);
  }
}
