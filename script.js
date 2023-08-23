const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');

let counter = 1;

next.addEventListener('click', () => {
    counter++;
    if (counter > circles.length) {
        counter = circles.length;
    }
    update();
    changeState();
});


prev.addEventListener('click', () => {
    counter--;
    if (counter < 1) {
        counter = 1;
    }
    update();
    changeState();
});



function update() {
    circles.forEach((circle, index) => {
        if (index < counter) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

}

function changeState() {
    if (counter === 1) {
        prev.disabled = true;
    }
    else if (counter === 4) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}