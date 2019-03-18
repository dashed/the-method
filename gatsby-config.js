module.exports = {
  plugins: [
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-mdx"
      // options: {
      //   defaultLayouts: {
      //     default: require.resolve("./src/components/post_template.js")
      //   }
      // }
    },
    "gatsby-plugin-styled-components"
  ]
};
