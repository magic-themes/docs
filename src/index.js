const theme = {
  '#magic': {
    maxWidth: '1300px',
  },

  a: {
    textDecoration: 'none',
    color: 'blue',

    '&:hover': {
      color: 'orange',
    },
  },
  '.page': {
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
  h5: {
    fontWeight: 600,
  },

  '.Menu': {
    display: 'block',
    float: 'none',
    clear: 'both',

    li: {
      display: 'block',
      float: 'none',
    },

    ul: {
      ul: {
        position: 'relative',
        margin: '0 0 0 0.5em',
      },
    },

    'li.active': {
      '> a': {
        textDecoration: 'underline',
      },
      'li a': {
        textDecoration: 'none',
      },
    },
  },

  '@media screen and (min-width: 1000px)': {
    'header.main': {
      width: 'auto',
      position: 'fixed',
      float: 'left',
    },
    '.Menu': {
      width: '200px',
    },
    '.page': {
      float: 'right',
      width: 'calc(100% - 220px)',
      minHeight: '90vh',
    },
    'footer.main': {
      clear: 'both',
    },
  },
}

module.exports = theme
