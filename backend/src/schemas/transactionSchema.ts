import Joi from 'joi';

export const transactionSchema = Joi.object({
  cashInAccId: Joi.number().required(),
  amount: Joi.number().required(),
});
