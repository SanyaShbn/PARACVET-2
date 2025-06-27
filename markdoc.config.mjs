import { defineMarkdocConfig, nodes, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  nodes: {
    document: {
      ...nodes.document, // Apply defaults for other options
      render: null, // default 'article'
    },
    // paragraph: {
    //   ...nodes.document, // Apply defaults for other options
    //   render: null, // default 'p'
    // }
  },

  tags: {
    textbox: {
      render: component("./source/components/sections/TextXXLCenter.astro"),
      attributes: {
        title: { type: String },
      },
    },
    simple: {
      render: component("./source/components/sections/simple.astro"),
      attributes: {
        text: { type: String },
      },
    },
    pageHeroSection: {
      render: component("./source/components/sections/PageHeroSection.astro"),
      attributes: {
        title: { type: String },
        subtitleContent: { type: String },
      },
    },
    explainerSection: {
      render: component("./source/components/sections/ExplainerSection.astro"),
      attributes: {
        id: { type: String },
        title: { type: String, required: true },
        description: { type: String },
        stageResultItems: { type: Array[String] },
        categoryArray: { type: Array[String] },
        categoryDescriptionArray: { type: Array[String] },
      },
    },

    //  Теги для странички "Услуги"
    cooperationSection: {
      render: component(
        "./source/components/sections/services-page-sections/CooperationSection.astro",
      ),
      attributes: {
        pageTitle: { type: String },
        cooperationApproachTitle: { type: String },
        cooperationApproachDescription: { type: String },
        cardTitleArray: { type: Array[String] },
        cardDescriptionArray: { type: Array[String] },
      },
      group: "services-page",
    },
    faqSection: {
      render: component(
        "./source/components/sections/services-page-sections/FaqSection.astro",
      ),
      attributes: {
        title: { type: String },
        question: { type: Array[String] },
      },
      group: "services-page",
    },

    //  Теги для странички "О компании"
    experienceSection: {
      render: component(
        "./source/components/sections/about-page-sections/ExperienceSection.astro",
      ),
      attributes: {
        experienceTitle: { type: String },
        experienceDescription: { type: String },
        experienceValues: { type: Array[String] },
        experienceValuesExplanation: { type: Array[String] },
      },
      group: "about-page",
    },

    //  Теги для странички "Методология"
    methodologyDiagramSection: {
      render: component(
        "./source/components/sections/method-page-sections/MethodologyDiagramSection.astro",
      ),
      group: "method-page",
    },
  },
});
