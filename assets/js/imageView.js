const popup = document.querySelector('#popup');
const gallery = document.querySelectorAll('#gallery');
const selectedImage = document.querySelector('#selectedImage');

const selectedIndex = null;
for (const button of gallery) {
    button.addEventListener('click', () => {
        selectedImage.src = button.src;
        popup.style.transform = `translateY(0%)`;

    })
    popup.addEventListener('click', () => {
        popup.style.transform = `translateY(-100%)`;
        popup.src = '';

    })
}
