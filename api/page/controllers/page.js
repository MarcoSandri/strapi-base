'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::page.page');

module.exports = createCoreController('api::page.page', ({ strapi }) =>  ({
    async findOne(ctx) {
      const { id: Slug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {}
      query.filters.Slug = { '$eq': Slug }
      const entity = await strapi.service('api::page.page').find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);
  
      return this.transformResponse(results[0]);
    }
  }))
