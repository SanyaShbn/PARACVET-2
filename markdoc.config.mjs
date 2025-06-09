import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';

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
      render: component('./source/components/sections/TextXXLCenter.astro'),
      attributes: {
        title: { type: String },
      },
    },
    simple: {
      render: component('./source/components/sections/simple.astro'),
      attributes: {
        text: { type: String },
        
      },
    },
    h1: {
      render: component('./source/components/typography/H1.astro'),
      attributes: {
        text: { type: String },
        
      },
    },
    subheading: {
      render: component('./source/components/typography/Subheading.astro'),
      attributes: {
        regular: { type: String },
        highlighted: { type: Array[String] }
      },
    },

    //  Теги для странички "Услуги"
    cooperationSection: {
      render: component('./source/components/sections/services-page-sections/CooperationSection.astro'),
      attributes: {
        pageTitle: { type: String },
        cooperationApproachTitle: { type: String },
        cooperationApproachDescription: { type: String },
        cardTitleArray: { type: Array[String] },
        cardDescriptionArray: { type: Array[String] }
      },
      group: 'services-page'
    },
    capabilitySection: {
      render: component('./source/components/sections/services-page-sections/CapabilitiesSection.astro'),
      attributes: {
        title: { type: String },
        category: { type: Array[String] },
        description: { type: Array[String] },
      },
      group: 'services-page'
    },
    faqSection: {
      render: component('./source/components/sections/services-page-sections/FaqSection.astro'),
      attributes: {
        title: { type: String },
        question: { type: Array[String] },
      },
      group: 'services-page'
    },
  },
});