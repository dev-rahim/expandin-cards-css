const panels = document.querySelectorAll('.panel');


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
    })
});

function removeActiveClass() {
    for (const panel of panels) {
        panel.classList.remove('active');
    }
}
