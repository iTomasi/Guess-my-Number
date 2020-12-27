const regularExpression = {
    number: /^[0-9]+$/i
};

const notification = {
    intro: document.querySelector(".notification__intro"),
    onlyNumber: document.querySelector(".notification__onlyNumber"),
    high: document.querySelector(".notification__high"),
    low: document.querySelector(".notification__low"),
    lost: document.querySelector(".notification__lost"),
    won: document.querySelector(".notification__won")
}

const $intro = document.querySelector(".intro")
const $form = document.querySelector(".form");
const $spanGuess = document.getElementById("spanGuess");

let num1;
let num2;
let theNumber;

document.getElementById("introBtn").addEventListener("click", () => {
    const $inputNum_1 = parseInt(document.getElementById("inputNum-1").value)
    const $inputNum_2 = parseInt(document.getElementById("inputNum-2").value)
    
    if (regularExpression.number.test($inputNum_1) && regularExpression.number.test($inputNum_2)) {
        if ($inputNum_1 > $inputNum_2) {
            notification.intro.style.display = "block";

            setTimeout(() => {
                notification.intro.style.display = "none"
            }, 2000)
        }

        else {

            num1 = $inputNum_1;
            num2 = $inputNum_2;

            for (let i = 0; i < 1; i++) {
                const randomNumber = Math.round((Math.random() * num2) + num1);
            
                if (randomNumber >= num1 && randomNumber <= num2) {
                    theNumber = randomNumber;
                    $spanGuess.textContent = `${num1} - ${num2}`
                    i++
                }
                
                else {
                    i--
                }
            }

            $intro.style.display = "none"
            $form.style.display = "block"

        }
    }

    else {
        notification.onlyNumber.style.display = "block";

        setTimeout(() => {
            notification.onlyNumber.style.display = "none";
        }, 2000)
    }
})

let numberTrys = 5;
const $spanTry = document.getElementById("spanTry");
const $btn = document.getElementById("formBtn");



$btn.addEventListener("click", () => {
    const $inputGuess = parseInt(document.getElementById("inputGuess").value)
    
    if (numberTrys !== 0) {
        if ($inputGuess > theNumber) {

            notification.high.style.display = "block"

            setTimeout(() => {
                notification.high.style.display = "none";
            }, 2000)
    
            numberTrys--
        }
    
        else if ($inputGuess < theNumber) {

            notification.low.style.display = "block"

            setTimeout(() => {
                notification.low.style.display = "none"
            }, 2000)
    
            numberTrys--
        }

        else if ($inputGuess === theNumber) {
            notification.won.style.display = "block";
            $btn.setAttribute("disabled", "");
        }
    
        else {
            notification.onlyNumber.style.display = "block";

            setTimeout(() => {
                notification.onlyNumber.style.display = "none"
            }, 2000)
        }

        if (numberTrys === 0) {
            notification.lost.style.display = "block"
            $btn.setAttribute("disabled", "")
        }

        $spanTry.textContent = `${numberTrys} Restant`
    }

    else {
        console.log("Game Ended")
    }
})