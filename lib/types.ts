export type LogType = 'info' | 'log' | 'warn' | 'error'

export type Pair = Record<string, string>

export type BgColor<ColorMap extends Pair> = Record<`bg${Capitalize<Extract<keyof ColorMap, string>>}`, string>

export type Output = [string, string]

export type InferStyle<styleMap> = {
  [Style in keyof styleMap]: {
    (message: string): Output
  } & InferStyle<Omit<styleMap, Style>>
}

export type InferLog<Logs extends readonly string[]> = {
  [k in Logs[number]]: {
    (...outputs: Output[]): void
  }
}

