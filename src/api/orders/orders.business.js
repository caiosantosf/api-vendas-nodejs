import OrdersDAO from './orders.dao';
import ProductsDAO from '../products/products.dao';
import Boom from '@hapi/boom';

const ordersDAO = new OrdersDAO();
const productsDAO = new ProductsDAO();

export default class OrdersBusiness {

  async list({ params }) {
    return ordersDAO.findAll(params);
  }

  async detail({ params }) {
    const { id } = params;
    return ordersDAO.findByID(id);
  }

  async create({ payload, auth }) {
    //const { id: userId } = auth.credentials;
    const userId = 1

    const products = payload.products
    let okProducts = true
    let valorTotal = 0

    for (const product of products) {
      try {
        const Product = await productsDAO.simpleFindById(product.id)
        if (Product) {
          if (Product.dataValues.amount < product.amount) {
            okProducts = false
          } else {
            total += Product.dataValues.price * product.amount
          }
        } else {
          okProducts = false
          return Boom.notFound('Product does not exist')
        }
      } catch (e) {
        console.error(e)
      }
    }

    if (okProducts) {
      return ordersDAO.create(userId, total, products)
    } else {
      return Boom.badRequest('The requested quantity is not available.')
    }
  }

  async update({ params, payload }) {
    const { id } = params;
    return ordersDAO.update(id, payload);
  }

  async destroy({ params }) {
    const { id } = params;
    return ordersDAO.destroy(id);
  }
}
