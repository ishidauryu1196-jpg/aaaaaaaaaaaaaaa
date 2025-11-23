document.addEventListener('DOMContentLoaded', () => {
    // Floating Hearts Animation
    const heartsContainer = document.querySelector('.hearts-container');
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    };

    setInterval(createHeart, 300);

    // Modal Logic
    const cards = document.querySelectorAll('.card');
    const closeBtns = document.querySelectorAll('.close-btn');
    const modals = document.querySelectorAll('.modal');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            const modal = document.getElementById(targetId);
            modal.classList.add('active');
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            modal.classList.remove('active');
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });

    // Music Player
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '<i class="fas fa-music"></i> Play Music';
            musicBtn.style.background = 'rgba(255, 255, 255, 0.8)';
            musicBtn.style.color = '#4a4a4a';
        } else {
            bgMusic.play();
            musicBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
            musicBtn.style.background = '#ff6b6b';
            musicBtn.style.color = 'white';
        }
        isPlaying = !isPlaying;
    });
});
