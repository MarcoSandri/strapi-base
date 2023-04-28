'use strict';

/**
 * menu controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::menu.menu');

module.exports = createCoreController('api::menu.menu', ({ strapi }) =>  ({
  async findOne(ctx) {
    const { id: Title } = ctx.params;
    const { query } = ctx;
    if (!query.filters) query.filters = {}
    query.filters.Title = { '$eq': Title }
    const entity = await strapi.service('api::menu.menu').find(query);
    const { results } = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(results[0]);
  }
}))

