import PedidosDAO from './pedidos.dao';

const pedidosDAO = new PedidosDAO();

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
    console.log(payload)
    return pedidosDAO.create({ ...payload})//, userId });
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
