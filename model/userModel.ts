import Joi from "joi";

const schemaUser = Joi.object({
  email: Joi.string().email().required(),
  userName: Joi.string().min(6).required(),
  pass: Joi.string().min(6).required(),
});

const schemaInfo = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  age: Joi.number().greater(15).required()
});

const schemaAdds = Joi.object({
  zipCode: Joi.string().required(),
  uf: Joi.string().required(),
  city: Joi.string().required(),
  street: Joi.string().required(),
  streetNumb: Joi.string().required(),
  district: Joi.string().required(),
  complement: Joi.string().default('')
});

export default { schemaUser, schemaInfo, schemaAdds }
