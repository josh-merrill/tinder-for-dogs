import dogs from './data.js'
import Dog from './Dog.js'

let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

function render() {
  document.getElementById('content').innerHTML = currentDog.getDogHtml()
}

render()

function getNewDog() {
    if (currentDogIndex < dogs.length - 1) {
      currentDogIndex++
      currentDog = new Dog(dogs[currentDogIndex])
      render()
    } else {
      setEndMessage()
    }
}

document.getElementById('like').addEventListener('click', ()=> handleLikeClick())
document.getElementById('dislike').addEventListener('click', ()=> handleDislikeClick())

function handleLikeClick() {
  currentDog.setMatchStatus(true)
  document.getElementById('badge').src = "./images/badge-like.png"
  document.getElementById('badge').style.display = "flex"

  setTimeout(() => {
    getNewDog()
  }, 1000);
}

function handleDislikeClick() {
  currentDog.setMatchStatus(false)
  document.getElementById('badge').src = "./images/badge-nope.png"
  document.getElementById('badge').style.display = "flex"

  setTimeout(() => {
    getNewDog()
  }, 1000);
}

function setEndMessage() {
  document.getElementById('avatar').src = "./images/sad-dog.png";
  document.getElementById('dog-summary').style.display = "none";
  document.getElementById('hidden-msg').style.display = "flex";
  document.getElementById('like').disabled = true;
  document.getElementById('dislike').disabled = true;
  document.getElementById('badge').src = " "
}
