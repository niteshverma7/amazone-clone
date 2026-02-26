const countElement = document.querySelector('#count');
const button = document.querySelectorAll('button');
const heroSection = document.querySelector('.hero-section');    
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
let count = 0;
  //left and right button for hero section
const hero =[
    'url("../amazone_front_png/amazone_front1.jpg")',
    'url("../amazone_front_png/amazone_front2.jpg")',
    'url("../amazone_front_png/amazone_front3.jpg")',
    'url("../amazone_front_png/amazone_front4.jpg")',
    'url("../amazone_front_png/amazone_front5.jpg")',
    'url("../amazone_front_png/amazone_front6.jpg")'
];

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % hero.length;
    heroSection.style.backgroundImage = hero[currentIndex];
});
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + hero.length) % hero.length;
    heroSection.style.backgroundImage = hero[currentIndex];
});

//auto change hero section image every 5 second
// setInterval(() => {
//     currentIndex = (currentIndex + 1) % hero.length;
//     heroSection.style.backgroundImage = hero[currentIndex];
// }, 5000);
// --- Auto-Play Logic ---

// Ek function banate hain jo image change karega
const changeImageAuto = () => {
    currentIndex = (currentIndex + 1) % hero.length;
    heroSection.style.backgroundImage = hero[currentIndex];
};

// Har 3 second (3000ms) mein function ko call karein
let autoSlide = setInterval(changeImageAuto, 3000);

// Jab user khud click kare, toh timer reset hona chahiye
const resetTimer = () => {
    clearInterval(autoSlide); // Purana timer roko
    autoSlide = setInterval(changeImageAuto, 3000); // Naya timer shuru karo
};

// Apne click listeners mein resetTimer() ko call karein
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % hero.length;
    heroSection.style.backgroundImage = hero[currentIndex];
    resetTimer();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + hero.length) % hero.length;
    heroSection.style.backgroundImage = hero[currentIndex];
    resetTimer();
});

//count for add to cart and remove from cart

button.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('increment') && count < 10) {
         if(count === 9) {
                alert('Cart is full. Cannot add more items.');
            }
            count++;
        } else if (btn.classList.contains('decrement') && count > 0) {
                if (count === 1) {
                    alert('Cart is empty. Cannot remove more items.');
                }
            count--;
        }
        countElement.textContent = count;
    });
});
