const OpenBtn = document.getElementById('modal-open-button');
const CloseBtn = document.getElementById('modal-close-button');
const overlay = document.getElementById('overlay');

OpenBtn.addEventListener('click', ()=> {
    overlay.classList.remove('hidden');
});

CloseBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.add('hidden');
    }
});