const toggle = document.querySelector('.toggle')
const links = document.querySelector('.links')
console.log(toggle);

toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate');
    links.classList.toggle('active');
});