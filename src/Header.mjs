export const View = (props = {}, children = []) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { menu, ...state } = props

  let { logotext = [], root } = state

  return header(
    { class: 'Header' },
    div([Logo({ root }), logotext && p(logotext), menu && Menu({ state, items: menu })]),
  )
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
      width: 'auto',
      float: 'left',
    },
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    width: 'auto',
    position: 'fixed',
    float: 'left',
    maxHeight: '100vh',
    height: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollbarWidth: 'thin',
    boxSizing: 'border-box',
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
