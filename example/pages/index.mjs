export const View = state =>
  div([
    h1('@magic-themes/docs'),
    p([
      'this is the ',
      Link({ to: 'https://github.com/magic-themes' }, '@magic-themes'),
      ' docs theme. It is being used as the documentation theme for most @magic packages.',
    ]),

    h3({ id: 'installation' }, 'installation'),
    Pre(`npm install --save --save-exact @magic-themes/docs`),

    h2({ id: 'usage' }, 'usage'),

    h3({ id: 'usage-require' }, 'require in config.mjs:'),

    Pre(`
// config.mjs

export default {
  // ... other config
  THEME: 'docs',
}`),

    h3({ id: 'usage-customize' }, 'customize / overwrite'),
    p('you can customize and add any kind of style'),
    p('create /assets/themes/docs/index.mjs, any css there will overwrite the theme css'),

    Pre(`
// /assets/themes/docs/index.mjs

export default vars => ({
  body: {
    color: vars.colors.orange[900],
  },
}`),

    p('magic will then find and merge the themes automatically, just as it did on this page'),
  ])
