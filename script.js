const cards = document.querySelectorAll('.projeto-card');
const modal = document.querySelector('.modal');
const fechar = document.querySelector('.fechar');
const infos = document.querySelectorAll('.info-projeto');

const fecharModal = () => {
    if (modal) {
        modal.style.display = 'none';
    }
};

const abrirModal = (id) => {
    if (!modal) return;

    infos.forEach((info) => {
        info.style.display = info.dataset.id === id ? 'flex' : 'none';
    });

    modal.style.display = 'flex';
};

cards.forEach((card) => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        abrirModal(id);
    });
});

if (fechar) {
    fechar.addEventListener('click', fecharModal);
}

if (modal) {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            fecharModal();
        }
    });
}
