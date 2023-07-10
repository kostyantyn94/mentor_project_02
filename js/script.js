const inputs = document.querySelectorAll('.test__score');
console.log(inputs);

const button = document.querySelector('.test__button');
console.log(button)

const results = document.querySelectorAll('.summary__score') 

let arr_results = Array.from(results);

let count = 0;
let sum = 0;

button.onclick = function () {
    for (let item of inputs) {
            if(typeof(+item.value) != 'number' || item.value == ''){
                alert("Error! Please enter the number between 0 and 100")
                return
            }
            if(+item.value < 0 || +item.value > 100){
                alert("Error! Please enter the number between 0 and 100")
                return
            }
    }

    for (let item of inputs) {
        sum += +item.value;
        arr_results[count].innerHTML = `${item.value} <span>/ 100</span>`
        console.log(arr_results[count]);
        count++;
    }

    const rating = document.querySelector('.result__descr-title'); 
    const text = document.querySelector('.result__descr-text'); 

    let result = Math.round(sum / 4);

    if (result >= 0 && result <= 30) {
        rating.textContent = `Bad`;
        text.textContent = `You scored lower than 80% of the people who have taken these tests.`
    }
    else if (result > 30 && result <= 65) {
        rating.textContent = `Great`;
        text.textContent = `You scored higher than 65% of the people who have taken these tests.`
    }
    else if (result > 65 && result <= 100) {
        rating.textContent = `Awesome`;
        text.textContent = `You scored higher than 90% of the people who have taken these tests.`
    }

    document.querySelector('.result__circle-score-real').innerHTML = result;
    document.querySelector('.summary').classList.remove('hidden');
    document.querySelector('.test').classList.add('hidden');
}

document.querySelector('.summary__button').onclick = () => {
    window.location.reload();
}