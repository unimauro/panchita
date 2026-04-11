// SVG icons
const icons = {
    whatsapp: '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
    download: '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',
    share: '<svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>'
};

const pageUrl = window.location.href;
const shareText = '🐾 Mira a Panchita, la gatita del barrio que todos queremos! ';

function showToast(msg) {
    const toast = document.getElementById('share-toast');
    toast.textContent = msg;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 2500);
}

function shareWhatsApp() {
    window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(shareText + pageUrl), '_blank');
}
function shareFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(pageUrl) + '&quote=' + encodeURIComponent(shareText), '_blank');
}
function shareTwitter() {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareText) + '&url=' + encodeURIComponent(pageUrl), '_blank');
}
function shareTikTok() {
    navigator.clipboard.writeText(shareText + pageUrl).then(() => {
        showToast('Link copiado! Pegalo en TikTok');
    });
}
function downloadImage(imgSrc) {
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = 'panchita-' + Date.now() + '.jpg';
    link.click();
}
async function nativeShare() {
    if (navigator.share) {
        try {
            await navigator.share({ title: 'La Gata Panchita', text: shareText, url: pageUrl });
        } catch(e) {}
    }
}

// Build share popup menu items
function buildPopupItems(imgSrc, popup) {
    const items = [
        { icon: 'whatsapp', label: 'WhatsApp', fn: shareWhatsApp },
        { icon: 'facebook', label: 'Facebook', fn: shareFacebook },
        { icon: 'twitter', label: 'X / Twitter', fn: shareTwitter },
        { icon: 'tiktok', label: 'TikTok', fn: shareTikTok },
        { icon: 'download', label: 'Descargar foto', fn: () => downloadImage(imgSrc) },
    ];
    if (navigator.share) {
        items.push({ icon: 'native', label: 'Mas opciones...', fn: nativeShare });
    }
    popup.innerHTML = '';
    items.forEach(it => {
        const btn = document.createElement('button');
        btn.className = 'share-popup-item';
        btn.innerHTML = '<span class="sp-icon ic-' + it.icon + '">' + icons[it.icon === 'native' ? 'share' : it.icon] + '</span>' + it.label;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            it.fn();
            popup.classList.remove('open');
        });
        popup.appendChild(btn);
    });
}

// Close all popups
function closeAllPopups() {
    document.querySelectorAll('.share-popup, .lightbox-share-popup').forEach(p => p.classList.remove('open'));
    document.querySelectorAll('.share-trigger').forEach(t => t.classList.remove('active'));
}

// Add share trigger + popup to each gallery item
document.querySelectorAll('.gallery-item').forEach(item => {
    const img = item.querySelector('img');

    const trigger = document.createElement('button');
    trigger.className = 'share-trigger';
    trigger.innerHTML = icons.share;
    trigger.setAttribute('aria-label', 'Compartir');

    const popup = document.createElement('div');
    popup.className = 'share-popup';
    buildPopupItems(img.src, popup);

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const wasOpen = popup.classList.contains('open');
        closeAllPopups();
        if (!wasOpen) {
            popup.classList.add('open');
            trigger.classList.add('active');
        }
    });

    item.appendChild(trigger);
    item.appendChild(popup);
});

// Close popups when clicking outside or moving mouse away
document.addEventListener('click', (e) => {
    if (!e.target.closest('.share-trigger') && !e.target.closest('.share-popup') &&
        !e.target.closest('.lightbox-share-trigger') && !e.target.closest('.lightbox-share-popup')) {
        closeAllPopups();
    }
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxShareBtn = document.getElementById('lightbox-share-btn');
const lightboxSharePopup = document.getElementById('lightbox-share-popup');

lightboxShareBtn.innerHTML = icons.share;

document.querySelectorAll('.gallery-item').forEach(item => {
    const img = item.querySelector('img');
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        buildPopupItems(img.src, lightboxSharePopup);
        lightboxSharePopup.classList.remove('open');
        lightbox.classList.add('active');
    });
});

lightboxShareBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    lightboxSharePopup.classList.toggle('open');
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg &&
        !e.target.closest('.lightbox-share-trigger') &&
        !e.target.closest('.lightbox-share-popup')) {
        lightbox.classList.remove('active');
        lightboxSharePopup.classList.remove('open');
    }
});

// Sidebar navigation - active section tracking
const navDots = document.querySelectorAll('.nav-dot');
const sectionIds = ['hero', 'conoce', 'salud', 'galeria', 'carino', 'quiz', 'amigo', 'mapa', 'visita', 'mensajes'];
const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

function updateActiveNav() {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    let currentId = sectionIds[0];
    sections.forEach(section => {
        if (section.offsetTop <= scrollPos) currentId = section.id;
    });
    navDots.forEach(dot => {
        dot.classList.toggle('active', dot.getAttribute('href') === '#' + currentId);
    });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// === VISITOR COUNTER (global via API) ===
(function() {
    const el = document.getElementById('visitor-count');
    const visited = sessionStorage.getItem('panchita-visited');
    if (!visited) {
        sessionStorage.setItem('panchita-visited', '1');
        fetch('https://api.counterapi.dev/v1/panchita-unimauro/visits/up/')
            .then(r => r.json())
            .then(data => { el.textContent = (data.count || 1).toLocaleString(); })
            .catch(() => { el.textContent = '---'; });
    } else {
        fetch('https://api.counterapi.dev/v1/panchita-unimauro/visits/')
            .then(r => r.json())
            .then(data => { el.textContent = (data.count || 1).toLocaleString(); })
            .catch(() => { el.textContent = '---'; });
    }
})();

// === LOVE BUTTON (global via API) ===
(function() {
    const countEl = document.getElementById('love-count');
    const btn = document.getElementById('love-btn');
    const card = document.getElementById('love-card');

    fetch('https://api.counterapi.dev/v1/panchita-unimauro/loves/')
        .then(r => r.json())
        .then(data => { countEl.textContent = (data.count || 0).toLocaleString(); })
        .catch(() => { countEl.textContent = '0'; });

    btn.addEventListener('click', () => {
        fetch('https://api.counterapi.dev/v1/panchita-unimauro/loves/up/')
            .then(r => r.json())
            .then(data => { countEl.textContent = (data.count || 0).toLocaleString(); })
            .catch(() => {});

        // Flying hearts
        for (let i = 0; i < 3; i++) {
            const heart = document.createElement('span');
            heart.className = 'flying-heart';
            heart.textContent = ['❤️','💖','💕','💗','🩷'][Math.floor(Math.random()*5)];
            heart.style.left = (30 + Math.random()*40) + '%';
            heart.style.bottom = '40%';
            heart.style.animationDelay = (i * 0.15) + 's';
            card.appendChild(heart);
            setTimeout(() => heart.remove(), 1500);
        }
    });
})();

// === CAT FACTS CAROUSEL ===
(function() {
    const facts = [
        { emoji: '😴', text: 'Los gatos duermen entre 12 y 16 horas al dia. Son los reyes de la siesta!' },
        { emoji: '👃', text: 'Los gatos tienen 200 millones de receptores olfativos. Los humanos solo 5 millones.' },
        { emoji: '🐾', text: 'Cada gato tiene un patron unico en su nariz, como nuestras huellas dactilares.' },
        { emoji: '🏃', text: 'Los gatos pueden correr hasta 48 km/h en distancias cortas.' },
        { emoji: '💤', text: 'Los gatos pasan el 70% de su vida durmiendo. Panchita es una experta!' },
        { emoji: '👂', text: 'Los gatos pueden rotar sus orejas 180 grados gracias a 32 musculos.' },
        { emoji: '🐱', text: 'Los gatos ronronean a una frecuencia que puede ayudar a sanar huesos y musculos.' },
        { emoji: '👁️', text: 'Los gatos pueden ver en la oscuridad 6 veces mejor que los humanos.' },
        { emoji: '🧠', text: 'El cerebro de un gato es un 90% similar al de un humano.' },
        { emoji: '❤️', text: 'El corazon de un gato late entre 110 y 140 veces por minuto, el doble que el nuestro.' }
    ];
    let current = 0;
    const textEl = document.getElementById('fact-text');
    const emojiEl = document.getElementById('fact-emoji');
    const dotsContainer = document.getElementById('fact-dots');

    facts.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'fact-dot' + (i === 0 ? ' active' : '');
        dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('.fact-dot');

    function showFact(idx) {
        current = (idx + facts.length) % facts.length;
        textEl.style.opacity = 0;
        setTimeout(() => {
            textEl.textContent = facts[current].text;
            emojiEl.textContent = facts[current].emoji;
            textEl.style.opacity = 1;
            dots.forEach((d,i) => d.classList.toggle('active', i === current));
        }, 200);
    }
    showFact(0);
    document.getElementById('fact-prev').addEventListener('click', () => showFact(current - 1));
    document.getElementById('fact-next').addEventListener('click', () => showFact(current + 1));
    setInterval(() => showFact(current + 1), 6000);
})();

// === PURR SOUND ===
(function() {
    const btn = document.getElementById('purr-btn');
    let audioCtx = null;
    let purring = false;
    let nodes = [];

    btn.addEventListener('click', () => {
        if (purring) {
            nodes.forEach(n => { try { n.stop ? n.stop() : n.disconnect(); } catch(e){} });
            nodes = [];
            purring = false;
            btn.classList.remove('purring');
            btn.textContent = '😺';
            return;
        }
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        purring = true;
        btn.classList.add('purring');
        btn.textContent = '😻';

        // Create purring sound with oscillators
        const duration = 4;
        const now = audioCtx.currentTime;

        for (let i = 0; i < 3; i++) {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            const lfo = audioCtx.createOscillator();
            const lfoGain = audioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.value = 25 + i * 3;
            lfo.type = 'sine';
            lfo.frequency.value = 20 + i * 5;
            lfoGain.gain.value = 8;

            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);
            osc.connect(gain);
            gain.connect(audioCtx.destination);

            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.06, now + 0.3);
            gain.gain.setValueAtTime(0.06, now + duration - 0.5);
            gain.gain.linearRampToValueAtTime(0, now + duration);

            osc.start(now);
            osc.stop(now + duration);
            lfo.start(now);
            lfo.stop(now + duration);
            nodes.push(osc, lfo);
        }

        setTimeout(() => {
            purring = false;
            btn.classList.remove('purring');
            btn.textContent = '😺';
            nodes = [];
        }, duration * 1000);
    });
})();

