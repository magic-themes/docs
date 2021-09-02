# @magic-themes/docs

this is the [@magic-themes](https://github.com/magic-themes) docs theme.
It is being used as the documentation theme for most @magic packages.

### installation

`npm install --save --save-exact @magic-themes/docs`

## usage

### require

in /config.mjs, just require the theme.

```
// /config.mjs

export default {
  // ... other config
  THEME: 'docs',

  // multiple themes can be used too:
  THEME: ['docs', 'your-theme-name'],
}
```

### customize

you can customize and add any kind of style
create /assets/themes/docs/index.mjs, any css there will overwrite the theme css

```
// /assets/themes/docs/index.mjs

export default vars => ({
  body: {
    color: vars.colors.orange[900],
  },
}
```

magic will then find and merge the themes automatically, just as it did on this page

<ThemeVars state></ThemeVars>
