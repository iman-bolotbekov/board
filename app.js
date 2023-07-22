const board = document.querySelector('#board')
const colors = [
  '#16F4D0',
  '#E0F2E9',
  '#3943B7',
  '#688E26',
  '#F44708',
  '#F65BE3',
  '#9D44B5',
  '#00F5D4',
]
const SQUARES_NUMBER = 1000

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  board.append(square)

  square.addEventListener('mouseleave', () => removeColor(square))
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
