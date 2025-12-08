const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const items = accordion.querySelectorAll('.accordion-item');

    items.forEach(item => {
        const head = item.querySelector('.accordion-head');
        const panel = item.querySelector('.accordion-panel');

        head.addEventListener('click', () => {
            if (accordion.classList.contains('single') && !head.classList.contains('active')) {
                accordion.querySelectorAll('.accordion-panel.active').forEach(p => {
                    p.classList.remove('active');
                    p.style.maxHeight = 0;
                });
                accordion.querySelectorAll('.accordion-head.active').forEach(h => {
                    h.classList.remove('active');
                });
            }

            head.classList.toggle('active');
            panel.classList.toggle('active');

            if (panel.classList.contains('active')) {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } else {
                panel.style.maxHeight = 0;
            }
        });
    });
});