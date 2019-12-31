import * as Joi from '@hapi/joi';

const params = Joi.object({
  id: Joi.number().required()
});

const payload = Joi.object({
  produtos: Joi.array().items(Joi.object({
    id: Joi.number().required(),
    quantidade: Joi.number().positive().required()
  }))
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