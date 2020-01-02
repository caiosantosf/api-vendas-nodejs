import { CREATED, NO_CONTENT } from 'http-status';
import CategoriasDAO from './categorias.dao';

const categoriasDAO = new CategoriasDAO();

export default class CategoriasController {

  async list({ params }, h) {
    return await categoriasDAO.findAll(params);
  }

  async detail({ params }, h) {
    return await categoriasDAO.findByID(params);
  }

  async create({ params, payload }, h) {
    const categoria = await categoriasDAO.create({ ...payload })
    return h.response(categoria).code(CREATED);
  }

  async update({ params, payload }, h) {
    return await categoriasDAO.update(params, payload);
  }

  async destroy({ params }, h) {
    await categoriasDAO.destroy(params);
    return h.response().code(NO_CONTENT);
  }
}

//