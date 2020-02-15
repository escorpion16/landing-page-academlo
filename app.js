'use strict'
const newBadge = () => {
  let badge = document.createElement('span')
  badge.classList.add('badge')
  badge.innerText = "Nuevo"
  return badge
}
document.addEventListener('DOMContentLoaded', () => {
  let news = Array.from(document.getElementsByClassName('new'))
  news.forEach(n => n.appendChild(newBadge()))
})