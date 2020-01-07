export default (vars = {}) => {
  const {
    backgroundColor = '#232323',
    backgroundColorLight = '#EEEEEE',
    textColor = '#CCCCCC',
    textColorLight = '#232323',
    linkColor = '#EEEEEE',
    linkColorHover = '#FEFEFE',
    linkColorLight = '#010101',
    linkColorLightHover = '#010101',
  } = vars

  return {
    body: {
      fontFamily: [
        '"Ubuntu Narrow"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'sans-serif',
      ].join(', '),
    },

    '#Magic': {
      backgroundColor,
      color: textColor,
      transition: 'color 300ms, background-color 300ms',
      minHeight: '100vh',
      fontWeight: 400,

      '&.light': {
        backgroundColor: backgroundColorLight,
        color: textColorLight,
      },
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
      color: linkColor,
      textDecoration: 'underline',
      transition: 'color 500ms',

      '&:hover': {
        color: linkColorHover,
      },

      '.light&&': {
        color: linkColorLight,

        '&:hover': {
          color: linkColorLightHover,
        },
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

    p: {
      lineHeight: '1.8',
    },

    '.Header': {
      '.Logo': {
        img: {
          margin: '0.3em 0 0',
        },

        span: {
          fontSize: '1.1em',
        },
      },
    },

    '.Menu': {
      display: 'block',
      float: 'none',
      clear: 'both',

      ul: {
        ul: {
          borderLeft: '1px dotted',
          display: 'block',
          margin: '0 0 0 0.2em',
          padding: '0 0 0 0.3em',
          position: 'relative',
        },
      },

      li: {
        display: 'block',
        float: 'none',

        a: {
          textDecoration: 'none',
        },

        '&.active': {
          '> a': {
            textDecoration: 'underline',
            color: linkColorHover,

            '.light&&': {
              color: linkColorLightHover,
            },
          },
          li: {
            a: {
              textDecoration: 'none',
            },
          },
        },
      },
    },

    '.LightSwitch': {
      left: 'auto',
      position: 'fixed',
      right: '0.5em',
      top: '0.5em',
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
        minHeight: '83vh',
      },
      '.Footer': {
        clear: 'both',
      },
    },
  }
}
