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
    Textbox: {
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
  },
});