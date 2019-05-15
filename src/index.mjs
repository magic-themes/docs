const theme = {
  '#magic': {
    maxWidth: '1300px',
  },

  'h1, h2, h3, h4, h5': {
    '&:target': {
      textDecoration: 'underline',
    },
  },

  ':target >': {
    'h1, h2, h3, h4, h5': {
      '&:first-child': {
        textDecoration: 'underline',
      },
    },
  },

  a: {
    textDecoration: 'none',
    color: 'blue',

    '&:hover': {
      color: 'orange',
    },
  },
  '.Page': {
    marginBottom: '3em',
  },

  h1: {
    fontSize: '1.4em',
  },
  h2: {
    fontSize: '1.3em',
  },
  h3: {
    fontSize: '1.2em',
  },
  h4: {
    fontSize: '1.1em',
  },
  'h2, h3, h4, h5': {
    fontWeight: 600,
  },

  p: {
    lineHeight: '1.8',
  },

  '.Header': {
    '.Logo': {
      margin: '0.3em 0 0',
    },

    '.LogoText': {
      fontSize: '1.1em',
    },
  },

  '.Menu': {
    display: 'block',
    float: 'none',
    clear: 'both',

    ul: {
      ul: {
        position: 'relative',
        margin: '0 0 0 0.5em',
      },
    },

    '.MenuItem': {
      display: 'block',
      float: 'none',

      '&.active': {
        '> a': {
          textDecoration: 'underline',
        },
        '.MenuItem a': {
          textDecoration: 'none',
        },
      },
    },
  },

  '@media screen and (min-width: 1000px)': {
    '.Header': {
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
    },

    '.Menu': {
      maxWidth: '210px',
      padding: '0 0 2em',
    },

    '.Page': {
      float: 'right',
      width: 'calc(100% - 220px)',
      minHeight: '90vh',
    },
    '.Footer': {
      clear: 'both',
    },
  },
}

export default theme
