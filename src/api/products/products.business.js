import ProductsDAO from './products.dao';

const productsDAO = new ProductsDAO();

export default class ProductsBusiness {

  async list({ params }) {
    return productsDAO.findAll(params);
  }

  async detail({ params }) {
    const { id } = params;
    return productsDAO.findByID(id);
  }

  async create({ payload, auth }) {
    return productsDAO.create({ ...payload})
  }

  async update({ params, payload }) {
    const { id } = params;
    return productsDAO.update(id, payload);
  }

  async destroy({ params }) {
    const { id } = params;
    return productsDAO.destroy(id);
  }
}
