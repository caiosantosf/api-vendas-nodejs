import { CREATED, NO_CONTENT } from '../orders/node_modules/http-status';
import CategoriesDAO from './categories.dao';

const categoriesDAO = new CategoriesDAO();

export default class CategoriesController {

  async list({ params }, h) {
    return await categoriesDAO.findAll(params);
  }

  async detail({ params }, h) {
    return await categoriesDAO.findByID(params);
  }

  async create({ params, payload }, h) {
    const category = await categoriesDAO.create({ ...payload })
    return h.response(category).code(CREATED);
  }

  async update({ params, payload }, h) {
    return await categoriesDAO.update(params, payload);
  }

  async destroy({ params }, h) {
    await categoriesDAO.destroy(params);
    return h.response().code(NO_CONTENT);
  }
}
