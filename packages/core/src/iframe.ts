import { setAttrsToElement } from './utils'
import WuJie from './wujie'

export const generateIframe = (sandbox: WuJie): HTMLIFrameElement => {
  const iframe = window.document.createElement('iframe')

  const attrs = { style: 'display: none', name: sandbox.name }

  setAttrsToElement(iframe, attrs)

  window.document.appendChild(iframe)
  return iframe
}