// === DAYS COUNTER ===
(function() {
    const startDate = new Date('2016-01-01');
    const today = new Date();
    const days = Math.floor((today - startDate) / (1000*60*60*24));
    document.getElementById('days-count').textContent = days.toLocaleString();
})();

// === DARK MODE ===
(function() {
    const btn = document.getElementById('dark-toggle');
    const saved = localStorage.getItem('panchita-dark');
    if (saved === 'true') {
        document.documentElement.classList.add('dark-mode');
        btn.textContent = '☀️';
    }
    btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        const isDark = document.documentElement.classList.contains('dark-mode');
        localStorage.setItem('panchita-dark', isDark);
        btn.textContent = isDark ? '☀️' : '🌙';
    });
})();

// === AMBIENT MUSIC ===
(function() {
    const btn = document.getElementById('music-toggle');
    let audioCtx = null;
    let playing = false;
    let musicNodes = [];

    function startMusic() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88];
        function playNote() {
            if (!playing) return;
            const freq = notes[Math.floor(Math.random()*notes.length)];
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 0.3);
            gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 2);
            musicNodes.push(osc);
            setTimeout(playNote, 800 + Math.random()*1200);
        }
        playNote();
    }

    btn.addEventListener('click', () => {
        if (playing) {
            playing = false;
            btn.classList.remove('playing');
            btn.textContent = '🎵';
            musicNodes.forEach(n => { try { n.stop(); } catch(e){} });
            musicNodes = [];
        } else {
            playing = true;
            btn.classList.add('playing');
            btn.textContent = '🔇';
            startMusic();
        }
    });
})();

