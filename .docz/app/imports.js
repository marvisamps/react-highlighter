export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/styles/components/Button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-styles-components-button-index" */ 'src/styles/components/Button/index.mdx'),
  'src/styles/components/ButtonMarker/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-styles-components-button-marker-index" */ 'src/styles/components/ButtonMarker/index.mdx'),
  'src/styles/components/DescriptionFilteredByColor/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-styles-components-description-filtered-by-color-index" */ 'src/styles/components/DescriptionFilteredByColor/index.mdx'),
  'src/styles/components/DescriptionInteractionText/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-styles-components-description-interaction-text-index" */ 'src/styles/components/DescriptionInteractionText/index.mdx'),
  'src/styles/components/DescriptionTextArea/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-styles-components-description-text-area-index" */ 'src/styles/components/DescriptionTextArea/index.mdx'),
  'src/styles/components/InteractionText/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-styles-components-interaction-text-index" */ 'src/styles/components/InteractionText/index.mdx'),
  'src/styles/components/TextArea/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-styles-components-text-area-index" */ 'src/styles/components/TextArea/index.mdx'),
}
