const body = document.body;
const changeButton = document.getElementById('change-button');
const currentTheme = document.getElementById('current-theme');

changeButton.addEventListener('click', () => {
    console.log('click');
    if (!body.classList.contains('dark')) {
        body.classList.add('dark');
        currentTheme.innerText = 'Current Theme : Dark';
    } else {
        body.classList.remove('dark');
        currentTheme.innerText = 'Current Theme : Light';
    }
})