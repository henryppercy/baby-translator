const form = document.querySelector('form');

const convertToBabySpeak = (event) => {
    event.preventDefault();

    const userInput = document.querySelector('input').value;
    let lowerCase = userInput.toLowerCase();
    const regEx = /[rl]/g;
    let appOutput = '';
    appOutput = lowerCase.replace(regEx, 'w');

    document.querySelector('.baby-words').innerText = 'Baby words: ' + appOutput;
}
form.addEventListener('submit', convertToBabySpeak);