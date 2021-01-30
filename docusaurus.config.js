module.exports = {
  title: "Docusaurus Docs",
  tagline:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto magnam aut natus vitae minus unde.",
  url: "https://github.com/armanabkar/docusaurus-docs",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "armanabkar", // Usually your GitHub org/user name.
  projectName: "docusaurus-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Docusaurus Docs",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/armanabkar/docusaurus-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "My Personal Website",
              href: "https://armanabkar.ir",
            },
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/armanabkar/docusaurus-docs/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Docusaurus Docs, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/armanabkar/docusaurus-docs/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/armanabkar/docusaurus-docs/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
