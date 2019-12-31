import * as Joi from '@hapi/joi';

const params = Joi.object({
  id: Joi.number().required()
});

const payload = Joi.object({
  orderId: Joi.number().positive().required(),
  userId: Joi.number().required(),
  amount: Joi.number().positive().required(),
  price: Joi.number().precision(2).positive().required(),
  categoryId: Joi.number().required()
});

export const detail = {
  params
};

export const create = {
  payload
};

export const update = {
  params,
  payload
};