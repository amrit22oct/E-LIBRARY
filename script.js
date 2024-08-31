const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('close-popup');
const readMoreBtns = document.querySelectorAll('.read-more-btn');

// for Show popup
readMoreBtns.forEach(button => {
    button.addEventListener('click', () => {
        popup.style.display = 'flex';
    });
});

// for Closing popup
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// for Closing popup outside of the area 
window.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.style.display = 'none';
    }
});