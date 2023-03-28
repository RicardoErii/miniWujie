import type { loadErrorHandler } from '.'
import { generateIframe } from './iframe'

export type lifecycle = (appWindow: Window) => any
type lifecycles = {
  beforeLoad: lifecycle
  beforeMount: lifecycle
  afterMount: lifecycle
  beforeUnmount: lifecycle
  afterUnmount: lifecycle
  activated: lifecycle
  deactivated: lifecycle
  loadError: loadErrorHandler
}

class WuJie {
  public name: string
  public url: string
  public lifecycles: lifecycles
  public iframe: HTMLIFrameElement
  constructor(options: { name: string; url: string; lifecycles: lifecycles }) {
    const { name, url, lifecycles } = options
    this.name = name
    this.url = url
    this.lifecycles = lifecycles

    this.iframe = generateIframe(this)
  }
}

export default WuJie
