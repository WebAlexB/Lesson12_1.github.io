const imageFilenames = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];

const image = document.createElement('img');
image.className = 'car';
image.id = 'slide';
image.src = `assets/images/${imageFilenames[0]}`;
image.alt = 'car';

const buttonNext = document.createElement('button');
buttonNext.className = 'btn-car';
buttonNext.textContent = 'Next';

const buttonPrev = document.createElement('button');
buttonPrev.className = 'btn-car';
buttonPrev.textContent = 'Prev';
buttonPrev.style.display = 'none';

let num = 0;

buttonNext.addEventListener('click', function () {
    const slider = document.getElementById('slide');
    num++;
    if (num >= imageFilenames.length) {
        num = 0;
    }
    slider.src = `assets/images/${imageFilenames[num]}`;
    buttonPrev.style.display = '';
    if (num === imageFilenames.length - 1) {
        buttonNext.style.display = 'none';
    }
});

buttonPrev.addEventListener('click', function () {
    const slider = document.getElementById('slide');
    num--;
    if (num < 0) {
        num = imageFilenames.length - 1;
    }
    slider.src = `assets/images/${imageFilenames[num]}`;
    buttonNext.style.display = '';
    if (num === 0) {
        buttonPrev.style.display = 'none';
    }
});

document.body.appendChild(buttonPrev);
document.body.appendChild(image);
document.body.appendChild(buttonNext);
