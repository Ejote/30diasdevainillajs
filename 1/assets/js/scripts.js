window.addEventListener('DOMContentLoaded', (event) => {
    function reproducirsonido(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const tecla = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);

        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        tecla.classList.add('reproduccion');
    }

    function quitartransition(e) {
        if (e.propertyName !== 'transform') return;
        e.currentTarget.classList.remove('reproduccion');
    }

    const teclas = document.querySelectorAll('.tecla');
    teclas.forEach(key => key.addEventListener('transitionend', quitartransition));
    window.addEventListener('keydown', reproducirsonido);
});

