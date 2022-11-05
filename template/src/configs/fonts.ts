import Platform from './responsive/platform'

export const fonts = {
  regular: 'SVN-Product Sans',
  bold: Platform.isIos ? 'SVN-Product Sans' : 'SVN-Product Sans Bold',
  italic: Platform.isIos ? 'SVN-Product Sans' : 'SVN-Product Sans Italic',
  boldItalic: Platform.isIos
    ? 'SVN-Product Sans'
    : 'SVN-Product Sans Bold Italic',
}

export const sizes = {
  base: 14,
  h1: 28,
  h2: 24,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
}

export const lineHeights = {
  h1: 34,
  h2: 30,
  h3: 22,
  h4: 20,
  h5: 18,
  h6: 16,
}
