const btnTry = document.querySelectorAll('.btnTry')
const btnReset = document.querySelector('#btnReset');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

let randomNumber = newRandomNumber();
let xAttempts = 1;

btnTry.forEach(element => element.addEventListener('click', e => { handleTryClick(e, element); }));
btnReset.addEventListener('click', handleResetClick);

function newRandomNumber(){
    btnTry.forEach(element => element.disabled = false); // ativar os botöes novamente
    let _min = 1; // está incluso
    let _max = 9; // está incluso
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
}


function toggleScreen(){
    screen2.classList.toggle("hide");
    screen1.classList.toggle("hide");
}

document.addEventListener('keydown', 
    function(e){
        if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick();
    }
})

 function handleTryClick(event, element){
     event.preventDefault();

     element.disabled = true; // desativar botão ao clicar
    const inputNumber = element.innerHTML;

    let error = isNaN(inputNumber) || inputNumber <= 0 || inputNumber >= 10 
    || inputNumber == null || inputNumber == '';

    if (error){
        alert('Algo está errado, número não aceito');
        return;
    }else{
        if(inputNumber == randomNumber){
            toggleScreen();
            screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`;
        }
    }

    xAttempts++;
 }

 function handleResetClick(){
    toggleScreen();
    xAttempts = 1;
    randomNumber = newRandomNumber();
 }