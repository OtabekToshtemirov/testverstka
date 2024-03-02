const charBtn = document.querySelector('.char-btn');
const docBtn = document.querySelector('.doc-btn');


document.querySelector('.char-btn').addEventListener('click', function () {
    docBtn.style.backgroundColor = '#e5e5e5';
    docBtn.style.color = '#000';
    charBtn.style.backgroundColor = '#42516e';
    charBtn.style.color = '#fff';
    document.querySelector('.characteristic-content').style.display = 'block';
    document.querySelector('.characteristic-content2').style.display = 'none';
});

document.querySelector('.doc-btn').addEventListener('click', function () {
    charBtn.style.backgroundColor = '#e5e5e5';
    charBtn.style.color = '#000';
    docBtn.style.backgroundColor = '#42516e';
    docBtn.style.color = '#fff';
    document.querySelector('.characteristic-content2').style.display = 'block';
    document.querySelector('.characteristic-content').style.display = 'none';
});

const plusButton = document.querySelector('.plus-button');
const minusButton = document.querySelector('.minus-button');
let quantity = document.querySelector('.quantity');

plusButton.addEventListener('click', function () {
    let currentQuantity = parseInt(quantity.textContent);
    quantity.textContent = currentQuantity + 1;
});

minusButton.addEventListener('click', function () {
    let currentQuantity = parseInt(quantity.textContent);
    if (currentQuantity > 0) {
        quantity.textContent = currentQuantity - 1;
    }
});

const slides = document.querySelectorAll('.slide');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        hideAllSlides();
        slides[index].classList.add('active');
        thumbs[index].classList.add('active');
    });
});

function hideAllSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    thumbs.forEach(thumb => thumb.classList.remove('active'));
}


slides[0].classList.add('active');
thumbs[0].classList.add('active');


const closeMenu = document.querySelector('.close-menu-icon');
const openMenu = document.querySelector('.open-menu-icon');

openMenu.addEventListener('click', function () {
    document.querySelector('nav').style.display = 'block';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', function () {
    document.querySelector('nav').style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    document.body.style.overflow = 'auto';
});


closeMenu.style.display = 'none';

const isValid = document.querySelector('.email-input').value;
const emailInput = document.querySelector('.email-input');
const submitBtn = document.querySelector('.send-button');

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

submitBtn.addEventListener('click', function () {
    if (emailInput.value === '') {
        emailInput.style.borderColor = 'red';
        alert('Please enter a valid email address');

    } else if (validateEmail(emailInput.value)) {
        alert('Thank you for subscribing');
        emailInput.style.borderColor = 'white'; // reset border color
    } else {
        alert('Please enter a valid email address');
        emailInput.style.borderColor = 'red';
    }
});



