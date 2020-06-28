// const [display, image] = [document.querySelector('#current_img'), document.querySelectorAll('.pictures img')];
// image.forEach(pic => pic.addEventListener('mouseover', photo => (display.src = photo.target.src)));


let display = document.querySelector('#current_img');
let image = document.querySelectorAll('.pictures img');

image[7].style.opacity = .4;

image.forEach(function (pic) {
    pic.addEventListener('click', function (photo) {
        image.forEach(function (allOpacity) {
            allOpacity.style.opacity = 1;
        })
        display.src = photo.target.src;
        photo.target.style.opacity = .4;

        display.classList.add('fade_in');

        setTimeout(function () {
            display.classList.remove('fade_in');
        }, 500);
    });
});