const globalState = {
    results: 0,
    error: ''
};

const circle = document.querySelector('.result__circle-score-real');

const rating = document.querySelector('.result__descr-title'); 

const text = document.querySelector('.result__descr-text'); 

const inputs = document.querySelectorAll('.test__score');

const button = document.querySelector('.test__button');

const results = document.querySelectorAll('.summary__score');

let sum = 0;

button.onclick = function (e) {
    sum = 0
    e.preventDefault();
    globalState.results = 0;
    console.log()
    for (let item of inputs) {
        if (+item.value < 0 || +item.value > 100 || item.value == '') {
            globalState.error = 'Error! Please enter the number between 0 and 100';
            alert(globalState.error);
            return
        }

        sum += +item.value;     
    }
        globalState.results = Math.round(sum / 4);
        circle.innerHTML = globalState.results;

    if (globalState.results >= 0 && globalState.results <= 30) {
        rating.textContent = `Bad`;
        text.textContent = `You scored lower than 80% of the people who have taken these tests.`
    }
    else if (globalState.results > 30 && globalState.results <= 65) {
        rating.textContent = `Great`;
        text.textContent = `You scored higher than 65% of the people who have taken these tests.`
    }
    else if (globalState.results > 65 && globalState.results <= 100) {
        rating.textContent = `Awesome`;
        text.textContent = `You scored higher than 90% of the people who have taken these tests.`
    }

}

// document.querySelector('.summary__button').onclick = () => {
//     window.location.reload();
// }