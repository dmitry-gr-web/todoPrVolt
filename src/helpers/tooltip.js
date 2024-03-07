let timer
const animation = 'animationTooltip 0.5s forwards'
export function tooltipOn(event, text = '', xLeft = 0, yTop = 0) {
  clearTimeout(timer)
  const position = event.getBoundingClientRect()
  const tooltip = document.querySelector('.tooltip')
  tooltip.style.left = `${position.x + xLeft}px`
  tooltip.style.top = `${position.y + yTop}px`
  tooltip.innerHTML = text
  tooltip.style.animation = animation
}
export function tooltipOnEllipsis(event, text = '', xLeft = 0, yTop = 0) {
  clearTimeout(timer)
  const position = event.getBoundingClientRect()
  const tooltip = document.querySelector('.tooltip')
  if (event.scrollWidth > event.offsetWidth) {
    tooltip.style.left = `${position.x + xLeft}px`
    tooltip.style.top = `${position.y + yTop}px`
    tooltip.innerHTML = text
    tooltip.style.animation = animation
  }
}
export function tooltipOff() {
  document.querySelector('.tooltip').style.animation = ''
}
export function tooltipAlert(event, text = '', xLeft = 0, yTop = 0) {
  const position = event.getBoundingClientRect()
  const tooltip = document.querySelector('.tooltip')
  tooltip.style.left = `${position.x + xLeft}px`
  tooltip.style.top = `${position.y + yTop}px`
  tooltip.innerHTML = text
  tooltip.style.animation = animation
  clearTimeout(timer)
  timer = setTimeout(() => {
    document.querySelector('.tooltip').style.animation = ''
  }, 2000)
}
