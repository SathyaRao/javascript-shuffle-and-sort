window.onload = function () {
  let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numberCards = document.getElementById("numberedCards");
  let isAscend = true;
  function createNumberedCards() {
    let index = 0;
    numberCards.innerHTML = '';
    while (index < numbersArray.length) {
      numberCards.innerHTML += '<li class=listItem-' + (parseInt(index, 10) + 1) + '>' + numbersArray[index] + '</li>';
      index += 1;
    }
  }
  shuffleList = () => {
    numbersArray = numbersArray.sort(() => { return  0.5 - Math.random() });    
    createNumberedCards();
  }
  sortList = () => {
    if (isAscend) {
      numbersArray = numbersArray.sort((x, y) => { return x - y });
      isAscend = false;
    } else {
      numbersArray = numbersArray.sort((x, y) => { return y - x });
      isAscend = true;
    }
    createNumberedCards();
  }
  createNumberedCards();
}
