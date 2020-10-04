let elements = document.querySelectorAll('.item');
let Arr = []
let score = 0

for (const element of elements) {
  element.onclick = function () {
    let assume = prompt("Enter your assume").toLowerCase()
    Arr.push(assume);
    if (Arr.length != 0) {
      this.querySelector('.cover').classList.add('selected');
      Arr.push(this.id);
    }
    setTimeout(function () {
      if (Arr.length == 2) {
        if (Arr[0] == Arr[1]) {
          score++
          document.querySelector(`.selected.${Arr[1]}`).classList.add('allowed')
          Arr = []
        } else {
          score--
          document.querySelector('.score').textContent = score
            document.querySelector(`.selected.${Arr[1]}`).classList.add('not-allowed')
            document.querySelector(`.selected.${Arr[1]}`).classList.remove('selected')
          Arr = []
        }
        
        let scoreCount = +document.querySelector('.score').textContent
        document.querySelector('.score').textContent = score
        if (score <= 0) {
          document.querySelector('.score').style.color = "red"
          document.querySelector('.score').textContent = score + " Sorry.. you score is not enough to win"
        } else if(score == elements.length) {
          document.querySelector('.score').style.color = "green"
          document.querySelector('.score').textContent = score + " Excellent"
        } else if(score == 6) {
          document.querySelector('.score').style.color = "green"
          document.querySelector('.score').textContent = score + " Good job"
        } else if(score <= 5 && score != 0) {
          document.querySelector('.score').style.color = "green"
          document.querySelector('.score').textContent = score + " Good"
        }
      }
    }, 1000)
  }

 
}


reload = document.querySelector('button')
reload.onclick = function () {
  Arr = []
  score = 0
  assume = ''
  document.querySelector('.score').textContent = 0
  document.querySelector('.score').style.color = "black"
  for (const element of elements) {
    element.querySelector('.cover').classList.remove('selected');
    element.querySelector('.cover').classList.remove('not-allowed');
    element.querySelector('.cover').classList.remove('allowed');
  }
}


