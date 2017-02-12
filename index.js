( function wordGuesser(){
  this.guess = document.getElementById('guess')
  this.letters = 'NAIPLRA'
  this.clickButton = this.clickButton.bind(this)
  this.shuffle = this.shuffle.bind(this)
  this.randomLetters = this.randomLetters.bind(this)
  this.changeLength = this.changeLength.bind(this)
  this.length = 7

  setLetters()
  addButtonListeners()
})()

function setLetters() {
  document.getElementById('letters').innerHTML = this.letters
}

function addButtonListeners() {
  document.getElementById('guessButton').addEventListener('click', clickButton)
  document.getElementById('shuffleButton').addEventListener('click', shuffle)
  document.getElementById('randomButton').addEventListener('click', randomLetters)
  document.getElementById('lengthButton').addEventListener('click', changeLength)
}

function clickButton() {
  let letters = this.letters.split(''),
    guess = document.getElementById('guess').value.split(''),
    isValidGuess = true

  guess.forEach( function(letter) {
    letter = letter.toUpperCase()
    if (!letters.includes(letter)) {
      isValidGuess = false
    }
  })

  if(!guess.length) return
  setResponse(isValidGuess)
}

function setResponse(isValid) {
  document.getElementById('message').innerHTML = isValid ?
    'Hurray, you are amazing' :
    'Uh oh, those letters are all wrong'
}

function shuffle() {
  let letters = this.letters.split('')

  for ( let index = letters.length - 1; index >= 0; index-- ) {
    let randomIndex = Math.floor(Math.random() * (index + 1)),
      current = letters[index]

    letters[index] = letters[randomIndex]
    letters[randomIndex] = current
  }

  this.letters = letters.join('')
  setLetters()
}

function randomLetters() {
  let consonants = 'bcdfghjklmnpqrstvwxyz',
    vowels = 'aeiou',
    output = ''

    console.log('this.length:', this.length)
  for ( let index = 0; index < this.length - 2; index++ ) {
    output += consonants.charAt(Math.floor(Math.random() * consonants.length))
  }
  for ( let index = 0; index < 2; index++ ) {
    output += vowels.charAt(Math.floor(Math.random() * vowels.length))
  }

  this.letters = output.toUpperCase()
  setLetters()
}

function changeLength() {
  var newLength = +document.getElementById('length').value
  this.length = newLength
  randomLetters()
}
