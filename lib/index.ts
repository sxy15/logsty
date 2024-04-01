import { StyleMap, styles } from "./style"
import { InferLog, InferStyle, LogType, Output } from "./types"

const logs: LogType[] = ['info', 'log', 'warn', 'error']

function createLogger(logType: LogType) {
  return function(...outputs: Output[]) {
    let text = ''
    const _styles: string[] = []
    outputs.forEach(output => {
      text += output[0]
      _styles.push(output[1])
    })
    console[logType](text, ..._styles)
  }
}

function createlogsty() {
  let cachedStyle = ''
  const logsty: any = (message: string) => {
    const style = cachedStyle;
    cachedStyle = ''
    return [`%c${message}`, style]
  }

  // setStyleMethod
  Object.entries(styles).forEach(([key, style]) => {
    Object.defineProperty(logsty, key, {
      get() {
        cachedStyle += style
        return logsty
      }
    })
  })

  // setLogMethod
  logs.forEach(type => logsty[type] = createLogger(type))
  return logsty as logsty
}

type logsty = InferStyle<StyleMap> & InferLog<typeof logs>

const logsty: logsty = createlogsty();

export default logsty


