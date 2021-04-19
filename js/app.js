const winningNumber = Math.floor(Math.random()*20)+1;
let guessesLeft = 5;
const result = document.querySelector('.winning-child');
const resultText = document.querySelector('#result');
const again = document.querySelector('#again');
const chances = document.querySelector('#chances');


let item = [];
for (let i = 1; i <= 20; ++i) {
    item[i] = document.getElementById(`item${i}`);
    item[i].addEventListener('click', function(e){
        let numb = parseInt(e.target.textContent);
        if(numb === winningNumber){
            item[i].style.backgroundColor = 'green';
            resultText.textContent = 'Acertou!';
            resultText.style.color = 'green';
            result.style.zIndex = 1000;
            result.style.opacity = 1;
        } else {
            guessesLeft -= 1;
            chances.textContent = `Chances: ${guessesLeft}`;
            if(guessesLeft === 0){
                // GAME OVER
                result.style.zIndex = 1000;
                result.style.opacity = 1;
                resultText.textContent = 'Perdeu!';
                resultText.style.color = 'red';
                item[i].style.backgroundColor = 'red';
            } else if(guessesLeft < 3){
                chances.style.color = 'red';
                item[i].style.backgroundColor = 'red';
            } else {
                item[i].style.backgroundColor = 'red';
            }
        }
        e.preventDefault();
    });
}
again.addEventListener('click', playAgain)
function playAgain(e){
    if(e.target.id === 'again'){
        location.reload()
    } 
}
