const tabBtn = document.querySelectorAll('.tab-button');
const tab = document.querySelectorAll('.tab');

tabBtn.forEach(tabName => {
    tabName.addEventListener('click', () => {
        tabBtn.forEach(btn => {
            btn.classList.remove('active');
        })
        tab.forEach(content => {
            content.classList.remove('active');
        })
        tabName.classList.add('active');

        const targetTabId = tabName.id.replace('-btn', '');
        document.getElementById(targetTabId).classList.add('active');
    })
})
