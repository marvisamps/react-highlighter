export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/components/Button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-index" */ 'src/components/Button/index.mdx'),
  'src/components/InteractionText/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-interaction-text-index" */ 'src/components/InteractionText/index.mdx'),
  'src/components/TextArea/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-text-area-index" */ 'src/components/TextArea/index.mdx'),
}
