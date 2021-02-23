export const View = (props = {}, children = []) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { logo, menu, logotext, hash, url } = props

  if (!logo && !menu && !logotext) {
    return
  }

  return header({ class: 'Header' }, [
    Logo(),
    logotext && p(logotext),
    menu && Menu({ url, hash, menu }),
    children,
  ])
}

export const style = vars => ({
  padding: '.5em 0 0',
  width: '100%',

  '.Menu': {
    display: 'inline-block',
    width: '100%',
  },

  p: {
    fontSize: '1.5em',
  },

  [`@media screen and (min-width: ${vars.widths.tablet})`]: {
    '.Menu': {
      float: 'left',
      width: 'auto',
    },
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    boxSizing: 'border-box',
    height: '100vh',
    maxHeight: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    position: 'fixed',
    scrollbarWidth: 'thin',
    width: '210px',

    p: {
      fontSize: '1em',
    },

    '.Menu': {
      maxWidth: '210px',
      padding: '0 0 2em',
    },
  },
})

export const propTypes = {
  Header: [
    { key: 'logo', type: 'string' },
    { key: 'menu', type: 'array' },
  ],
}
