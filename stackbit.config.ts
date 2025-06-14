export default {
  site: {
    name: "Emmaculate Designs",
    url: "https://emmaculatedesigns.com"
  },
  models: [
    {
      name: "home",
      label: "Homepage",
      folder: "content/pages",
      format: "frontmatter",
      fields: [
        { name: "title", label: "Title", widget: "string" },
        { name: "urlPath", label: "URL Path", widget: "string" },
        { name: "body", label: "Content", widget: "markdown" }
      ]
    }
  ]
};
