module.exports = {
  menus: {
    config: {
      maxDepth: null,
      layouts: {
        menuItem: {
          link: [
            {
              input: {
                label: "Page",
                name: "page_relation",
                type: "relation",
              },
              grid: {
                col: 6,
              },
            },
          ],
        },
      },
    },
  },
};
