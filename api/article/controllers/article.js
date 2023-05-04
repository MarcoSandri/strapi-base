'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::article.article');

module.exports = createCoreController('api::article.article', ({ strapi }) =>  ({
  async findOne(ctx) {
    const { id: Slug } = ctx.params;
    const { query } = ctx;
    if (!query.filters) query.filters = {}
    query.filters.Slug = { '$eq': Slug }
    const entity = await strapi.service('api::article.article').find(query);
    const { results } = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(results[0]);
  }
}))
