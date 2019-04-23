module.exports = () =>
  div([
    h1('@magic-themes/docs'),
    p([
      'this is the ',
      Link({ to: 'https://github.com/magic-themes' }, '@magic-themes'),
      ' docs theme. It is being used as the documentation theme for most @magic packages.',
    ]),

    h2('installation:'),
    p(
      'installation is done using npm. for now, all magic themes are living on github and not on npm.',
    ),
    p('note the missing @ before magic-themes.'),
    p('this is how we install npm modules from github.'),
    Pre.View(`npm install magic-themes/docs`),

    h2('require in config.js:'),

    Pre.View(`
// config.js

module.exports = {
  // ... other config
  THEME: 'docs',
}`),

    p('magic will then find the theme automatically, just as it did on this page'),
  ])
