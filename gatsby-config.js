module.exports = {
    plugins: 
    {
        resolve: "gatsby-source-graphql",
        options: {
          // This type will contain remote schema Query type
          typeName: "CRYSTALLIZE_SEARCH",
          // This is the field under which it's accessible
          fieldName: "crystallize_search",
          // URL to query from
          url: `https://api.crystallize.com/${process.env.GATSBY_CRYSTALLIZE_TENANT_ID}/search`,
        },
      },
}