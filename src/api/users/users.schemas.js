import * as Joi from '@hapi/joi';

const params = Joi.object({
  id: Joi.number().required()
});

const payload = Joi.object({
  nome: Joi.string().min(3).required(),
  CPF_CNPJ: Joi.string().min(11).max(14).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
})

const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
})

export const ret_login = {
  login
};

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
