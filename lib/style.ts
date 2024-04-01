import { BgColor } from "./types"
import { upFirstLetter } from "./utils"

export const color = {
  red: '#f87171',
  green: '#4ade80',
  blue: '#60a5fa',
  purple: '#c084fc',
  pink: '#f472b6',
  black: '#000',
  white: '#fff',
  yellow: '#facc15'
}

export const modifier = {
  bold: 'font-weight:bold;',
  italic: 'font-style:italic;',
  underline: 'text-decoration:underline;',
  linethrough: 'text-decoration:line-through;'
}

function createBackgroundColor(): colorType {
  return Object.entries(color).reduce((sty, [name, color]) => {
    sty[name] = `color: ${color};`
    return sty
  }, {} as any)
}

function createColor(): backgroundColorType {
  return Object.entries(color).reduce((sty, [_name, color]) => {
    const name = `bg${upFirstLetter(_name)}`
    sty[name] = `background-color: ${color};padding: 0 2px;`
    return sty
  }, {} as any)
}

type colorType = typeof color

type backgroundColorType = BgColor<colorType>

export type StyleMap = colorType & typeof modifier & backgroundColorType

export const styles: StyleMap = {
  ...createColor(),
  ...modifier,
  ...createBackgroundColor()
}
