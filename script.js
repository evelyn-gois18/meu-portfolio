const cards = document.querySelectorAll('.projeto-card');
const modal = document.querySelector('.modal');
const fechar = document.querySelector('.fechar');
const infos = document.querySelectorAll('.info-projeto');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        infos.forEach(info => info.style.display = 'none');

        const infoSelecionada = document.querySelector(`.info-projeto[data-id="${id}"]`);
        if (infoSelecionada) {
            infoSelecionada.style.display = 'flex';
        }

        modal.style.display = 'flex';
    });
});

fechar.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
