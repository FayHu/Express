// @flow

const colorBase = {
  white:'white',
  black: 'black',
  red:'#d9534f',
  orange:'#f0ad4e',
  yellow:'#ffd500',
  green:'#5cb85c',
  blue:'#0275d8',
  teal:'#5bc0de',
  pink:'#ff5b77',
  purple:'#613d7c'
}

const colors = {
  default:'#36383c',
  primary:'#21c494',
  secondary:colorBase.gblue,

  success:colorBase.green,
  info:colorBase.teal,
  warning:colorBase.orange,
  danger:colorBase.red,
  white:colorBase.white,
  dark:colorBase.black,
  emphasis:colorBase.yellow,
  emphasisBg:colorBase.red,

  clear:'rgba(0,0,0,0)',
  panel:'#24292e',
  tabNav:'#353938',

  grayDark:'#292b2c',
  gray:'#464a4c',
  grayLight:'#636c72' ,
  grayLighter:'#eceeef',
  grayLightest:'#f7f7f9'
}

export default colors
