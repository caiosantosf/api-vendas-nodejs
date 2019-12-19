import * as Joi from '@hapi/joi';

const params = Joi.object({
  produtoId: Joi.number().required(),
  id: Joi.number().required()
});

const payload = Joi.object({
  name: Joi.string().min(5).max(100).required()
});

export const list = {
  params: Joi.object({
    produtoId: Joi.number().required()
  })
};

export const detail = {
  params
};

export const create = {
  params: Joi.object({
    produtoId: Joi.number().required()
  }),
  payload,
};

export const update = {
  params,
  payload
};

export const destroy = {
  params
};
