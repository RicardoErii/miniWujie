export const setAttrsToElement = (
  el: HTMLElement,
  attrs: Record<string, string>
) => {
  for (const key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}