// === PAW CURSOR TRAIL ===
(function() {
    let lastPaw = 0;
    const paws = ['🐾','🐾','🐾'];
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastPaw < 150) return;
        lastPaw = now;
        const paw = document.createElement('span');
        paw.className = 'paw-trail';
        paw.textContent = paws[Math.floor(Math.random()*paws.length)];
        paw.style.left = e.clientX + 'px';
        paw.style.top = e.clientY + 'px';
        paw.style.setProperty('--paw-rot', (Math.random()*60-30) + 'deg');
        document.body.appendChild(paw);
        setTimeout(() => paw.remove(), 1200);
    });
})();

// === QUIZ ===
(function() {
    const questions = [
        { q: '¿Cuantas horas al dia duerme un gato en promedio?', opts: ['6-8 horas','12-16 horas','18-20 horas','4-6 horas'], correct: 1 },
        { q: '¿Los gatos pueden saborear lo dulce?', opts: ['Si, les encanta','No, no pueden','Solo un poco','Depende del gato'], correct: 1 },
        { q: '¿Cuantos musculos tienen los gatos en cada oreja?', opts: ['12','22','32','42'], correct: 2 },
        { q: '¿A que velocidad maxima puede correr un gato?', opts: ['20 km/h','35 km/h','48 km/h','60 km/h'], correct: 2 },
        { q: '¿Cual de estos alimentos es toxico para los gatos?', opts: ['Pollo','Cebolla','Arroz','Pescado'], correct: 1 },
        { q: '¿Cuantos años vive un gato en promedio?', opts: ['5-8 años','8-12 años','12-18 años','20-25 años'], correct: 2 },
        { q: '¿Los gatos ven en colores?', opts: ['No, solo blanco y negro','Si, como los humanos','Si, pero limitado (azul y verde)','Solo en rojo'], correct: 2 },
        { q: '¿Que porcentaje de su vida pasa un gato durmiendo?', opts: ['30%','50%','70%','90%'], correct: 2 },
    ];
    let current = 0, score = 0, answered = false;
    const qEl = document.getElementById('quiz-question');
    const oEl = document.getElementById('quiz-options');
    const pEl = document.getElementById('quiz-progress');
    const rEl = document.getElementById('quiz-result');
    const sEl = document.getElementById('quiz-score');

    function renderProgress() {
        pEl.innerHTML = '';
        questions.forEach((_, i) => {
            const pip = document.createElement('span');
            pip.className = 'quiz-pip' + (i === current ? ' current' : '');
            pEl.appendChild(pip);
        });
    }

    function showQuestion() {
        if (current >= questions.length) {
            oEl.style.display = 'none';
            qEl.style.display = 'none';
            rEl.style.display = 'block';
            const pct = Math.round(score/questions.length*100);
            let msg = pct >= 80 ? '🏆 Eres un experto gatuno!' : pct >= 50 ? '😸 Nada mal, sabes bastante!' : '🐱 Sigue aprendiendo sobre gatos!';
            sEl.innerHTML = score + '/' + questions.length + ' correctas (' + pct + '%)<br><span style="font-size:1rem">' + msg + '</span>';
            renderProgress();
            return;
        }
        answered = false;
        const q = questions[current];
        qEl.textContent = (current+1) + '. ' + q.q;
        oEl.innerHTML = '';
        oEl.style.display = 'grid';
        q.opts.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-opt';
            btn.textContent = opt;
            btn.addEventListener('click', () => {
                if (answered) return;
                answered = true;
                if (i === q.correct) {
                    btn.classList.add('correct');
                    score++;
                    pEl.children[current].classList.add('done');
                } else {
                    btn.classList.add('wrong');
                    oEl.children[q.correct].classList.add('correct');
                    pEl.children[current].classList.add('fail');
                }
                oEl.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
                setTimeout(() => { current++; showQuestion(); }, 1200);
            });
            oEl.appendChild(btn);
        });
        renderProgress();
    }

    document.getElementById('quiz-restart').addEventListener('click', () => {
        current = 0; score = 0;
        rEl.style.display = 'none';
        qEl.style.display = 'block';
        showQuestion();
    });
    showQuestion();
})();

// === PWA SERVICE WORKER ===
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
}
