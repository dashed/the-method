module.exports = {
  plugins: [
    "gatsby-plugin-root-import",
    {
      resolve: `gatsby-mdx`
      // options: {
      //   defaultLayouts: {
      //     default: require.resolve("./src/components/post_template.js")
      //   }
      // }
    },
    "gatsby-plugin-styled-components"
  ]
};
