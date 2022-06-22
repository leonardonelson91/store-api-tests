const Joi = require('joi');

Feature('Products Endpoint');

Scenario('Get All Products', ({ I }) => {
    const schema = Joi.array().items(Joi.object().keys({
        id: Joi.number().integer().required(),
        title: Joi.string().required(),
        price: Joi.number().required(),
        description: Joi.string().required(),
        category: Joi.string().required(),
        image: Joi.string().uri().required(),
        rating: Joi.object().keys({
            rate: Joi.number().required(),
            count: Joi.number().required()
        }),
    }));

    I.sendGetRequest('/products');
    I.seeResponseCodeIs(200);
    I.seeResponseMatchesJsonSchema(schema);
});
