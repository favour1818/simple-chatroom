const request = document.getElementById('main-button')
const firstIssue = document.querySelector('.issues')

function toggleRequest() {
    firstIssue.classList.toggle('show')
}
request.addEventListener('click', toggleRequest)

const spoiltPhone = document.getElementById('spoilt')
const spoiltNav = document.querySelector('.spoilt')

function toggleSpoilt() {
    spoiltNav.classList.toggle('show')
}
spoiltPhone.addEventListener('click', toggleSpoilt)


const stuckPhone = document.getElementById('stuck')
const stuck = document.querySelector('.stuck')

function toggleStuck() {
    stuck.classList.toggle('show')
}
stuckPhone.addEventListener('click', toggleStuck)

const turnOff = document.getElementById('turn-off')
const pray = document.querySelector('.pray')

function toggleTurnOff() {
    pray.classList.toggle('show')
}
turnOff.addEventListener('click', toggleTurnOff)

function hey() {
    const display = document.querySelector('.level-copy')
    const word = ('did that solve your issue!')
    display.innerHTML = word
}
setTimeout(hey, 3000)